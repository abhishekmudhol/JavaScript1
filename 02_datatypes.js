"use strict";// treat all js code as newer version (good practice)

//alert(4+4); -> ERROR because we are in nodejs environment not in browser
            // but we can use alert in nodejs but using different syntax


console.log(4
    +
    4);          // code readability should be high

 // tc39.es -> orignal documentation of js
  
 // console.log()  console.log(); -> semicolan missing

let age = 21;
let name = "ABHISHEK";
let isLoggedIn= false;

let state = null;  //intentionaly empty eg-> if we requested a server for a temprature
                   //and there is a problem in server then it sends (null) because 0 is also
                   // some calculated temprature by server 

/*
    DATATYPES

    1.Number  => 2^53
    2.Bigint
    3.String => ""
    4.Boolean
    5.Null => standalone value
    6.Nndefined
    7.Symbol =>  unique


    // object  



*/
 
         console.log(typeof "ABHSIHEK"); // TYPE => string
       
         console.log(typeof age);   // TYPE => number

   console.log(typeof null); // TYPE => object (null is a object)

         console.log(typeof undefined); // TYPE => undefined










