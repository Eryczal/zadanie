import OpenAI from "openai";

class AiManager {
    constructor() {
        this.systemPrompt = `Jesteś asystentem zamieniającym tekst na semantyczny kod HTML zgodny z normami dostępności. Przetwórz podany tekst na HTML, pomijając znaczniki <html>, <head> i <body>. Generuj wyłącznie kod, bez żadnych dodatowych komentarzy ani odpowiedzi. Używaj nagłówków <h1>, <h2>, itd. zgodnie ze strukturą dokumentu. Używaj semantycznych znaczników HTML5. Całość umieść między znacznikiem <article>. Zdecyduj sam, w których miejscach powinny się znaleźć grafiki. W miejscach, gdzie odpowiednia będzie grafika, dodaj znacznik <figure>, a w nim umieść znacznik <img src="image_placeholder.jpg" alt="opisz w dokładny sposób grafikę dla promptu AI"> i znacznik <figcaption> z opisem obrazka. Dobierz ilość grafik do długości artykułu. Pamiętaj, by używać poprawnej polszczyzny. Spraw, by kod HTML był semantyczny, przejrzysty i odpowiedni na stronę internetową. Połącz elementy dotyczące tej samej kwestii artykułu znacznikami <div>, pamiętając o tym, by całość była semantyczna.`;
        this.openAi = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }

    async sendMessage(message) {
        console.log("Wysyłanie tekstu do OpenAI...");

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
