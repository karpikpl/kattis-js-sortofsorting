const solver = require('../index');
const assert = require('assert');

function testSolution(input) {

    const result = [];

    solver((ans) => result.push(ans), () => input.shift());

    return result.length == 1 && result[0] || result;
}

describe('Solution', function() {

  describe('program', function() {
    it('should print hello world', function() {

      // Arrange
      const input = [];

      // Act
      const result = testSolution(input);

      // Assert
      assert.equal(result, 'hello world!');
    });
  });
});
