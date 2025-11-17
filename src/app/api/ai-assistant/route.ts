import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';
import { GoogleGenAI } from '@google/genai';
const openai = new GoogleGenAI({ apiKey: process.env.GEMENI_API_KEY });

export async function POST(req: NextRequest) {
  
}
