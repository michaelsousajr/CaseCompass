// Importing necessary libraries
import * as tf from '@tensorflow/tfjs';
import fs from 'fs';
import neatCsv from 'neat-csv';

// Reading CSV file and preparing data
fs.readFile('mycsv.csv', async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const dataset = await neatCsv(data);
  
  // Preprocessing data
  const preprocessedData = dataset.map((row) => {
    return {
      TotalMedicalExpenses: parseInt(row['Total Medical Expenses']),
      MedicalMultiplier: parseFloat(row['Medical Multiplier']),
      IncomeLost: parseFloat(row['Income Lost']),
      IncomeMultiplier: parseFloat(row['Income Multiplier']),
      ValueOfInjuryClaim: parseFloat(row['Value of Injury Claim']),
    };
  });
  
  // Splitting data into features (X) and target (Y)
  const X = preprocessedData.map((row) => {
    return [
      row.TotalMedicalExpenses,
      row.MedicalMultiplier,
      row.IncomeLost,
      row.IncomeMultiplier
    ];
  });
  const Y = preprocessedData.map((row) => {
    return row.ValueOfInjuryClaim;
  });
  
  // Creating and training linear regression model
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [4], units: 1 }));
  model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
  const X_tensor = tf.tensor2d(X);
  const Y_tensor = tf.tensor2d(Y, [Y.length, 1]);
  await model.fit(X_tensor, Y_tensor, { epochs: 1000 });
  
  // Predicting target values
  const Y_pred_tensor = model.predict(X_tensor);
  const Y_pred = Array.from(Y_pred_tensor.dataSync());
  
  // Evaluating model accuracy 
  const sumSquaredErrors = Y.reduce((acc, curr, idx) => {
    const error = curr - Y_pred[idx];
    if(Number.isNaN(error)){
      return acc;
    }
    return acc + error * error;
  }, 0);

  const meanSquaredError = sumSquaredErrors / Y.length;
  
  //print accuracy
  console.log(`Mean Squared Error: ${meanSquaredError}`);
  //console.log(dataset);
});

