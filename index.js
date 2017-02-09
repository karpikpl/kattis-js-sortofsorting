function init(toPrint, toRead) {

    if (typeof global !== 'undefined' && (!global.print || toPrint)) {
        global.print = toPrint || console.log;
    }

    if (typeof global !== 'undefined' && (!global.readline || toRead)) {
        global.readline = toRead;
    }
}

function solution(toPrint, toRead) {

    init(toPrint, toRead);

    // solution below this line

    const input = readline().split(' ');
    const dice1 = parseInt(input[0]);
    const dice2 = parseInt(input[1]);

    //console.log(`dice1: ${dice1} dice2: ${dice2}`);

    const results = {};
    let maxProb = 0;

    for (let i = 1; i <= dice1; i++)
        for (let j = 1; j <= dice2; j++) {
            const prob = (1 / dice1) + (1 / dice2);
            const sum = i + j;

            results[sum] = (results[sum] || 0) + prob;
        }

    let sums = [];

    Object.keys(results).forEach((o) => sums.push({prob: results[o], sum: o}));

    sums = sums.sort((a,b) => b.prob - a.prob);
    const max = sums[0].prob;

    //console.log(sums);

    sums
      .filter(s => s.prob == max)
      .sort((a,b) => a.sum - b.sum)
      .forEach(s => print(s.sum));
}

if (typeof process === 'undefined' || process.release.name !== 'node') {

    solution();
}

if (typeof process !== 'undefined' && process.argv[2] === 'i') {

    const Readline = require('readline');
    const messages = [];

    const inputProcessor = Readline.createInterface({input: process.stdin, output: process.stdout});

    inputProcessor.on('line', (input) => {
        messages.push(input);

        if (!input) {
            inputProcessor.close();
        }
    });

    inputProcessor.on('close', () => {
        console.log('closed: ' + messages);

        solution(null, () => messages.shift());
    });
}

if (typeof process !== 'undefined' && process.argv[2] && process.argv[2] !== 'i') {

    const messages = process.argv[2].split('\n');
    solution(null, () => messages.shift());
}

if (typeof module !== 'undefined') {
    module.exports = solution;
}
