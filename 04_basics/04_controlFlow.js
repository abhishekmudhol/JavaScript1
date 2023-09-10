/***************************IF****************************/

/*
if (condition) {
    
}
*/

if (true) {
    
}


if (false) {
    
}

// < , > , <= , => ,== , != , === , !==

if ('1' !== 1) {  // true
    console.log("strick inequality");
}

//if (9999){} is evaluated as true because any non-zero number 
///is considered true in JavaScript
/*******************************************************/

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); // power not avaliable here i.e. out of scope

const balance = 1000
if (balance < 500) {
    console.log("less than 500");
} else  {
    console.log("greater than 500");
}

/*********************************************************/

if (balance > 500) console.log("test"), 
console.log("test2"); // implicit scope
   
   // , for writing multiple lines  
       
     // DO NOT WRITE LIKE THIS WAY IS VERY UNREADABLE

/************************IF-ELSEIF************************/

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 750");
    
} else {
    console.log("less than 1200");

}

/*********************************************************/

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

/*************************SWITCH CASE****************************/

// switch (key) {
//     case value:
        
//         break;
        
//     case value:
        
//         break;

//     case value:
        
//         break;
//     case value:
        
//         break;

//     default:
//         break;
// }

// shift + alt + downArrow => for duplicating selected thing

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        //break;
    case "april":
        console.log("april");
        break;
       
    default:
        console.log("default case match");
        break;
}

/* break -> use to stop searching when a key is matched
          i.e. stop executing futher code or statment 
 IF break is not used then it execute all line of code
         from matched case EXCEPT default
*/
