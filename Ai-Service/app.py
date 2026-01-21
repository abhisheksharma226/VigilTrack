from fastapi import FastAPI, UploadFile, File
from PIL import Image
import numpy as np
import onnxruntime as ort
import io

app = FastAPI()

MODEL_PATH = "models/mobilenetv2.onnx"

# Load ONNX model
session = ort.InferenceSession(
    MODEL_PATH,
    providers=["CPUExecutionProvider"]
)

input_name = session.get_inputs()[0].name

def preprocess(image: Image.Image):
    image = image.resize((224, 224))
    image = np.array(image).astype(np.float32) / 255.0

    # Convert to float32 explicitly
    mean = np.array([0.485, 0.456, 0.406], dtype=np.float32)
    std = np.array([0.229, 0.224, 0.225], dtype=np.float32)

    image = (image - mean) / std
    image = np.transpose(image, (2, 0, 1))
    image = np.expand_dims(image, axis=0)
    image = image.astype(np.float32)  # ✅ force float32
    return image


@app.post("/ai/embedding")
async def generate_embedding(file: UploadFile = File(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).convert("RGB")

    tensor = preprocess(image)
    output = session.run(None, {input_name: tensor})[0]

    embedding = output.flatten()
    embedding = embedding / np.linalg.norm(embedding)

    return {
        "embedding": embedding.tolist(),
        "dimension": len(embedding)
    }

@app.get("/")
def health():
    return {"status": "AI Service running"}
