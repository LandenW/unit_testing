var greater = require('../javascript/greaterthan')
var chai = require('chai');
var expect = chai.expect

describe('Testing greaterthan', function() {
    context('given two numbers - 5 and 6', function(){
        it('returns true because 6 is greater than 5', function () {
            var answer = greater(5, 6)
            expect(answer).to.equal(true)
        })
    })
})