//Import TensorFlow.js
const tf = require('@tensorflow/tfjs');

// Define the data for training
const x = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
const y = tf.tensor2d([[2], [4], [6], [8]], [4, 1]);

// Define the Linear Regression model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Compile the model with a loss function and optimizer
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// Train the model
async function train() {
  await model.fit(x, y, { epochs: 100 });
}

train().then(() => {
  // Define new data to predict on
  const new_data = tf.tensor2d([[5], [6], [7], [8]], [4, 1]);

  // Predict values for new data
  const predictions = model.predict(new_data);

  // Print the predictions
  predictions.print();
});