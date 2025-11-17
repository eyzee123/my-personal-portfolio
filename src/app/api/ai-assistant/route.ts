import { GoogleGenerativeAI } from "@google/generative-ai";
import { search } from "@/lib/vectorStore";
import { searchPDF } from "@/lib/pdfSearch";
import { scrapeWebsite } from "@/lib/scraper";

export async function POST(req: Request) {
  const { query } = await req.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

  await scrapeWebsite();
  const results = await search(query);
  const context = results.map((r: any) => r.text).join("\n\n");
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `
You are an AI assistant for my portfolio.
User Question: ${query}

Use only the context below. If the context does not contain the answer,
say "I don't have enough information."

Context:
${context}
`;

  const completion = await model.generateContent(prompt);
  const answer = completion.response.text();

  return Response.json({ answer });
}
