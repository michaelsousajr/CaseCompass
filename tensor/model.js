// Importing necessary libraries
import * as tf from '@tensorflow/tfjs-node';
import fs from 'fs';
import neatCsv from 'neat-csv';

async function trainModel() {
  // Reading CSV file and preparing data
  const data = await fs.promises.readFile('modelcsv.csv');
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

  // Splitting data into training and testing sets
  const splitIndex = Math.floor(X.length * 0.8);
  const X_train = X.slice(0, splitIndex);
  const Y_train = Y.slice(0, splitIndex);
  const X_test = X.slice(splitIndex);
  const Y_test = Y.slice(splitIndex);

  let model = null;
  // Training loop
  while (true) {
    model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [4], units: 1 }));
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });
    const X_train_tensor = tf.tensor2d(X_train);
    const Y_train_tensor = tf.tensor2d(Y_train, [Y_train.length, 1]);
    await model.fit(X_train_tensor, Y_train_tensor, { epochs: 100 });

    // Evaluating model accuracy on testing set
    const Y_test_pred_tensor = model.predict(tf.tensor2d(X_test));
    const Y_test_pred = Array.from(Y_test_pred_tensor.dataSync());
    const sumSquaredErrors = Y_test.reduce((acc, curr, idx) => {
      const error = curr - Y_test_pred[idx];
      if (Number.isNaN(error)) {
        return acc;
      }
      return acc + error * error;
    }, 0);
    const meanSquaredError = sumSquaredErrors / Y_test.length;

    //print MSE
    console.log(`Mean Squared Error: ${meanSquaredError}`);

    // Calculating R-squared score
    const yMean = Y_test.reduce((acc, curr) => acc + curr, 0) / Y_test.length;
    const SST = Y_test.reduce((acc, curr) => acc + Math.pow(curr - yMean, 2), 0);
    const SSR = Y_test.reduce((acc, curr, idx) => {
    const error = curr - Y_test_pred[idx];
    if (Number.isNaN(error)) {
      return acc;
    }
    return acc + Math.pow(error, 2);
    }, 0);
    const rSquared = 1 - SSR / SST;

    // Print R-squared score
    console.log(`R-squared score: ${rSquared}`);

    //print accuracy
    const accuracy = 100 - (meanSquaredError / Y_test.reduce((acc, curr) => acc + curr, 0)) * 100;
    console.log(`Accuracy: ${accuracy.toFixed(2)}%`);
    if(accuracy == 100){
      break
    }
  }

  //save 1
  const modeljson = model.toJSON();
  fs.writeFileSync('model.json', JSON.stringify(modeljson));

  //save 2
  //await model.save('model.json');


}


trainModel();
