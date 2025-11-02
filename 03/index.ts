
/**
 * 
npx tsc index.ts
node index.js
 */


// function getFullName(firstName: string, lastName: string): string {
//     return `${firstName} ${lastName}`;
// }


// let fullName:string = getFullName("John", "Doe");


// console.log(fullName); // Output: John Doe




function printName(name: string): void {
    console.log(`Your Name is ${name}`);
  }
  
  function main(): void {
    console.log("======================================================================");
    console.log("===               Problem print Name             ====");
    console.log("======================================================================");
  
    printName("Nader");
  
    console.log();
  }
  
  main();
  