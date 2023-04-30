import * as tf from '@tensorflow/tfjs';

async function predictSettlementAmount(inputData) {
  // Load the model
  const model = tf.loadLayersModel('model.json');

  // Preprocess the input data
  const preprocessedData = [
    parseFloat(inputData.totalMedicalExpenses),
    parseFloat(inputData.medicalMultiplier),
    parseFloat(inputData.incomeLost),
    parseFloat(inputData.incomeMultiplier),
  ];
  const x = tf.tensor2d(preprocessedData, [1, 4]);

  // Make a prediction
  const prediction = model.predict(x).dataSync()[0];

  // Return the prediction
  return prediction;
}

// Example usage
const inputData = {
  totalMedicalExpenses: '5000',
  medicalMultiplier: '1.5',
  incomeLost: '2000',
  incomeMultiplier: '2.0',
};
const settlementAmount = await predictSettlementAmount(inputData);
console.log('Settlement amount:', settlementAmount);

