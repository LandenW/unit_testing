var avg = require('../javascript/avg')
var chai = require('chai');
var expect = chai.expect

describe('Testing avg', function() {
    context('given the three numbers 2 + 1 + 3', function(){
        it('returns the average of the three numbers - 2', function () {
            var answer = avg(1, 2, 3)
            expect(answer).to.equal(2)
        })
    })
})