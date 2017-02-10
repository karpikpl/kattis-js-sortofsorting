/*jshint esversion: 6, node: true*/
'use strict';

// put your solution in this method
function solution(toPrint, toRead) {

    const input = readline().split(' ');
    const dice1 = parseInt(input[0]);
    const dice2 = parseInt(input[1]);

    log(`Parsed input dice 1: ${dice1} dice 2: ${dice2}`);

    const results = {};
    let maxProb = 0;

    for (let i = 1; i <= dice1; i++)
        for (let j = 1; j <= dice2; j++) {
            const prob = (1 / dice1) + (1 / dice2);
            const sum = i + j;

            results[sum] = (results[sum] || 0) + prob;
        }

    let sums = [];

    Object.keys(results).forEach((o) => sums.push({
        prob: results[o],
        sum: o
    }));

    sums = sums.sort((a, b) => b.prob - a.prob);
    const max = sums[0].prob;

    //log(sums);

    sums
        .filter(s => s.prob == max)
        .sort((a, b) => a.sum - b.sum)
        .forEach(s => print(s.sum));
}

// run solution without any params for kattis
if (typeof process === 'undefined' || process.release.name !== 'node') {

    solution();
}

// node js internals below -----------------------------------------------------

function init(toPrint, toRead) {

    // replace global functions with ones for node or tests
    // kattis is using 'print' and 'readline' for standard I/O
    if (typeof global !== 'undefined') {
        global.print = toPrint;
        global.readline = toRead;
    }
}

// interactive mode - input from command line
if (typeof process !== 'undefined' && process.argv[2] === 'i') {

    const Readline = require('readline');
    const input = [];

    const inputProcessor = Readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    inputProcessor.on('line', (line) => {

        input.push(line);

        if (!line) {
            inputProcessor.close();
        }
    });

    inputProcessor.on('close', () => {

        init(console.log, () => input.shift());

        solution();
    });
}

// input from process params
if (typeof process !== 'undefined' && process.argv[2] && process.argv[2] !== 'i') {

    const input = process.argv[2].split('\n');
    init(console.log, () => input.shift());

    solution();
}

function log(){

    if(typeof process !== 'undefined' && process.release.name === 'node') {
        console.log.call(this, ...arguments);
    }
}

if (typeof module !== 'undefined') {
    module.exports.solution = solution;
    module.exports.init = init;
}
