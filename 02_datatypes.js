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

    1. number  => 2^53
    2.bigint
    3.string => ""
    4.boolean
    5.null => standalone value
    6.undefined
    7.symbol =>  unique


    // object  



*/
 
         console.log(typeof "ABHSIHEK"); // TYPE => string
       
         console.log(typeof age);   // TYPE => number

   console.log(typeof null); // TYPE => object (null is a object)

         console.log(typeof undefined); // TYPE => undefined










