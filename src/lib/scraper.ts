// /lib/scraper.ts
import axios from "axios";
import * as cheerio from "cheerio";
import { addDocumentToStore } from "./vectorStore"; // your website vector logic

export async function scrapeWebsite() {
  const pages = [
    "/", 
  ];

  const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

  for (const page of pages) {
    try {
      const fullUrl = `${BASE_URL}${page}`;
      const html = (await axios.get(fullUrl)).data;

      const $ = cheerio.load(html);
      $("script, style, noscript").remove();

      const text = $("body").text().replace(/\s+/g, " ").trim();

      console.log(`Scraped ${page}: ${text.length} characters`);

      await addDocumentToStore(page, text);
    } catch (err) {
      console.error(`Failed to scrape ${page}:`, err);
    }
  }

  console.log("Website scraping finished!");
}
