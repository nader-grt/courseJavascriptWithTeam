import readlineSync from "readline-sync";

// Read two numbers from the user
function readNumbers(): [number, number] {
  const num1 = Number(readlineSync.question("Enter your number 1: "));
  const num2 = Number(readlineSync.question("Enter your number 2: "));
  return [num1, num2];
}

// Get the maximum of two numbers
function maxOf2Numbers(num1: number, num2: number): number {
  return num1 >= num2 ? num1 : num2;
}

// Print the result
function printResult(max: number): void {
  console.log(`\nYour Max is ${max}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const [num1, num2] = readNumbers();
  const max = maxOf2Numbers(num1, num2);
  printResult(max);

  console.log();
}

main();
