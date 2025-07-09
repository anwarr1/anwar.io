import os
from langchain.chains import ConversationalRetrievalChain
from langchain_huggingface import HuggingFaceEndpointEmbeddings
from langchain_chroma import Chroma
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv()

google_api_key = os.environ.get("GOOGLE_API_KEY")
huggingface_api_key = os.environ.get("HUGGINGFACE_API_KEY")

def get_qa_chain(persist_dir="db"):
    try:
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

        print("🤖 Initializing Gemini LLM...")
        llm = ChatGoogleGenerativeAI(
            model="gemini-2.5-flash-preview-04-17",
            temperature=0.7
        )

        print("🧠 Creating ConversationalRetrievalChain...")
        qa = ConversationalRetrievalChain.from_llm(
            llm=llm,
            retriever=vectordb.as_retriever(search_type="similarity", search_kwargs={"k": 10}),
            return_source_documents=False,
            combine_docs_chain_kwargs={
                "prompt": PromptTemplate(
                    input_variables=["context", "question"],
                    template=""" Tu es mon assistant personnel. ... Réponds en français: """
                )
            }
        )

        print("✅ QA chain ready.")
        return qa

    except Exception as e:
        print(f"❌ Error during QA chain setup: {e}")
        raise
