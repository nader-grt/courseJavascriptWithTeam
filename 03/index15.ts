import readlineSync from "readline-sync";

// Read two numbers from the user
function readNumbers(): [number, number] {
  const A = Number(readlineSync.question("Enter your number 1: "));
  const B = Number(readlineSync.question("Enter your number 2: "));
  return [A, B];
}

// Calculate the area of a rectangle
function calculateRectangleArea(A: number, B: number): number {
  return A * B;
}

// Print the result
function printResultArea(area: number): void {
  console.log(`\nYour Area is ${area}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const [A, B] = readNumbers();
  const area = calculateRectangleArea(A, B);
  printResultArea(area);

  console.log();
}

main();
