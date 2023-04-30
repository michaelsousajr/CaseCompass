import fs from 'fs';

// Read in the generated JSON file
const outputJson = fs.readFileSync('model.json');

// Parse the JSON data
const outputData = JSON.parse(outputJson);

// Perform some analysis on the output data to verify its correctness
// For example, you could check that the output contains certain expected keys and values

if (outputData.hasOwnProperty('prediction')) {
  console.log(`Prediction: ${outputData.prediction}`);
} else {
  console.log('Output does not contain a prediction.');
}

