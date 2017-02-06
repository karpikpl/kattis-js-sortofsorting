
class solver {

  constructor(printSol) {

    if(!global.print || printSol) {
      global.print = printSol || console.log;
    }
  }

  solve() {
    return print('hello world!');
  }
}



const solution = new solver();

if((typeof process == 'undefined') || (process.release.name !== 'node')) {
  solution.solve();
}

module.exports = solver;
