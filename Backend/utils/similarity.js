export const cosineSimilarity = (A, B) => {
    let dot = 0, magA = 0, magB = 0;
  
    for (let i = 0; i < A.length; i++) {
      dot += A[i] * B[i];
      magA += A[i] ** 2;
      magB += B[i] ** 2;
    }
  
    return dot / (Math.sqrt(magA) * Math.sqrt(magB));
  };
  