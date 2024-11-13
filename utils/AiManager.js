import OpenAI from "openai";

class AiManager {
    constructor() {
        this.systemPrompt = `Jesteś asystentem zamieniającym tekst na semantyczny kod HTML zgodny z normami dostępności. Przetwórz podany tekst na HTML, pomijając znaczniki <html>, <head> i <body>. Generuj wyłącznie kod, bez żadnych dodatowych komentarzy ani odpowiedzi. Używaj nagłówków <h1>, <h2>, itd. zgodnie ze strukturą dokumentu. Używaj semantycznych znaczników HTML5. Całość umieść między znacznikiem <article>. Zdecyduj sam, w których miejscach powinna się znaleźć grafika. W miejscach, gdzie odpowiednia będzie grafika, dodaj znacznik <figure>, a w nim umieść znacznik <img src="image_placeholder.jpg" alt="opisz grafikę dla promptu AI"> i znacznik <figcaption> z opisem obrazka. Spraw, by kod HTML był semantyczny, przejrzysty i odpowiedni na stronę internetową.`;
        this.openAi = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    async sendMessage(message) {
        const response = await this.openAi.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: this.systemPrompt },
                { role: "user", content: message },
            ],
        });

        return response.choices[0].message.content;
    }
}

export { AiManager };
