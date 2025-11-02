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

// Calculate the average of three numbers
function calculateAverage(num1: number, num2: number, num3: number): number {
  return calculateSumOf3Numbers(num1, num2, num3) / 3;
}

// Print the average result
function printResultAverageThreeNumbers(average: number): void {
  console.log(`\nYour Average is ${average}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===               Average of Three Numbers                        ====");
  console.log("======================================================================");

  const [num1, num2, num3] = readNumbers();
  const average = calculateAverage(num1, num2, num3);
  printResultAverageThreeNumbers(average);

  console.log();
}

main();
