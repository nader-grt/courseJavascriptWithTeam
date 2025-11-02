import readlineSync from "readline-sync";

// Read an age from the user
function readAge(): number {
  let age: number;
  do {
    age = Number(readlineSync.question("Enter your Age please: "));
  } while (age < 0);
  return age;
}

// Validate if a number is in a specific range
function validateNumberInRange(number: number, from: number, to: number): boolean {
  return number >= from && number <= to;
}

// Keep reading until age is within the specified range
function readUntilAgeBetweenRange(from: number, to: number): number {
  let age: number;
  do {
    age = readAge();
  } while (!validateNumberInRange(age, from, to));
  return age;
}

// Print result
function printResult(age: number): void {
  if (validateNumberInRange(age, 18, 45)) {
    console.log(`${age} is a valid Age`);
  } else {
    console.log(`${age} is an invalid Age`);
  }
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const age = readUntilAgeBetweenRange(18, 45);
  printResult(age);

  console.log();
}

main();
