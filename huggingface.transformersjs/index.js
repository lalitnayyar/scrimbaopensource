// import { pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.8.0';


import { pipeline } from '@huggingface/transformers';

// Reference the elements that we will need
const status = document.getElementById('status');
const image = document.getElementById('image');
const outputList = document.createElement('ul');
document.body.appendChild(outputList);

async function classifyImage() {
    try {
        status.textContent = 'Loading model...';
        const classifier = await pipeline('image-classification', 'onnx-community/dinov2-with-registers-small-imagenet1k-1-layer');
        status.textContent = 'Detecting Objects...';

        const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfO-M4Mgy5-n98qk9Xq0kJoBcRnXUhIAIcLQ&s';
        const output = await classifier(url);
        console.log(output);

        // Clear previous results
        outputList.innerHTML = '';

        // Display output in list form
        output.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `Label: ${item.label}, Score: ${item.score}`;
            outputList.appendChild(listItem);
        });

        status.textContent = 'Done!';
    } catch (error) {
        console.error('Error during object detection:', error);
        status.textContent = 'Error during object detection. Check console for details.';
    }
}

classifyImage();
