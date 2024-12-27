import { pipeline } from '@huggingface/transformers';

async function classifyImage() {
    // Create image classification pipeline
    const classifier = await pipeline('image-classification', 'onnx-community/dinov2-with-registers-small-imagenet1k-1-layer');

    // Classify an image
    const url = 'https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/cats.jpg';
    const output = await classifier(url);
    console.log(output);
    // [
    //   { label: 'tabby, tabby cat', score: 0.8135351538658142 },
    //   { label: 'tiger cat', score: 0.08967583626508713 },
    //   { label: 'Egyptian cat', score: 0.06800546497106552 },
    //   { label: 'radiator', score: 0.003501888597384095 },
    //   { label: 'quilt, comforter, comfort, puff', score: 0.003408448537811637 },
    // ]
}

classifyImage();