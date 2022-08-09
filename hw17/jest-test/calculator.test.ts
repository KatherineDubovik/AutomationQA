import { Calculator } from "../src/calculator"

const calculator = new Calculator;

describe("Tests for add function", () => {
    test("Should add two positive numbers", () => {
        expect(calculator.add(3, 65)).toStrictEqual(68);
    });

    test("Should add two negative numbers", () => {
        expect(calculator.add(-90, -15)).toStrictEqual(-105);
    });

    test("Should add positive and negative numbers", () => {
        expect(calculator.add(136, -24)).toStrictEqual(112);
    });

    test("Should add two float numbers", () => {
        expect(calculator.add(16.8, 29.3)).toStrictEqual(46.1);
    });
});

describe("Tests for substract function", () => {
    test("Should substract two positive numbers", () => {
        expect(calculator.substract(26, 18)).toStrictEqual(8);
    });

    test("Should substract two negative numbers", () => {
        expect(calculator.substract(-30, -150)).toStrictEqual(120);
    });

    test("Should substract positive and negative numbers", () => {
        expect(calculator.substract(64, -9)).toStrictEqual(73);
    });

    test("Should substract two float numbers", () => {
        expect(calculator.substract(18.3, 9.4)).toStrictEqual(8.9);
    });
});

describe("Tests for multiply function", () => {
    test("Should multiply two positive numbers", () => {
        expect(calculator.multiply(15, 6)).toStrictEqual(90);
    });

    test("Should multiply two negative numbers", () => {
        expect(calculator.multiply(-12, -11)).toStrictEqual(132);
    });

    test("Should multiply positive and negative numbers", () => {
        expect(calculator.multiply(24, -3)).toStrictEqual(-72);
    });

    test("Should multiply two float numbers", () => {
        expect(calculator.multiply(19.5, 1.5)).toStrictEqual(29.25);
    });
});

describe("Tests for divide function", () => {
    test("Should divide two positive numbers", () => {
        expect(calculator.divide(1604, 4)).toStrictEqual(401);
    });

    test("Should divide two negative numbers", () => {
        expect(calculator.divide(-144, -12)).toStrictEqual(12);
    });

    test("Should divide positive and negative numbers", () => {
        expect(calculator.divide(175, -25)).toStrictEqual(-7);
    });

    test("Should divide two float numbers", () => {
        expect(calculator.divide(16.4, 4.1)).toStrictEqual(4);
    });
});
