


// let A = 20 ;
// //A++ //  A = A +1 

// //console.log( "a1",A) ;

// let C =A++  ;

// console.log("C",C) ;

// console.log("A",A) ;

// let B =   A
// ++B

// console.log("B",B) ;


// let  B = 30 ; 
// B++ ;
// --B ;





// let str = "123";
// let num = Number(str);
// console.log(num, typeof num); // 123 'number'

// let num2 = +str; // shortcut
// console.log(num2, typeof num2); // 123 'number'




// let A = 10 ;
// let B = 20 

// console.log("before A =" ,A  ,"B =", B ) ; // true

// let C = A ;
// A = B ;
// B = C ;
// console.log("after A =" ,A  ,"B =", B ) ; // false



function swap (number) {
    let temp = number.x ;
    number.x = number.y ;
    number.y = temp ;
    console.log("inside function A =" ,number.x  ,"B =", number.y ) ; // false
}


// let x = 100 ;
// let y = 200 ;

let obj1= {
    x:100,
    y:200
}

console.log("before function call A =" ,obj1.x  ,"B =", obj1.y ) ; // true
swap (obj1 ) ;
console.log("after function call A =" ,obj1.x  ,"B =", obj1.y ) ; // false