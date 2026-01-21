from fastapi import FastAPI, UploadFile, File
from PIL import Image
import numpy as np
import onnxruntime as ort
import io
import os
import torch
import torchvision.models as models
import torchvision.transforms as transforms

app = FastAPI()

MODEL_PATH = "mobilenetv2.onnx"

# -----------------------------
# Export model to ONNX (ONCE)
# -----------------------------
def export_model():
    if os.path.exists(MODEL_PATH):
        return

    print("🔄 Exporting MobileNetV2 to ONNX...")
    model = models.mobilenet_v2(weights=models.MobileNet_V2_Weights.DEFAULT)
    model.eval()

    dummy = torch.randn(1, 3, 224, 224)

    torch.onnx.export(
        model,
        dummy,
        MODEL_PATH,
        input_names=["input"],
        output_names=["output"],
        opset_version=18
    )

    print("✅ ONNX model exported")

# export_model()

# -----------------------------
# Load ONNX model
# -----------------------------
session = ort.InferenceSession(
    MODEL_PATH,
    providers=["CPUExecutionProvider"]
)
input_name = session.get_inputs()[0].name

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

# -----------------------------
# API
# -----------------------------
@app.post("/ai/embedding")
async def generate_embedding(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")

        tensor = transform(image).unsqueeze(0).numpy()

        output = session.run(None, {input_name: tensor})[0]

        embedding = output.flatten()
        embedding = embedding / np.linalg.norm(embedding)

        return {"embedding": embedding.tolist()}

    except Exception as e:
        return {"error": str(e)}

@app.get("/")
def health():
    return {"status": "AI Service running"}
