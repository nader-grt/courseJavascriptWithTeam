/**
 * 
 * 
 * Exercises: Driver License & Eligibility Checker
Exercise 1 — Modify Age Requirement

Modify the isAccepted function so that the minimum age is 25 instead of 21.

Test the program with ages 22, 24, 26, and see the result.
 */










import * as readlineSync from "readline-sync";

interface StInfo {
  age: number;
  hasDriverLicense: boolean;
}

function readInfo(): StInfo {
  const age = Number(readlineSync.question("Please enter your age: "));
  const hasLicenseInput = readlineSync.question("Do you have a driver license? (yes/no): ");

  const hasDriverLicense = hasLicenseInput.trim().toLowerCase() === "yes";

  return { age, hasDriverLicense };
}

function isAccepted(info: StInfo): boolean {
  return info.age > 21 && info.hasDriverLicense;
}

function printResult(info: StInfo): void {
  if (isAccepted(info)) {
    console.log("\nHired");
  } else {
    console.log("\nRejected");
  }
}

function main(): void {
  console.log("======================================================================");
  console.log("===              Problem: Driver License Check                   ====");
  console.log("======================================================================");

  const info = readInfo();
  printResult(info);
  console.log();
}

main();
