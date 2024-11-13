import OpenAI from "openai";

class AiManager {
    constructor() {
        this.systemPrompt = `Jesteś asystentem zamieniającym tekst na semantyczny kod HTML zgodny z normami dostępności. Przetwórz podany tekst na HTML, pomijając znaczniki <html>, <head>, i <body>. Generuj wyłącznie kod, bez żadnych dodatkowych komentarzy ani odpowiedzi. Używaj nagłówków <h1>, <h2>, itd. zgodnie ze strukturą dokumentu i dodawaj semantyczne znaczniki, takie jak <section>, <article>, <header>, <footer>, itp. W miejscach, gdzie odpowiednia będzie grafika, dodaj znacznik <img src="image_placeholder.jpg" alt="opisz grafikę dla promptu AI">, po którym umieść <figcaption> z opisem obrazka.`;
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
