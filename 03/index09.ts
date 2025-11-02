import readlineSync from "readline-sync";

// Read three numbers from the user
function readNumbers(): [number, number, number] {
  const num1 = Number(readlineSync.question("Enter your Number 1: "));
  const num2 = Number(readlineSync.question("Enter your Number 2: "));
  const num3 = Number(readlineSync.question("Enter your Number 3: "));
  return [num1, num2, num3];
}

// Calculate the sum of three numbers
function calculateSumOf3Numbers(num1: number, num2: number, num3: number): number {
  return num1 + num2 + num3;
}

// Print the result
function printResultSumThreeNumbers(total: number): void {
  console.log(`\nYour total is ${total}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const [num1, num2, num3] = readNumbers();
  const total = calculateSumOf3Numbers(num1, num2, num3);
  printResultSumThreeNumbers(total);

  console.log();
}

main();
