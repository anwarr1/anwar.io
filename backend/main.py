from fastapi import FastAPI,Request
from pydantic import BaseModel
from chatbot import get_qa_chain
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime


app = FastAPI()
qa_chain = get_qa_chain()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or "*" for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chat_histories = {}

class ChatRequest(BaseModel):
    question: str
    session_id: str


@app.post("/chat")
async def chat(request:Request,req: ChatRequest):
    session_id = req.session_id

    # Get or create session history
    history = chat_histories.setdefault(session_id, [])

    response = qa_chain.invoke({
        "question": req.question,
        "chat_history": history
    })

    client_host = request.client.host
    user_agent = request.headers.get("user-agent")
    timestamp = datetime.utcnow().isoformat()

    metadata = {
        "ip": client_host,
        "user_agent": user_agent,
        "timestamp": timestamp,
        "question": req.question,
        "response": response["answer"]
    }
  
    with open("./chat_history.txt", "a", encoding="utf-8") as f:
        f.write(f"{metadata['timestamp']} - {metadata['ip']} - {metadata['user_agent']} - Q: {metadata['question']} - A: {metadata['response']}\n")
    
    # Add current Q&A to history
    history.append((req.question, response["answer"]))
  
    
    return {
        "answer": response["answer"], 

    }