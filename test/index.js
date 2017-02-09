const solver = require('../index');
const assert = require('assert');


describe('Solution', function() {

  describe('program', function() {
    it('should print hello world', function() {

      // Arrange
      const result = [];

      // Act
      solver((ans) => result.push(ans));

      // Assert
      assert.equal(result[0], 'hello world!');
    });
  });
});
