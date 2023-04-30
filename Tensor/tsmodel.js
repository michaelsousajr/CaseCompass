import * as tf from '@tensorflow/tfjs';

// Define the shape of the input data
const inputShape = [null, 4];

// Load CSV data
const csvUrl = 'file://csvfile2.csv';
const csvDataset = tf.data.csv(csvUrl, {
  columnConfigs: {
    Injured_Group: {
      isLabel: true
    }
  }
});

// Convert CSV dataset to arrays
const dataset = await csvDataset.toArray();
const datasetSize = dataset.length;
//const shuffledDataset = tf.util.shuffle(dataset);


//const shuffledDataset = dataset.shuffle(datasetSize);

// Split the dataset into training and testing sets
const trainDatasetSize = Math.floor(datasetSize * 0.8);
const trainDataset = dataset.slice(0, trainDatasetSize);
const testDataset = dataset.slice(trainDatasetSize);

// Convert arrays back to tensors
const trainData = tf.data.array(trainDataset).map((d) => {
  return {
    xs: Object.values(d).slice(0, 4),
    ys: [d.Injured_Group]
  }
}).batch(10);

const testData = tf.data.array(testDataset).map((d) => {
  return {
    xs: Object.values(d).slice(0, 4),
    ys: [d.Injured_Group]
  }
}).batch(10);


// Define the model architecture
const model = tf.sequential();
model.add(tf.layers.dense({
  inputShape,
  units: 10,
  activation: 'relu'
}));
model.add(tf.layers.dense({
  units: 3,
  activation: 'softmax'
}));
model.add(tf.layers.dense({
  units: 2,
  activation: 'softmax'
}));

// Compile the model
model.compile({
  optimizer: tf.train.adam(),
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy']
});

// Train the model
const epochs = 50;
const history = await model.fitDataset(trainData, {
  epochs,
  validationData: testData,
  callbacks: tf.callbacks.earlyStopping({
    monitor: 'val_loss',
    patience: 3
  })
});

console.log(history);

