import os
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEndpointEmbeddings
from dotenv import load_dotenv

load_dotenv()

def ingest_docs(data_dir="ana", persist_dir="db"):
    # Get HuggingFace API key from environment
    huggingface_api_key = os.environ.get("HUGGINGFACE_API_KEY")
    
    if not huggingface_api_key:
        raise ValueError("HUGGINGFACE_API_KEY not found in environment variables")
    
    # Use HuggingFace API for embeddings instead of local model
    embeddings = HuggingFaceEndpointEmbeddings(
        model="sentence-transformers/all-MiniLM-L6-v2",
        task="feature-extraction",
        huggingfacehub_api_token=huggingface_api_key
    )
    
    docs = []
    
    # Load all text files from the data directory
    for file in os.listdir(data_dir):
        if file.endswith(".txt"):
            loader = TextLoader(os.path.join(data_dir, file), encoding="utf-8")
            docs.extend(loader.load())
    
    print(f"📄 Loaded {len(docs)} documents.")
    
    # Split documents into chunks
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=400, 
        chunk_overlap=50,
        separators=["\n\n"]
    )
    split_docs = splitter.split_documents(docs)
    
    print(f"📄 Split into {len(split_docs)} chunks.")
    
    # Create vector database with the split documents (not the original docs)
    db = Chroma.from_documents(
        split_docs,  # Use split_docs instead of docs
        embeddings, 
        persist_directory=persist_dir
    )
    
    db.persist()
    print("✅ Data ingested and persisted.")

if __name__ == "__main__":
    ingest_docs()
    print("Ingestion complete.")