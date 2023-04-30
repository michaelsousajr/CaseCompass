import * as tf from '@tensorflow/tfjs-node';
import fs from 'fs';

async function loadModel() {
  const modelJson = fs.readFileSync('./model.json', 'utf8');
  const model = await tf.models.modelFromJSON(modelJson);
  return model;
}

async function run() {
  const model = await loadModel();
  // Use the model for prediction or other tasks here
}

run();

loadModel();

