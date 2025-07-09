# Use the official Python image from the Docker Hub
FROM python:3.12-slim


WORKDIR /app

# Install system dependencies for scientific libraries
RUN apt-get update && \
    apt-get install -y build-essential gcc && \
    apt-get clean

# Copy files
COPY . /app

# Install Python deps
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Clean up build tools (optional, if not needed after pip install)
RUN apt-get purge -y build-essential gcc && \
    apt-get autoremove -y

EXPOSE 8080

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
