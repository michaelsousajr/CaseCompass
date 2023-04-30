import * as tf from '@tensorflow/tfjs';
import { loadCsv } = pkg;

// Define the shape of the input data
const inputShape = [null, 4];

// Load CSV data
const csvUrl = 'file://csvfile2.csv';
const csvDataset = loadCsv(csvUrl, {
  columnConfigs: {
    label: {
      isLabel: true
    }
  }
});

// Convert CSV dataset to arrays
const dataset = await csvDataset.toArray();
const datasetSize = dataset.length;

// Shuffle the dataset
const shuffledDataset = tf.data.array(dataset).shuffle(datasetSize);

// Split the dataset into training and testing sets
const trainDatasetSize = Math.floor(datasetSize * 0.8);
const trainDataset = shuffledDataset.take(trainDatasetSize).batch(10);
const testDataset = shuffledDataset.skip(trainDatasetSize).batch(10);

// Define the model architecture
const model = tf.sequential();

