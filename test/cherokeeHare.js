var cherokeeHare = require('../javascript/cherokeeHare')
var chai = require('chai');
var expect = chai.expect

describe('Testing cherokeeHare', function() {
    context('given the starting population of 100, birth rate of .1, and 5 weeks', function(){
        it('returns the end population of 160', function () {
            var population = cherokeeHare(100, .1, 5)
            expect(population).to.equal(160)
        })
    })
})