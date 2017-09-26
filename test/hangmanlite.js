var hangmanLite = require('../javascript/hangmanlite')
var chai = require('chai');
var expect = chai.expect

describe('Testing hangmanLite', function() {
    context('given the word Test and letter guessed is e', function(){
        it('returns the count of 1 in the word Test', function () {
            var count = hangmanLite("Test", "e")
            expect(count).to.equal(1)
        })
    })
})