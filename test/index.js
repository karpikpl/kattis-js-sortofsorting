const solver = require('../index');
const assert = require('assert');

const solution = new solver((res) => res);

describe('Solution', function() {

  describe('program', function() {
    it('should print hello world', function() {

      // Act
      const result = solution.solve();

      // Assert
      assert.equal(result, 'hello world!');
    });
  });
});
