import readlineSync from "readline-sync";

interface StInfo {
  firstName: string;
  lastName: string;
}

// Read user info
function readInfo(): StInfo {
  const firstName = readlineSync.question("Enter your first name: ");
  const lastName = readlineSync.question("Enter your last name: ");
  return { firstName, lastName };
}

// Get full name, optionally reversed
function getFullName(info: StInfo, reversed: boolean = true): string {
  if (reversed) {
    return `${info.firstName} ${info.lastName}`;
  } else {
    return `${info.lastName} ${info.firstName}`;
  }
}

// Print full name
function printFullName(fullName: string): void {
  console.log(`\nYour Full Name is: ${fullName}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===             Get Full Name with reversed             ====");
  console.log("======================================================================");

  const info = readInfo();
  const fullName = getFullName(info, false); // pass false to reverse
  printFullName(fullName);

  console.log();
}

main();
