import { HfInference } from '@huggingface/inference';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create your Hugging Face Token: https://huggingface.co/settings/tokens
// Set your Hugging Face Token: https://scrimba.com/dashboard#env
// Learn more: https://scrimba.com/links/env-variables
const hf = new HfInference(process.env.HF_TOKEN);

// Hugging Face Inference API docs: https://huggingface.co/docs/huggingface.js/inference/README

const textToClassify = "I just bought a new camera. It's been a real disappointment.";

async function runInference() {
  const response = await hf.textClassification({
    model: "distilbert-base-uncased-finetuned-sst-2-english",
    inputs: textToClassify
  });

  console.log(response[0].label);
  console.log(response);
}

runInference();

