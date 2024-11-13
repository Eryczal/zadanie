import "dotenv/config.js";
import { AiManager } from "./utils/AiManager.js";
import { FileManager } from "./utils/FileManager.js";

const aiManager = new AiManager();
const fileManager = new FileManager();

const data = await fileManager.loadText();
const response = await aiManager.sendMessage(data);
fileManager.generateFile(response);
console.log("Gotowe");
