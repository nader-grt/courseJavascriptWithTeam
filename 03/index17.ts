import readlineSync from "readline-sync";

// Read base and height from the user
function readNumbers(): { base: number; height: number } {
  const base = Number(readlineSync.question("Enter base: "));
  const height = Number(readlineSync.question("Enter height: "));
  return { base, height };
}

// Calculate triangle area
function triangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

// Print the area
function printResultArea(area: number): void {
  console.log(`\nYour Area is ${area}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const { base, height } = readNumbers();
  const area = triangleArea(base, height);
  printResultArea(area);

  console.log();
}

main();
