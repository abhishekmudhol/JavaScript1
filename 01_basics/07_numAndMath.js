 
//                      NUMBERS                 


  const score = 500;

  const balance = new Number(1); // explicitly defining number as a datatype

    console.log(score);  // 500
    console.log(balance);// [Number: 1]

/*
     the difference between above both declaration is when we 
     declare like second (using new) we explicitly say we want
     number 

     we get all properties of number in both declaration
     
     but we can see them when we use new to declare

    when we use new keyword and declare a varible we can see in
     browser various properties (prototype)
 */

   /*******************************************************/  

     // converting to a string

     console.log(balance.toString().length); 
     // now we get extra properties of string because it gets converted to string
     
      console.log(balance.toFixed(2));//1.00

      /*******************************************************/

   const otherNumber = 12.9836

   console.log(otherNumber.toPrecision(3)); //13.0
   console.log(otherNumber.toPrecision(2)); //13
   console.log(otherNumber.toPrecision(4)); //12.98
   console.log(otherNumber.toPrecision(1)); //1e+1

   const otherNumber1 = 12.8936

   console.log(otherNumber1.toPrecision(3)); // 12.9
   console.log(otherNumber1.toPrecision(2)); //13
   console.log(otherNumber1.toPrecision(4)); //12.89
   console.log(otherNumber.toPrecision(1)); //1e+1

   // 1123.89
  //  toPrecision(3) ->  1.12e+3
   
   /*******************************************************/

  const hundreds = 100000000;

  console.log(hundreds.toLocaleString('en-IN'));//10,00,00,000
  console.log(hundreds.toLocaleString('en-US'));//100,000,000

  /*******************************************************/

  console.log(Number.MAX_VALUE); //1.7976931348623157e+308
  console.log(Number.MIN_VALUE);//5e-324
  
  console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
  console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

/*******************************************************/
  

//                     MATHS

 //  -> Math library comes with js by default

 console.log(Math); // Object [Math] {}  -> see it in browser

console.log(Math.abs(-5)); // 5  only (-) => (+)

console.log(Math.round(4.2)); // 4
console.log(Math.round(4.9)); //5
console.log(Math.round(4.5)); //5

console.log(Math.ceil(4.2));//5    upper values
console.log(Math.floor(4.9));//4    lower values

console.log(Math.min(4,1,2,3,4,5,9)); // 1
console.log(Math.max(4,1,2,3,4,5,9)); // 9

console.log(Math.min([4,1,2,3,4,5,9])); //NaN *****
             
/*******************************************************/

console.log(Math.random()); //returns a random number between 0 (inclusive),  and 1 (exclusive):
                            //0 to 0.9999

console.log(Math.random()*10); // 0 to 9.9999

console.log((Math.random()*10) + 1); // 1 to 10.9999  to avoid 0  (i.e. in 0.04 *10 = 0.4) 

console.log(Math.floor((Math.random()*10))+ 1); // 1 to 10   got rounfof to lowest value by floor()

/*******************************************************/

const min = 10;
const max = 20;


const value = Math.floor(Math.random()*(max - min + 1)) + min ;

console.log(value);

/*******************************************************/


const min1 = 5;
const max1 = 10;


const value_1 = Math.floor(Math.random()*(max1 - min1 + 1)) + min1 ;

console.log(value_1);  // give values between 5 to 10 


/*******************************************************/

