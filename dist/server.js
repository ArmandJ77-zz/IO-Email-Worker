"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = express_1.default();
app.get("/", function (req, res) {
    res.send("Greetings Good Sir/Madam");
});
app.listen(PORT, function () {
    console.log(`App is running: http://localhost:${PORT}`);
});
