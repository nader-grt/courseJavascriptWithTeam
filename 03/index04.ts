import readlineSync from "readline-sync";

interface StInfo {
  age: number;
  hasDriverLicense: boolean;
  hasRecommandation: boolean;
}

// Read info from the user (synchronously)
function readInfo(): StInfo {
  const age = Number(readlineSync.question("Please enter your age: "));

  const licenseInput = readlineSync.question("Do you have a driver license? (yes/no): ");
  const hasDriverLicense = licenseInput.trim().toLowerCase() === "yes";

  const recInput = readlineSync.question("Do you have a recommendation? (yes/no): ");
  const hasRecommandation = recInput.trim().toLowerCase() === "yes";

  return { age, hasDriverLicense, hasRecommandation };
}

// Check if the person is accepted
function isAccepted(info: StInfo): boolean {
  if (info.hasRecommandation) {
    return true;
  } else {
    return info.age > 21 && info.hasDriverLicense;
  }
}

// Print the result
function printResult(info: StInfo): void {
  if (isAccepted(info)) {
    console.log("\nHired");
  } else {
    console.log("\nRejected");
  }
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===                Training using TypeScript App                  ====");
  console.log("======================================================================");

  const info = readInfo();
  printResult(info);
  console.log();
}

main();
