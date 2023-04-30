import * as tf from '@tensorflow/tfjs';
import fs from 'fs';
import csv from 'csv-parser';

const data = [];
fs.createReadStream('csvfile2.csv')
  .pipe(csv())
  .on('data', (row) => {
    data.push([      parseFloat(row['Injured Medical Expenses (pre-settlement)']),
      parseFloat(row['Expected Medical Expenses (post settlement)']),
      parseFloat(row['Injured Received Surgury? (Y-1/N-0)']),
      parseFloat(row['Catastrophic? (Y-1/N-0)']),
      parseFloat(row['Injured Lost Wages']),
      parseFloat(row['Injured Insurance Policy Value']),
      parseFloat(row['Offender(s) Insurance Policy Value']),
      parseFloat(row['Injured Guilt Liability (0 completely innocent - 4 very guilty) [synthesis of police report]']),
      parseFloat(row['Offender Guilt Liability (0 completely innocent - 4 very guilty) [synthesis of police report]']),
      parseFloat(row['Injured FL Local?']),
      parseFloat(row['Offender FL Local?']),
      parseFloat(row['Injured Age']),
      parseFloat(row['(Avg)Offender(s) Age:']),
      parseFloat(row['Injured Phone Number']),
      parseFloat(row['Incident Location Type (Y-Car N-Non Car)']),
      parseFloat(row['Injured Group?']),
      parseFloat(row['Offender Group?'])
    ]);
  })
  .on('end', () => {
    const xs = tf.tensor2d(data.map(row => [      row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12], row[13], row[14], row[15], row[16]
    ]));
    const ys = tf.tensor2d(data.map(row => [      row[17]
    ]));

    const model = tf.sequential();
    model.add(tf.layers.dense({
      inputShape: [17],
      activation: 'sigmoid',
      units: 8
    }));
    model.add(tf.layers.dense({
      activation: 'softmax',
      units: 1
    }));
    model.compile({
      optimizer: tf.train.adam(),
      loss: 'meanSquaredError',
      metrics: ['accuracy']
    });
    
    

    model.fit(xs, ys, {
      epochs: 100
    }).then(() => {

      console.log('Training complete!');
    });
  });

