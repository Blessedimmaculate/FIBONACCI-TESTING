// fibonacci.js
// IMMACULATE AND DESIRE

export default function fibonacci(n) {
    if (n < 0) {
        throw new Error("Negative numbers are not allowed.");
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
