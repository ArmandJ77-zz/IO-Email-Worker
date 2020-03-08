import express from "express";

const PORT = 3000;
const app: express.Application = express();

app.get("/", function(req, res) {
    res.send("Greetings Good Sir/Madam");
});

app.listen(PORT, function() {
    console.log(`App is running: http://localhost:${PORT}`);
});
