'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let sumDiagonals = { main: 0, second: 0 },
        matrixLength = arr.length;

    for (let i = 0; i < matrixLength; i++) {
        sumDiagonals.main += arr[i][i];
        sumDiagonals.second += arr[i][matrixLength - i - 1];
    }
    let resultNumbers = [sumDiagonals.main, sumDiagonals.second];
    resultNumbers.sort((a, b) => parseInt(b) - parseInt(a));
    let result = resultNumbers.reduce((acc, val) => parseInt(acc) - parseInt(val));
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
