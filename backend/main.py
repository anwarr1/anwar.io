from fastapi import FastAPI
from pydantic import BaseModel
from chatbot import get_qa_chain
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
qa_chain = get_qa_chain()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or "*" for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

chat_history = []

class ChatRequest(BaseModel):
    question: str

@app.post("/chat")
async def chat(req: ChatRequest):
  

    response = qa_chain.invoke({
        "question": req.question,
        "chat_history": chat_history
    })
    
    # Add current Q&A to history
    chat_history.append((req.question, response["answer"]))
  
    
    return {
        "answer": response["answer"], 

    }