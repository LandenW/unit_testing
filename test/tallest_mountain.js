var tallestMountain = require('../javascript/tallest_mountain')
var chai = require('chai');
var expect = chai.expect

describe('Testing tallestMountain', function() {
    context('given mountain heights of [1, 2, 3, 100]', function(){
        it('returns 100 as the tallest mountain', function () {
            var tallest = tallestMountain([1,2,3,100])
            expect(tallest).to.equal(100)
        })
    })
})