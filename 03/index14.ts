import readlineSync from "readline-sync";

// Read two numbers from the user
function readNumbers(): [number, number] {
  const A = Number(readlineSync.question("Enter your number 1: "));
  const B = Number(readlineSync.question("Enter your number 2: "));
  return [A, B];
}

// Swap two numbers
function swapNumbers(A: number, B: number): [number, number] {
  const temp = A;
  A = B;
  B = temp;
  return [A, B];
}

// Print the numbers
function printSwapNumber(A: number, B: number): void {
  console.log(`Number A = ${A}`);
  console.log(`Number B = ${B}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===              Swap Two Numbers using TypeScript               ====");
  console.log("======================================================================");

  let [A, B] = readNumbers();
  console.log("\nBefore swap:");
  printSwapNumber(A, B);

  [A, B] = swapNumbers(A, B);
  console.log("\nAfter swap:");
  printSwapNumber(A, B);

  console.log();
}

main();
