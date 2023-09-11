
/*******************truthy-falsy values in js**************/

const userEmail = "abhishekmudholatwork@gmail.com"  // true

if (userEmail) {
    console.log("Got user email"); // execued
} else {
    console.log("Don't have user email");
}

const userEmail_1 = "" // false

if (userEmail_1) {
    console.log("Got user email");
} else {
    console.log("Don't have user email"); // execued
}

const userEmail_2 =  [ ] // true

if (userEmail_2) {
    console.log("Got user email"); // execued
} else {
    console.log("Don't have user email");
}


const userEmail_3 = " " // true

if (userEmail_3) {
    console.log("Got user email");
} else {
    console.log("Don't have user email"); // execued
}

// "" AND " " ARE DIFF BECUZ "" -> empty string so FALSE and " " -> have space in it so TRUE

/*********************************************************/

// FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// TRUTHY VALUES
// "0", 'false', " ", [], {}, function(){}

/*              {} -> empty object                       */
/*********************************************************/

if (userEmail_2.length === 0) {
    console.log("Array is empty");
}

/********************************************************/

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

/*********************************************************/

console.log(false == 0); // true

console.log(false == ''); // true

console.log('' == 0);     // true

/***************Nullish Coalescing Operator (??)**********/

//  CHECK SEFTY IF VALUE COMMING FROM DATABASE IS null
//  Nullish Coalescing Operator ONLY MADE FOR null AND undefined

let val1 = 8 ?? 9

let val2 = null ?? 9

let val3 =  undefined ?? 9

let val4 = null ?? 100 ?? 99  // the first value it recieved got assigned

console.log(val1);     //8
console.log(val2);     //9
console.log(val3);     //9
console.log(val4);     //100

/******************TERNIARY OPERATOR**********************/


// condition ? true : false

const teaPrice = 500

teaPrice >= 400 ? console.log("greater than 400") : console.log("less than 400"); // greater than 400


