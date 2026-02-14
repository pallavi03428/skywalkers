const express = require("express");
const path = require("path");
const generateAIRecommendation = require("./aiEngine");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/recommend", (req, res) => {
    const userData = req.body;
    const recommendation = generateAIRecommendation(userData);
    res.json({ recommendation });
});

app.listen(PORT, () => {
    console.log(`StyleSense Server running at http://localhost:${PORT}`);
});
