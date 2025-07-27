/**
 * FizzBuzz implementation
 * 
 * This program prints numbers from 1 to 15, but:
 * - For multiples of 3, it prints "Fizz" instead
 * - For multiples of 5, it prints "Buzz" instead
 * - For multiples of both 3 and 5, it prints "FizzBuzz"
 */

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

// Execute FizzBuzz from 1 to 15
console.log('Starting FizzBuzz from 1 to 15:');
fizzBuzz(15);