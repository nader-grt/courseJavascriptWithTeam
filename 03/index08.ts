import readlineSync from "readline-sync";

enum EnPassFail {
  Pass = 1,
  Fail = 2,
}

// Read mark from user
function readMark(): number {
  let mark: number;
  do {
    mark = Number(readlineSync.question("Enter your mark: "));
  } while (isNaN(mark) || mark < 0);
  return mark;
}

// Check if the mark is Pass or Fail
function checkMark(mark: number): EnPassFail {
  return mark >= 50 ? EnPassFail.Pass : EnPassFail.Fail;
}

// Print result
function printMark(mark: number): void {
  if (checkMark(mark) === EnPassFail.Pass) {
    console.log("\nYou Passed");
  } else {
    console.log("\nYou Failed");
  }
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const mark = readMark();
  printMark(mark);

  console.log();
}

main();
