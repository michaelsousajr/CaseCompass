
// Requiring module
//const tf = require("@tensorflow/tfjs")
import * as tf from '@tensorflow/tfjs'; 
// Sample CSV data link
const csvUrl = `file://mycsv.csv`;

async function predicateMultipleColoumns(){
    const list = ['Total Medical Expenses','Medical Multiplier','Income Lost','Income Multiplier','Value of Injury Claim'];
    
    const csvDataset = tf.data.csv(
        csvUrl, {
        hasHeader: true,
        columnNames: list,
        columnConfigss: {
            indus: {
                isLabel: true
            },
            rad: {
                isLabel: true
            },
            ram: {
                isLabel: true
            }
        },
        configuredColumnsOnly: true,
        delimWhitespace: true    
    });
    console.log(csvDataset)
}

async function predicateSingleColumn() {
    // We want to predict single column "indus".
    const list = ['Total Medical Expenses','Medical Multiplier','Income Lost','Income Multiplier','Value of Injury Claim'];
    const csvDataset = tf.data.csv(
        csvUrl, {
        hasHeader: true,
        columnNames: list,
        columnConfigs: {
            indus: {
                isLabel: true
            }
        },
        configuredColumnsOnly: true,
        delimWhitespace: true
    });
    console.log(csvDataset)
}
 
// Function call
//predicateSingleColumn();
predicateMultipleColoumns();
