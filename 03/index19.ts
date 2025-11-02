import readlineSync from "readline-sync";

// Read a positive number from the user
function readPositiveNumber(message: string): number {
  let N: number;
  do {
    N = Number(readlineSync.question(message));
  } while (N < 0);
  return N;
}

// Calculate factorial of a number
function factorial(N: number): number {
  let fac = 1;
  for (let count = N; count >= 1; count--) {
    fac *= count;
  }
  return fac;
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===               Factorial Number                                ====");
  console.log("======================================================================");

  const N = readPositiveNumber("Enter N ? ");
  console.log(`The factorial of Number ${N} is ${factorial(N)}`);

  console.log();
}

main();
