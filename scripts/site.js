//import easternArmenian from "../alphabets/eastern-armenian.json" assert { type: "json" };

// define(['easternArmenian'], function (require) {
//    const easternArmenian = require('../alphabets/eastern-armenian.json');
// });

import * as alphabets from '../alphabets/index.js';

const romanizeText = function() {
    let textToRomanize = document.getElementById('source-text').getAttribute('value');
    let result = textToRomanize; // Default the result to the InputText

    let resultElement = document.getElementById('result-text');
    resultElement.setAttribute('value', result);

    console.log('result: ', result);
}

export default romanizeText;