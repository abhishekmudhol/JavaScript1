/**
 *   
 *   stack and heap memory
 * 
 * primitive uses (stack) memory 
 * Non-primitive uses (heap) memory 
 * 
 * 
 * In stack we get copy of value i.e. call by value
 * In heap we get original value i.e. reference
 * 
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

let myTravel_1 = "iceland";

let myTravel_2 = myTravel_1

  myTravel2 = "kedarnath"

console.log(myTravel_2);//kedarnath
console.log(myTravel_1);//iceland

// above copy get change not original value


let userOne = {

    upiId : "abhishekmudhol",
    payment :  1
}


let userTwo =  userOne  // gets original reference here


userTwo.upiId = "ABHISHEKMUDHOL" // changed value 


console.log(userOne.upiId); //ABHISHEKMUDHOL

console.log(userTwo.upiId); //ABHISHEKMUDHOL







