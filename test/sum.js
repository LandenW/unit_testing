var sum = require('../javascript/sum')
var chai = require('chai');
var expect = chai.expect

describe('Testing sum', function() {
    context('given the two numbers 2 + 1', function(){
        it('returns the sum of the two numbers - 3', function () {
            var total = sum(1, 2)
            expect(total).to.equal(3)
        })
    })
})