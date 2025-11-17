import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export interface VectorItem {
  id: string;
  text: string;
  embedding: number[];
}

let vectors: VectorItem[] = []; // in-memory store

// --- Generate embedding ---
export async function embedText(text: string): Promise<number[]> {
  const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
  const result = await model.embedContent(text);
  return result.embedding.values;
}

// --- Add document to vector store ---
export async function addDocumentToStore(id: string, text: string) {
  const embedding = await embedText(text);
  vectors.push({ id, text, embedding });
}

// --- Cosine similarity ---
function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let na = 0;
  let nb = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] ** 2;
    nb += b[i] ** 2;
  }

  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

// --- Search from memory vector store ---
export async function search(query: string, topK = 3) {
  const embedding = await embedText(query);

  return vectors
    .map((v) => ({
      ...v,
      score: cosineSimilarity(embedding, v.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
