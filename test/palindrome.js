var palindrome = require('../javascript/palindrome')
var chai = require('chai');
var expect = chai.expect

describe('Testing palindrome', function() {
    context('given the word', function(){
        it('returns true if its a palindrome', function () {
            var word = palindrome("tacocat")
            expect(word).to.equal(true)
        })
    })
})