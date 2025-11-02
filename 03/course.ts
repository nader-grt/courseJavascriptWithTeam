import readlineSync from "readline-sync";

const lengthArray = 2;

// User-related structures
interface StUser {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface StInfo {
  user: StUser;
  streetName: string;
  buildingNo: string;
}

interface StEmployee {
  fName: string;
  lName: string;
  speciality: string[];
  departmentNo: number;
}

// Read speciality for employee
function readSpecialityEmployee(length: number): string[] {
  const speciality: string[] = [];
  for (let i = 0; i < length; i++) {
    const input = readlineSync.question(`Enter the speciality number ${i + 1}: `);
    speciality.push(input);
  }
  return speciality;
}

// Print employee speciality
function printSpecialityEmployee(speciality: string[]): void {
  console.log("List of speciality section of informatique:");
  speciality.forEach((spec, i) => {
    console.log(`${i + 1}  ${spec}`);
  });
}

// Read info for employee
function readInfoEmployee(): StEmployee {
  const employee: StEmployee = {
    fName: readlineSync.question("Please enter the first name of Employee: "),
    lName: readlineSync.question("Please enter the last name of Employee: "),
    speciality: readSpecialityEmployee(lengthArray),
    departmentNo: Number(readlineSync.question("Please enter department number of Employee: ")),
  };
  return employee;
}

// Print info for employee
function printInfoEmployee(employee: StEmployee): void {
  console.log(`First name: ${employee.fName}`);
  console.log(`Last name: ${employee.lName}`);
  console.log("List of Speciality Employee:");
  printSpecialityEmployee(employee.speciality);
  console.log(`Department number: ${employee.departmentNo}`);
  console.log("\n");
}

// Read info for user
function readInfo(): StInfo {
  const info: StInfo = {
    user: {
      firstName: readlineSync.question("Please enter the first name of user: "),
      lastName: readlineSync.question("Please enter the last name of user: "),
      email: readlineSync.question("Please enter the email for user: "),
      role: readlineSync.question("Please enter the role for user: "),
    },
    streetName: readlineSync.question("Please enter the street name for user: "),
    buildingNo: readlineSync.question("Please enter the building number for user: "),
  };
  return info;
}

// Print info for user
function printInfo(info: StInfo): void {
  console.log("**************************************\n");
  console.log(`First name of user: ${info.user.firstName}`);
  console.log(`Last name of user: ${info.user.lastName}`);
  console.log(`Email of user: ${info.user.email}`);
  console.log(`Role of user: ${info.user.role}`);
  console.log(`Street name: ${info.streetName}`);
  console.log(`Building number: ${info.buildingNo}`);
  console.log("\n");
}

// Main function
function main(): void {
  console.log("=== Work with User ===\n");
  const info = readInfo();
  printInfo(info);

  console.log("\n=== Work with Employee ===\n");
  const employee = readInfoEmployee();
  printInfoEmployee(employee);
}

main();
