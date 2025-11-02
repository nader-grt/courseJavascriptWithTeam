let nums2: number[] = [1,2,3,4,5];
console.log(nums2.map(n => n*2)); // [2,4,6,8,10]
console.log(nums2.filter(n => n%2===0)); // [2,4]
console.log(nums2.reduce((a,b)=>a+b,0)); // 15
console.log(nums2.find(n => n>3)); // 4




let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log([...arr1,...arr2,400 , 500]);


/**
 * 
 * 
 * 1. Print numbers from 1 to N =100using a loop.
2. Sum numbers from 1 to N.
3. Print all even numbers between 1 and 20.
4. Calculate factorial of a number.5! = 5 * 4 *3 *2 *1 = 120
5. Sum all elements in an array.
6. Reverse a string.
7. Count vowels in a word.
8. Find the maximum number in an array.
9. Check if a number is prime.
10. Print multiplication table of a number.
 */