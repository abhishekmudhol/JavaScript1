let value = 5;

let negativeValue = -value

//console.log(negativeValue); //-5

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**5);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello"
let str2 = " ABHISHEK"

let str3 = str1+str2

//console.log(str3); //Hello ABHISHEK


/************ ********IMPORTANT*************************/

// console.log("1" + 2); //12

// console.log(1 + "2");//12

// console.log("1"+ 2 + 2);//122

// console.log(1 + 2 + "2");//32

// console.log((2+4)*5/2); // 15

 // see this on tc39.es(ECMAscript) in ToPrimitive section
 
 /*if string is first then all convert to string and 
   if string is at end then firt 1+2 = 3 and then 32(above example)
   */

 /*  */

// console.log(+true);// 1
//console.log(true+);//error

//console.log(+""); //0


let score = 500;

  score++ 
  //++score     prefix and postfix operator see on mdn
//console.log(score);


let x = 3;
const y = x++;  // first assign then increase

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;   // first increase then assign

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// link to study conversion

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion