/*jshint esversion: 6, node: true*/
'use strict';

const Index = require('../index');
const assert = require('assert');

function testSolution(input) {

    const result = [];

    Index.init((ans) => result.push(ans), () => input.shift());
    Index.solution();

    return result;
}

describe('Solution', function() {

    describe('program', function() {

        [
            {
                input: ['3',
'Mozart',
'Beethoven',
'Bach',
'5',
'Hilbert',
'Godel',
'Poincare',
'Ramanujan',
'Pochhammmer',
'0'],
                result: ['Bach',
'Beethoven',
'Mozart',
'',
'Godel',
'Hilbert',
'Poincare',
'Pochhammmer',
'Ramanujan']
            }
        ].forEach((testCase) => {

            it('should solve for ' + testCase.input, function() {

                // Arrange
                const input = testCase.input;

                // Act
                const result = testSolution(input);

                // Assert
                assert.deepEqual(result, testCase.result);
            });

        })
    });
});
