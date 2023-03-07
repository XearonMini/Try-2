const  chai  = require('chai');
const Calculator  = require('../calculator');
let calc = new Calculator();
let expect = chai.expect
let assert = chai.assert
describe('Calculator tests', function() {
    it('should return sum of numbers', async () => {
        expect(calc.add(5, 2, 2, 3)).to.be.equal(12)
    })
    it('should return multiply numbers', async () => {
        expect(calc.multiply(5, 2)).to.be.equal(10)
    })
    it('should reduce numbers', async () => {
        expect(calc.subtraction(5, 3)).to.be.equal(2)
    })
    it('should divide numbers', async () => {
        expect(calc.divide(5, 2)).to.be.equal(2.5)
    })
    it('should pow numbers', async () => {
        expect(calc.exponentiation(5)).to.be.equal(25)
    })
    it('should switch minus while pow numbers', async () => {
        expect(calc.exponentiation(-5)).to.be.equal(25)
    })
    it('shouldnt devide on zero', async () => {
        expect(calc.divide(1, 0)).to.be.equal(Infinity)
    })
    it('shouldnt devide zero', async () => {
        expect(calc.divide(0, 1)).to.be.equal(0)
    })
});