var secondLargest = require('../javascript/secondLargest')
var chai = require('chai');
var expect = chai.expect

describe('Testing secondLargest', function() {
    context('given the numbers entered [2, 1, 40, 25]', function(){
        it('returns the second largest num - 25', function () {
            var answer = secondLargest([2, 1, 40, 25])
            expect(answer).to.equal(25)
        })
    })
})