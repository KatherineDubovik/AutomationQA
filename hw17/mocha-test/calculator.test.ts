import assert from "assert";
import { expect } from "chai";
import { Calculator } from "../src/calculator";

const CALCULATOR_ERROR_MESSAGE = "Result of calculation is not as expected";
const calculator = new Calculator;

describe("Tests for add function", () => {
    it("Should add two positive numbers", () => {
        assert.deepStrictEqual(calculator.add(3, 9), 12, CALCULATOR_ERROR_MESSAGE);
    });

    it("Should add two negative numbers", () => {
        assert.deepStrictEqual(calculator.add(-90, -15), -105, CALCULATOR_ERROR_MESSAGE);
    });

    it("Should add positive and negative numbers", () => {
        assert.deepStrictEqual(calculator.add(136, -24), 112, CALCULATOR_ERROR_MESSAGE);
    });

    it("Should add two float numbers", () => {
        assert.deepStrictEqual(calculator.add(16.8, 29.3), 46.1, CALCULATOR_ERROR_MESSAGE);
    });
})

describe("Tests for substract function", () => {
    it("Should substract two positive numbers", () => {
        assert.deepStrictEqual(calculator.substract(26, 18), 8, CALCULATOR_ERROR_MESSAGE);
    });

    it("Should substract two negative numbers", () => {
        assert.deepStrictEqual(calculator.substract(-30, -150), 120, CALCULATOR_ERROR_MESSAGE);
    });

    it("Should substract positive and negative numbers", () => {
        assert.deepStrictEqual(calculator.substract(64, -9), 73, CALCULATOR_ERROR_MESSAGE);
    });

    it("Should substract two float numbers", () => {
        assert.deepStrictEqual(calculator.substract(18.3, 9.4), 8.9, CALCULATOR_ERROR_MESSAGE);
    });
})

describe("Tests for multiply function", () => {
    it("Should multiply two positive numbers", () => {
        expect(calculator.multiply(15, 6)).to.be.deep.equal((90), CALCULATOR_ERROR_MESSAGE);
    });

    it("Should multiply two negative numbers", () => {
        expect(calculator.multiply(-12, -11)).to.be.deep.equal((132), CALCULATOR_ERROR_MESSAGE);
    });

    it("Should multiply positive and negative numbers", () => {
        expect(calculator.multiply(24, -3)).to.be.deep.equal((-72), CALCULATOR_ERROR_MESSAGE);
    });

    it("Should multiply two float numbers", () => {
        expect(calculator.multiply(19.5, 1.5)).to.be.deep.equal((29.25), CALCULATOR_ERROR_MESSAGE);
    });
})

describe("Tests for divide function", () => {
    it("Should divide two positive numbers", () => {
        expect(calculator.divide(1604, 4)).to.be.deep.equal((401), CALCULATOR_ERROR_MESSAGE);
    });

    it("Should divide two negative numbers", () => {
        expect(calculator.divide(-144, -12)).to.be.deep.equal((12), CALCULATOR_ERROR_MESSAGE);
    });

    it("Should divide positive and negative numbers", () => {
        expect(calculator.divide(175, -25)).to.be.deep.equal((-7), CALCULATOR_ERROR_MESSAGE);
    });

    it("Should divide two float numbers", () => {
        expect(calculator.divide(16.4, 4.1)).to.be.deep.equal((4), CALCULATOR_ERROR_MESSAGE);
    });
})
