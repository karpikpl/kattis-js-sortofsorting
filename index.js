let inputProcessor;

function init(toPrint, toRead) {

    if (typeof global !== 'undefined' && (!global.print || toPrint)) {
        global.print = toPrint || console.log;
    }

    if (typeof global !== 'undefined' && (!global.readline || toRead)) {

        const Readline = require('readline');
        const messages = [];

        inputProcessor = Readline.createInterface({input: process.stdin, output: process.stdout});

        inputProcessor.on('line', (input) => {
            messages.push(input);
        });

        global.readline = toRead || (() => messages.shift());
    }
}

function solution(toPrint, toRead) {

  init(toPrint, toRead);

  print('hello world!');
}


if ((typeof process == 'undefined') || (process.release.name !== 'node') || process.argv[2] === 'n') {
    solution();

    if(inputProcessor) {
      inputProcessor.close();
    }
}

if (typeof module !== 'undefined') {
    module.exports = solution;
}
