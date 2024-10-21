// test/fibonacci.test.js
import { assert } from 'chai';
import fibonacci from '../fibonacci.js';

describe('Fibonacci Function', () => {
    it('should return 0 for the 0th Fibonacci number', () => {
        assert.equal(fibonacci(0), 0);
    });

    it('should return 1 for the 1st Fibonacci number', () => {
        assert.equal(fibonacci(1), 1);
    });

    it('should return 1 for the 2nd Fibonacci number', () => {
        assert.equal(fibonacci(2), 1);
    });

    it('should return 2 for the 3rd Fibonacci number', () => {
        assert.equal(fibonacci(3), 2);
    });

    it('should return 3 for the 4th Fibonacci number', () => {
        assert.equal(fibonacci(4), 3);
    });

    it('should return 5 for the 5th Fibonacci number', () => {
        assert.equal(fibonacci(5), 5);
    });
});
