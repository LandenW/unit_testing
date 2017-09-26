var changeMachine = require('../javascript/changeMachine')
var chai = require('chai');
var expect = chai.expect

describe('Testing changeMachine', function() {
    context('given the amount', function(){
        it('returns the change in an array', function () {
            var amount = changeMachine(3)
            expect(amount).to.eql([0,0,0,3])
        })
    })
})