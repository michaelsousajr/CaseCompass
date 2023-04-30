import fs from 'fs';
//const model = await tf.loadLayersModel('file://model.json');

const outputjson = fs.readFileSync('model.json');
const outputdata = JSON.parse(outputjson);

console.log(outputdata);
