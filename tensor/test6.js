//import * as tf from '@tensorflow/tfjs-node';
//import fs from 'fs';
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

// Load the model from model.json file
const modelJson = fs.readFileSync('model.json', 'utf8');
const model = tf.loadLayersModel(tf.io.fromJSON(modelJson));

// Define input fields
const inputFields = {
  TotalMedicalExpenses: 5000,
  MedicalMultiplier: 1.5,
  IncomeLost: 1000,
  IncomeMultiplier: 2.5,
};

// Preprocess input data
const inputData = [
  inputFields.TotalMedicalExpenses,
  inputFields.MedicalMultiplier,
  inputFields.IncomeLost,
  inputFields.IncomeMultiplier,
];
const inputTensor = tf.tensor2d([inputData]);

// Predict settlementAmount
const prediction = model.predict(inputTensor);
const settlementAmount = prediction.dataSync()[0];

console.log(`Settlement Amount: $${settlementAmount.toFixed(2)}`);

