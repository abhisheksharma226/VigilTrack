import { pipeline } from '@xenova/transformers';

let extractor = null;

// Load model only once
export async function loadModel() {
  if (!extractor) {
    console.log('🔄 Loading ViT embedding model...');

    extractor = await pipeline(
      'image-feature-extraction',     // ✅ MUST be this
      'Xenova/vit-base-patch16-224',  // ✅ MUST be this (NO -in21k)
      {
        quantized: false
      }
    );

    console.log('✅ ViT model loaded successfully');
  }
  return extractor;
}

// Generate embedding from image URL
export async function generateEmbedding(imageUrl) {
  const model = await loadModel();

  const output = await model(imageUrl, {
    pooling: 'mean',     // ✅ REQUIRED
    normalize: true      // ✅ REQUIRED
  });

  // ✅ THIS IS CRITICAL
  return Array.from(output.data); // returns 768-d vector
}
