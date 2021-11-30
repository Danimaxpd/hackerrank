'use strict';

function plusMinus(arr) {
    if (Array.isArray(arr) && arr) {
        let base = arr.length;
        let zeroCount = 0;
        let positiveCount = 0;
        let negativeCount = 0;

        for (let i = 0; i < base; i++) {
            const element = arr[i];
            if (element > 0) {
                positiveCount++;
            } else if (element < 0) {
                negativeCount++;
            } else {
                zeroCount++;
            }
        }
        const aZero = parseFloat(zeroCount) / base;
        const bPositive = parseFloat(positiveCount) / base;
        const cNegative = parseFloat(negativeCount) / base;
        const result = `${bPositive.toFixed(6)}
        ${cNegative.toFixed(6)}
        ${aZero.toFixed(6)}`;
        console.log(result);
        return result;
    }

    return [0, 0, 0]
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
