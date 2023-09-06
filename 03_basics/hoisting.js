
/**
 * 
 * JAVASCRIPT EXCUTE LINE BY LINE
 * 
 *  console.log(website); if here is error then 
 *                        line after this line not get excute
 * 
 *   two() // not excute
 * 
 */

/***********************hoisting**************************/
 

// IN JS VARIABLES CAN HOLD ANY LIKE FUNCTION , JSON 
// when fuction is assign to variable then it is also called expression 

add(4) // here function get excute although it call befor declaration

function add(num) {
    return num ++ 
}

addTwo(4) //ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
    return num + 2 
}

/*******************************************************/


