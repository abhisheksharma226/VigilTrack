import { pipeline } from '@xenova/transformers';

let extractor = null;

export async function loadModel() {
  if (!extractor) {
    console.log('🔄 Loading ViT embedding model...');

    extractor = await pipeline('image-feature-extraction', 'Xenova/vit-base-patch16-224', {
      quantized: false
    });

    console.log('✅ ViT model loaded successfully');
  }
  return extractor;
}

export async function generateEmbedding(imageUrl) {
  const model = await loadModel();

  const output = await model(imageUrl, {
    pooling: 'mean',       // important! averages the patch embeddings
    normalize: true        // important! makes vector length=1
  });

  // Convert TypedArray to JS array
  return Array.from(output.data);  // ✅ this MUST be 768-length
}
