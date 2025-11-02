import readlineSync from "readline-sync";

// Read two numbers from the user
function readNumbers(): [number, number] {
  const A = Number(readlineSync.question("Enter your number 1 (side): "));
  const D = Number(readlineSync.question("Enter your number 2 (diagonal): "));
  return [A, D];
}

// Calculate rectangle area using side and diagonal
function rectangleAreaBySideAndDiagonal(A: number, D: number): number {
  const area = A * Math.sqrt(D ** 2 - A ** 2);
  return area;
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

  const [A, D] = readNumbers();
  const area = rectangleAreaBySideAndDiagonal(A, D);
  printResultArea(area);

  console.log();
}

main();
