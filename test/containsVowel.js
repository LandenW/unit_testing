var containsVowel = require('../javascript/containsVowel')
var chai = require('chai');
var expect = chai.expect

describe('Testing containsVowel', function() {
    context('given the word entered - Landen', function(){
        it('returns true if it contains a vowel', function () {
            var answer = containsVowel("Landen")
            expect(answer).to.equal(true)
        })
    })
})