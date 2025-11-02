import readlineSync from "readline-sync";

interface StInfo {
  firstName: string;
  lastName: string;
}

// Read user info
function readInfo(): StInfo {
  const firstName = readlineSync.question("Enter please your first name: ");
  const lastName = readlineSync.question("Enter please your last name: ");

  return { firstName, lastName };
}

// Get full name
function getFullName(info: StInfo): string {
  return `${info.firstName} ${info.lastName}`;
}

// Print full name
function printFullName(fName: string): void {
  console.log(`\nYour Full Name is: ${fName}`);
}

// Main function
function main(): void {
  console.log("======================================================================");
  console.log("===           Get Full Name with STRUCT DATATYPE                  ====");
  console.log("======================================================================");

  const info = readInfo();
  const fullName = getFullName(info);
  printFullName(fullName);

  console.log();
}

main();
