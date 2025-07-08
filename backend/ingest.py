import os
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_huggingface import HuggingFaceEmbeddings


def ingest_docs(data_dir="ana", persist_dir="db"):
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    docs = []
    for file in os.listdir(data_dir):
        if file.endswith(".txt"):
            loader = TextLoader(os.path.join(data_dir, file),encoding="utf-8")
            docs.extend(loader.load())

    splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=50,separators=["\n\n"] )
    split_docs = splitter.split_documents(docs)
    print(f"📄 Loaded split_docs.")
    print(f"📄 Loaded {len(split_docs)} chunks.")


    db = Chroma.from_documents(docs, embeddings, persist_directory=persist_dir)
    db.persist()
    print("✅ Data ingested and persisted.")
if __name__ == "__main__":
    ingest_docs()
    print("Ingestion complete.")

    

