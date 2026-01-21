# export_model.py (RUN LOCALLY ONLY)

import torch
import torchvision.models as models
import os

MODEL_PATH = "models/mobilenetv2.onnx"

os.makedirs("models", exist_ok=True)

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

print("✅ mobilenetv2.onnx exported successfully")
