import { HfInference } from '@huggingface/inference'

// Load the Hugging Face token from environment variables
const hf = new HfInference(import.meta.env.VITE_HF_TOKEN)

// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

console.log("index.js is loaded");

const text = "It's an exciting time to be an A.I. engineer."

async function getTextToSpeech() {
    try {
        const response = await hf.textToSpeech({
            inputs: text,
            model: "facebook/fastspeech2-en-ljspeech"
        })

        const audioBlob = await response.blob()
        const audioElement = document.getElementById('speech')
        const speechUrl = URL.createObjectURL(audioBlob)
        audioElement.src = speechUrl
    } catch (error) {
        console.error("Error in textToSpeech:", error)
    }
}

getTextToSpeech()
