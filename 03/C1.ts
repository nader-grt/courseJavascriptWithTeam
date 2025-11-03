



let arr : number[]  = []  ;;
for(let i=1;i<=10;i++){
    arr.push(i);
}


 interface IUser {
    fname: string 
    lname: string 
  
}

    let user : IUser ;

   



   
  function fillUser(user: IUser) :void{

    for(let key in user){
        console.log(`${key} : ${user[key as keyof IUser]}`);

    }
  }



function printUser(user: IUser) :void{

  for(let key in user){
      console.log(`${key} : ${user[key as keyof IUser]}`);

  }
}

console.log(arr);


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