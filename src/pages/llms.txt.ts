// /llms.txt – kompakte Infos für KI-Assistenten (ChatGPT, Gemini, Perplexity …), Inhalt in src/data/seo.ts
import { llmsText } from "../data/seo";

export function GET() {
  return new Response(llmsText(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
