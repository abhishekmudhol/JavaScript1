
//                     ARRAYS


const score = [100,200,300,400]

score[1]= 400
console.log(score); // [ 100, 400, 300, 400 ]

//score = [500,499,890,900] //TypeError: Assignment to constant variable.

let arr = [ "ABHSIEHK",500,true,'travel']

arr[1]= 400
console.log(arr); // [ 'ABHSIEHK', 400, true, 'travel' ]

arr = ["ABHSIHEK"]
console.log(arr)   //[ 'ABHSIHEK' ]

/*****************************IMPORTANT**********************************/
/*
  //  declaring array with let vs const


let condiments = ['Ketchup', 'Soy Sauce', 'Sriracha'];

// Mutation possible
condiments[0] = 'Mayo';
console.log(condiments);//=> [ 'Mayo', 'Soy Sauce', 'Sriracha' ]

// Re-assigning possible
condiments = ['Mayo'];
console.log(condiments); //=> [ 'Mayo' ]

// Re-declaring not possible
//let condiments = [] //=> SyntaxError: Identifier 'condiments' has already been declared


                            // CONST

const utensils = ['Fork', 'Chopsticks', 'Spork'];

// Mutation Possible
utensils[2] = 'Spoon'
console.log(utensils); //=> [ 'Fork', 'Chopsticks', 'Spoon' ]
utensils.length = 0
console.log(utensils); //=> [ ]

// Re-assigning not possible
//utensils = ['Spoon']; //=> TypeError: Assignment to constant variable.

// Re-declaring not possible
//const utensils = {} //=> SyntaxError: Identifier 'condiments' has already been declared


            Mutation - updates the values present in the memory
            
            Reassign - variable points to new memory locations where new values are stored
            
                Let - offers both mutation and reassiging
                
                Const - offers mutation but not reassiging
                
                Both - doesnot offers redeclaring
*/
/****************************************************************************/

let a = [function a() {console.log("fuction");},500,true,"ABHISHEK"]
    
let A =a[0]

A(); //fuction   

a[0](); //fuction

//Just like you can assign a function to a variable and call it,
// you can stick functions in an array and call them
/****************************************************************************/

/*
 *  JavaScript arrays are resizable and can contain a mix of different data types
 * 
 *  JavaScript array-copy operations create shallow copies(pass refernce not copy). 
 */


const arr2 = new Array(1,2,3,4,5)

console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// see in browser console (protorype)

/****************************************************************************/

//                      ARRAY METHODS


































































