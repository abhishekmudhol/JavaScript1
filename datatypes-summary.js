
//  js is Dynamically typed lang

/*datatype is devide into two categories the way in which store data in memory and access it  
   
1. primitive

    -> call by value
     
     => String ,Number, Boolean, Null, Undefined, Symbol, Bigint
      
     
2. Non-primitive(reference type)

    -> call by reference

     => Array, Objects, Functions

*/  

 /***********************************************/

    const score1 = 500;  // Number
    const score2 = 500.9;// Number
    // both comes in Number categary 
    // not special for decimal here in js Number is Number

 /***********************************************/

    const outsideTemp = null;

    let userEmail;
//       or
    let userEmail1= undefined;

 /***********************************************/

  const id = Symbol('9322')
  //Returns a new unique Symbol value.
  const anotherid = Symbol('9322')

  console.log(id === anotherid); // false because it is Symbol so unique

 /***********************************************/

const bigNumber = 3274897324982743634566456n

console.log(bigNumber);


/******************ARRAY**********************/
const heros = ["RAM","naag","ABHSIHEK", "raju"]

/******************OBJECT**********************/
let NameObject= {
                 name:"ABHISHEK",
                 age: 21
                }
 console.log(NameObject.age);

 /******************FUNCTION**********************/
 let fun1 = function sum() {console.log(100 + 100); }
 let fun2 = function(){ }
 let fun3 = ()=>{}
            function addition() {console.log(500 + 500); }
 
fun1()
addition()
//sum()  // errorS


 /***********************************************/

// to find datatype of variable using typeof functions

console.log(typeof(fun1)); //function
console.log(typeof addition); //function
console.log(typeof NameObject); //object
console.log(typeof NameObject.age); //number
console.log(typeof bigNumber); //bigint
console.log(typeof heros); //object   *****
console.log(typeof id); //symbol



//               NOTES
/* actually the return type of non-primitive datatype is object 
   object-function in case of function
*/
//

// https://262.ecma-international.org/5.1/#sec-11.4.3


/*

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object    *****  
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function  *****
       Object  =>  object

*/