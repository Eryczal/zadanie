# Zadanie

## Spis

-   [Działanie Aplikacji](#działanie-aplikacji)
-   [Prompt AI](#prompt-ai)
-   [Uruchamianie](#uruchamianie)

## Działanie Aplikacji

Stworzyłem aplikację z myślą, by była ona czytelna i łatwa do rozbudowy w przyszłości. Aplikacja została podzielona na dwa pliki: jeden do zarządzania AI, drugi do zarządzania plikami.

Aplikacja na bieżąco informuje w konsoli o statusie (wczytywanie tekstu, wysyłanie do API, zapisywanie, gotowe).

## Prompt AI

Prompt jest dostępny w pliku `AiManager`. Dobrałem go tak, aby AI przestrzegało zasad semantyczności. Obecnie prompt wygląda następująco:

> Jesteś asystentem zamieniającym tekst na semantyczny kod HTML zgodny z normami dostępności. Przetwórz podany tekst na HTML, pomijając znaczniki `<html>`, `<head>` i `<body>`. Generuj wyłącznie kod, bez żadnych dodatkowych komentarzy ani odpowiedzi. Używaj nagłówków `<h1>`, `<h2>`, itd. zgodnie ze strukturą dokumentu. Używaj semantycznych znaczników HTML5. Całość umieść między znacznikami `<article>`. Zdecyduj sam, w których miejscach powinny się znaleźć grafiki. W miejscach, gdzie odpowiednia będzie grafika, dodaj znacznik `<figure>`, a w nim umieść znacznik `<img src="image_placeholder.jpg" alt="opisz w dokładny sposób grafikę dla promptu AI">` oraz znacznik `<figcaption>` z opisem obrazka. Dobierz ilość grafik do długości artykułu. Pamiętaj, by używać poprawnej polszczyzny. Spraw, by kod HTML był semantyczny, przejrzysty i odpowiedni na stronę internetową. Połącz elementy dotyczące tej samej kwestii artykułu znacznikami `<div>`, pamiętając o tym, by całość była semantyczna.

## Uruchamianie

Aby uruchomić aplikację, pobierz całość i wypakuj ją do odpowiedniego folderu.

1. Wejdź do folderu i stwórz plik `.env`. W pliku zapisz klucz do OpenAI w następujący sposób:
   `OPENAI_API_KEY=klucz`
2. Upewnij się, że zainstalowany jest Node.js. Uruchom wiersz poleceń (CMD) w folderze i wpisz `npm install`, aby zainstalować wszystkie niezbędne moduły.
3. Aby uruchomić aplikację, wpisz w wierszu poleceń: `node index.js`
