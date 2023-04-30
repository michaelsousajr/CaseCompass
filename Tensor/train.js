import * as tf from '@tensorflow/tfjs';
import fs from 'fs';
import csv from 'csv-parser';

const data = [];
fs.createReadStream('csvfile2.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push([
      parseFloat(row.sepal_length),
      parseFloat(row.sepal_width),
      parseFloat(row.petal_length),
      parseFloat(row.petal_width),
      row.species
    ]);
  })
  .on('end', () => {
    const xs = tf.tensor2d(data.map(row => [
      row[0], row[1], row[2], row[3]
    ]));
    const ys = tf.oneHot(
      data.map(row => row[4]), 3
    );

    const model = tf.sequential();
    model.add(tf.layers.dense({
      inputShape: [4],
      activation: 'sigmoid',
      units: 8
    }));
    model.add(tf.layers.dense({
      activation: 'softmax',
      units: 3
    }));
    model.compile({
      optimizer: tf.train.adam(),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });

    model.fit(xs, ys, {
      epochs: 100
    }).then(() => {
      console.log('Training complete!');
    });
  });

