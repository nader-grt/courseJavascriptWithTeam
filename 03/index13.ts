import readlineSync from "readline-sync";

// Read three numbers from the user
function readNumbers(): [number, number, number] {
  const A = Number(readlineSync.question("Enter your number 1: "));
  const B = Number(readlineSync.question("Enter your number 2: "));
  const C = Number(readlineSync.question("Enter your number 3: "));
  return [A, B, C];
}

// Get the maximum of three numbers
function maxOf3Numbers(A: number, B: number, C: number): number {
  if (A >= B) {
    return A >= C ? A : C;
  } else {
    return B >= C ? B : C;
  }
}

// Print the result
function printResult(max: number): void {
  console.log(`\nYour Max is ${max}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===              Max of Three Numbers using TypeScript            ====");
  console.log("======================================================================");

  const [A, B, C] = readNumbers();
  const max = maxOf3Numbers(A, B, C);
  printResult(max);

  console.log();
}

main();
