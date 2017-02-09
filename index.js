
class solver {

  constructor(printSol) {

    if(typeof global !== 'undefined' && (!global.print || printSol)) {
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

if(typeof module !== 'undefined') {
  module.exports = solver;
}
