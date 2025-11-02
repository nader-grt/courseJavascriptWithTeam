/**
 * 
 * 
 * Divisors of 28: 1, 2, 4, 7, 14
Sum of divisors: 28
28 is a Perfect Number

 */



function getDivisors(num: number): number[] {
    const divisors: number[] = [];
    for (let i = 1; i < num; i++) {
      if (num % i === 0) divisors.push(i);
    }
    return divisors;
  }
  
  function isPerfectNumber(num: number): boolean {
    const divisors = getDivisors(num);
    const sum = divisors.reduce((a, b) => a + b, 0);
    return sum === num;
  }
  
  function printDetails(num: number): void {
    const divisors = getDivisors(num);
    const sum = divisors.reduce((a, b) => a + b, 0);
    console.log(`Divisors of ${num}: ${divisors.join(", ")}`);
    console.log(`Sum of divisors: ${sum}`);
    if (sum === num) {
      console.log(`${num} is a Perfect Number`);
    } else {
      console.log(`${num} is NOT a Perfect Number`);
    }
  }
  
  printDetails(28);
  