import os
from langchain.chains import ConversationalRetrievalChain
from langchain_huggingface import HuggingFaceEndpointEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()

google_api_key = os.environ.get("GOOGLE_API_KEY")
huggingface_api_key = os.environ.get("HUGGINGFACE_API_KEY")

def get_qa_chain(persist_dir="db"):
    
  try:  
    # Use HuggingFace API for embeddings instead of local model
    print("🔑 Loading Hugging Face Embeddings...")
  
    embeddings = HuggingFaceEndpointEmbeddings(
          model="sentence-transformers/all-MiniLM-L6-v2",
          task="feature-extraction",
          huggingfacehub_api_token=huggingface_api_key
      )
    print("💾 Connecting to Chroma...")
      
  
    vectordb = Chroma(
          persist_directory=persist_dir, 
          embedding_function=embeddings
      )
      
    retriever = vectordb.as_retriever(
          search_type="similarity", 
          search_kwargs={"k": 10}
      )
    print("🤖 Initializing Gemini LLM...")
  
    llm = ChatGoogleGenerativeAI(
          model="gemini-2.5-flash-preview-04-17",
          temperature=0.7
      )
      
    template = """ Tu es mon assistant personnel. Tu réponds à ma place, comme si tu étais moi. Tu utilises un ton naturel, direct et simple. Tu n'utilises jamais des formules comme "D'après ce que j'ai" ou "Selon mes infos". Tu ne donnes que les infos que je donnerais moi-même. Si tu ne sais pas quelque chose, tu dis juste "je ne sais pas" . Tu n'inventes rien.
  
      Contexte récupéré: {context}
  
      Question: {question}
      
      Réponds en français: """
      
    custom_prompt = PromptTemplate(
          input_variables=["question"],
          template=template
      )
    print("🧠 Creating ConversationalRetrievalChain...")
    qa = ConversationalRetrievalChain.from_llm(
          llm=llm,
          retriever=retriever,
          return_source_documents=False,
          combine_docs_chain_kwargs={"prompt": custom_prompt}
      )
      
    return qa
  except Exception as e:
        print(f"❌ Error during QA chain setup: {e}")
        raise













