import readlineSync from "readline-sync";

// Read a positive number from the user
function readNumberPositive(): number {
  let nbr: number;
  do {
    nbr = Number(readlineSync.question("\nEnter your number: "));
  } while (isNaN(nbr) || nbr < 0);
  return nbr;
}

// Calculate half of the number
function calculateHalfNumber(number: number): number {
  return number / 2;
}

// Print the result
function printResult(number: number): void {
  const result = `\nHalf of number ${number} is ${calculateHalfNumber(number)}`;
  console.log(result);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const number = readNumberPositive();
  printResult(number);

  console.log();
}

main();
