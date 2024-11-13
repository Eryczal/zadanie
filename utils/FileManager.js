import fs from "node:fs";

class FileManager {
    constructor() {}

    async loadText() {
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
        fs.writeFile("./artykul.html", content, (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    }
}

export { FileManager };
