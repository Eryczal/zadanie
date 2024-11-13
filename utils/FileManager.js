import fs from "node:fs";

class FileManager {
    constructor() {}

    async loadText() {
        console.log("Wczytywanie tekstu...");

        return new Promise((resolve, reject) => {
            fs.readFile("./tekst.txt", "utf8", (err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    generateFile(content) {
        console.log("Zapisywanie pliku HTML...");

        fs.writeFile("./artykul.html", content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    }
}

export { FileManager };
