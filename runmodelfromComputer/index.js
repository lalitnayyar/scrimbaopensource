import ollama from "ollama";
import express from "express";

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const question = req.query.question;
    if (!question) {
        res.status(200).send("Ask something via the `?question=` parameter");  
    } else {
        try {
            const response = await ollama.chat({
                model: 'mistral',
                messages: [{ role: 'user', content: question }],
            });
            res.status(200).send(response.message.content);
        } catch (error) {
            console.error("Error connecting to ollama:", error);
            res.status(500).send("Error connecting to ollama");
        }
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

