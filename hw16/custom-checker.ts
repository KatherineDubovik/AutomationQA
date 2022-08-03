import {calculator} from './calculator';

export function customChecker(firstNumber: number, secondNumber: number, operation: '+' | '-' | '*' | '/' | '^', result: number) {
    if (calculator(firstNumber, secondNumber, operation) === result) {
        console.log('Passed');
    } else {
        console.log('Failed');
    }
}
