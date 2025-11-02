import readlineSync from "readline-sync";

enum EnPassFail {
  Pass = 1,
  Fail = 2,
}

// Read three marks from the user
function readMark(): [number, number, number] {
  const mark1 = Number(readlineSync.question("Enter your Mark 1: "));
  const mark2 = Number(readlineSync.question("Enter your Mark 2: "));
  const mark3 = Number(readlineSync.question("Enter your Mark 3: "));
  return [mark1, mark2, mark3];
}

// Calculate the sum of marks
function sumMarkTotal(mark1: number, mark2: number, mark3: number): number {
  return mark1 + mark2 + mark3;
}

// Calculate the average of marks
function averageMarkTotal(mark1: number, mark2: number, mark3: number): number {
  return sumMarkTotal(mark1, mark2, mark3) / 3;
}

// Check if the average mark is Pass or Fail
function checkMark(averageMark: number): EnPassFail {
  return averageMark >= 50 ? EnPassFail.Pass : EnPassFail.Fail;
}

// Print the result
function printAverageMark(average: number): void {
  if (checkMark(average) === EnPassFail.Pass) {
    console.log("\nPassed");
  } else {
    console.log("\nFailed");
  }
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const [mark1, mark2, mark3] = readMark();
  const average = averageMarkTotal(mark1, mark2, mark3);
  printAverageMark(average);

  console.log();
}

main();
