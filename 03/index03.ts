import readlineSync from "readline-sync";


enum EnNumberType {
  Even = 1,
  Odd = 2,
}

function readNumber(): number {
  let nbr: number;

  do {
    const input = readlineSync.question("\nEnter a positive number please: ");
    nbr = Number(input);
  } while (isNaN(nbr) || nbr < 0);

  return nbr;
}

function checkNumberType(number: number): EnNumberType {
  return number % 2 === 0 ? EnNumberType.Even : EnNumberType.Odd;
}

function printNumberType(numberType: EnNumberType): void {
  if (numberType === EnNumberType.Even) {
    console.log("\nNumber is Even");
  } else {
    console.log("\nNumber is Odd");
  }
}

function main(): void {
  console.log("======================================================================");
  console.log("===              Number is Even Or Odd                            ====");
  console.log("======================================================================");

  const number = readNumber();
  const numberType = checkNumberType(number);
  printNumberType(numberType);

  console.log();
}

main();
