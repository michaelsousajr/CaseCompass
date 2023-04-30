import * as tf from '@tensorflow/tfjs';
import fs from 'fs';
import csv from 'csv-parser';


// Load the CSV data
const results = [];
fs.createReadStream('mycsv.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const data = results.map((row) => Object.values(row));
    const headers = Object.keys(results[0]);

    // Split the data into input (X) and output (y) variables
    const X = data.map((row) => row.slice(0, -1));
    const y = data.map((row) => row[row.length - 1]);

    // Convert the data to TensorFlow tensors
    const X_tensor = tf.tensor2d(X);
    const y_tensor = tf.tensor1d(y);

    // Split the data into training and testing sets
    // Split the data into training and testing sets
    const [X_train, X_test, y_train, y_test] = tf.data
      .zip({ xs: X_tensor, ys: y_tensor })
      .shuffle(data.length)
      .batch(Math.floor(data.length * 0.7))
      //.interleave((batch) => tf.data.zip({ xs: batch.xs, ys: batch.ys }).batch(Math.floor(data.length * 0.2)), 2)
      .toArray(2);

    // // Define the model architecture
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [X[0].length] }));

    // Compile the model
    model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

    // Train the model
    model.fit(X_train, y_train, {
      epochs: 100,
      validationData: [X_test, y_test],
      callbacks: tf.node.tensorBoard('./logs'),
    });

    // Evaluate the model on the test data
    const evalOutput = model.evaluate(X_test, y_test);
    console.log('Test Loss:', evalOutput.dataSync()[0]);
  });
