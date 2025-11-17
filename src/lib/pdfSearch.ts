import { supabase } from "./supabaseClient";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function searchPDF(query: string, topK = 5) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

  // Embed user query
  console.log("Search PDF query",query);
  const result = await model.embedContent(query);
  const queryEmbedding = result.embedding.values;
  console.log("Search PDF result",queryEmbedding);

  // Query Supabase vector store
  const { data, error } = await supabase.rpc("match_pdf_chunks", {
    query_embedding: queryEmbedding,
    match_count: topK,
  });

  if (error) throw error;
  return data; // contains content + similarity
}
