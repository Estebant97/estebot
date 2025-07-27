/**
 * Collatz Algorithm Implementation
 *
 * Rules:
 * - If the number is even, divide it by 2
 * - If the number is odd, multiply it by 3 and add 1
 * - Continue until reaching 1
 */

// Function to perform the Collatz algorithm on a given number
function collatz(n) {
  // Validate input
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("Input must be a positive integer");
  }

  // Store the sequence
  const sequence = [n];

  // Continue until we reach 1
  while (n !== 1) {
    if (n % 2 === 0) {
      // If n is even, divide by 2
      n = n / 2;
    } else {
      // If n is odd, multiply by 3 and add 1
      n = 3 * n + 1;
    }
    sequence.push(n);
  }

  return sequence;
}

// Function to count steps in Collatz sequence
function countCollatzSteps(n) {
  return collatz(n).length - 1;
}

// Example usage
function runExamples() {
  const testNumbers = [6, 27, 19, 871];

  testNumbers.forEach((num) => {
    const sequence = collatz(num);
    console.log(`\nCollatz sequence for ${num}:`);
    console.log(sequence.join(" → "));
    console.log(`Number of steps: ${sequence.length - 1}`);

    // Find the highest value in the sequence
    const maxValue = Math.max(...sequence);
    console.log(`Highest value reached: ${maxValue}`);
  });

  // Find a number with a specific step count
  console.log("\nFinding numbers with specific step counts:");
  for (let i = 10; i <= 20; i++) {
    const steps = countCollatzSteps(i);
    console.log(`Number ${i} takes ${steps} steps to reach 1`);
  }
}

// Run the example
console.log("=== Collatz Algorithm Demonstration ===");
runExamples();

// If this module is run directly (not imported)
if (require.main === module) {
  // Allow running with command line argument
  if (process.argv.length > 2) {
    const inputNumber = parseInt(process.argv[2], 10);
    if (!isNaN(inputNumber) && inputNumber > 0) {
      const sequence = collatz(inputNumber);
      console.log(`\nCollatz sequence for ${inputNumber}:`);
      console.log(sequence.join(" → "));
      console.log(`Number of steps: ${sequence.length - 1}`);
    } else {
      console.log("Please provide a positive integer as an argument.");
    }
  }
}
