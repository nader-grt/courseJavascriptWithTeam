// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 =[...arr1,"khawla"] ;

// console.log(arr3); // Output: [1, 2, 3]


// function getName(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }


// console.log(getName(...["John", "Doe"])); // Output: John Doe



function functionOne()
{
  console.log("Hello from functionOne") ;
}


function functionTwo()
{
    functionOne() ;
}


function functionThree()
{
    functionTwo() ;
}


function functionFour()
{
    functionThree() ;
}


functionFour() ;

let x = 10 ;