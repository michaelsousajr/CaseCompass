import * as tf from '@tensorflow/tfjs-node';
import fs from 'fs';

// Load the model
const modelPath = 'file://model.json';
const modelData = fs.readFileSync(modelPath, 'utf8');
//const model = await tf.loadLayersModel(tf.io.fromJSON(modelData));
const model = await tf.loadLayersModel(JSON.parse(modelData));

// Define a function to predict the settlement amount
function predictSettlementAmount(totalMedicalExpenses, medicalMultiplier, incomeLost, incomeMultiplier) {
  // Construct an input tensor
  const inputTensor = tf.tensor2d([[totalMedicalExpenses, medicalMultiplier, incomeLost, incomeMultiplier]]);

  // Make the prediction
  const outputTensor = model.predict(inputTensor);

  // Extract the settlement amount from the output tensor
  const settlementAmount = outputTensor.dataSync()[0];

  // Clean up
  inputTensor.dispose();
  outputTensor.dispose();

  // Return the settlement amount
  return settlementAmount;
}

// Example usage
const totalMedicalExpenses = 5000;
const medicalMultiplier = 1.5;
const incomeLost = 2000;
const incomeMultiplier = 2.0;
const settlementAmount = predictSettlementAmount(totalMedicalExpenses, medicalMultiplier, incomeLost, incomeMultiplier);
console.log(`Settlement amount: ${settlementAmount}`);

