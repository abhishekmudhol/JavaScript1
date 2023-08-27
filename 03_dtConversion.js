//  let score = 200
// console.log(typeof score);
// console.log(typeof(score));

// let highScore = "500"  // from any soure we get it in string
// console.log(typeof(highScore));

// let valueInNumber = Number(highScore) //convered to a Number
// console.log(typeof(valueInNumber));

// let score1 = "500ab"
// console.log(typeof(score1));

// let convInNumber = Number(score1)

// console.log(typeof(convInNumber)); //number

// console.log(convInNumber);     // NaN

// let score2 = null;
// console.log(typeof(score2)); // object

// let convInNumber2 = Number(score2)

// console.log(typeof(convInNumber2)); //number
// console.log(convInNumber2);     // 0


// let score3 = undefined;
// console.log(typeof(score3)); // undefined

// let convInNumber3 = Number(score3)

// console.log(typeof(convInNumber3)); //number
// console.log(convInNumber3);     // NaN


// let score4 = true;
// console.log(typeof(score4)); // boolean

// let convInNumber4 = Number(score4)

// console.log(typeof(convInNumber4)); //number
// console.log(convInNumber4);     // 1 and 0 in case of false


// let score5 = "ABHISHEK";
// console.log(typeof(score5)); // string

// let convInNumber5 = Number(score5)

// console.log(typeof(convInNumber5)); //number
// console.log(convInNumber5);     //  NaN 


/*        NOTES (Number)
   
     "500"   => 500

     "500ab" => NaN

     true   => 1

     false  => 0
    
*/
  
//  let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn); //true


//  let isLoggedIn1 = " ";

// let booleanIsLoggedIn1 = Boolean(isLoggedIn1)

// console.log(booleanIsLoggedIn1); //true



// let isLoggedIn2 = "";

// let booleanIsLoggedIn2 = Boolean(isLoggedIn2)

// console.log(booleanIsLoggedIn2); //false



// let isLoggedIn3 = "ABHISHEK";

// let booleanIsLoggedIn3 = Boolean(isLoggedIn3)

// console.log(booleanIsLoggedIn3); //true


/*    NOTES (Boolean)

     1          => true 
     0          => false
     ""         => false
     "ABHISHEK" => true

*/

let someNumber = 500;

let stringNumber = String(someNumber)

console.log(stringNumber);        //500

console.log(typeof stringNumber); // string