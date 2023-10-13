
function multipleBy5(num) {
    return num*5
}

multipleBy5.power = 4

console.log(multipleBy5(5));          //25
console.log(multipleBy5.power);       //4  
console.log(multipleBy5.prototype);   //{}

/* 
   THIS EMPLIES THAT every thing in javascript is object i.e. function IS function AND also OBJECT 
   it means function's functionality is work like function BUT we can also make it behave like Object
   becuz end of day every thing end with Object (see image) 
   further of the Object we get or have NULL i.e. prototype of Object is NULL
*/

function createUser(username , score) {
    this.username = username
    this.score  = score
}

createUser.prototype.increment = function () {
               this.score++    // this means it is who called it
}

createUser.prototype.printMe = function () {
              console.log(`score: ${this.score}`);
}

//const A  = createUser('Ram' , 4)
const A  = new createUser('Ram' , 4)
//const B  = createUser('sita',1)
const B  = new createUser('sita',1)

//MyArray.prototype.map()  => we NOT WRITE LIKE THIS i.e. we not write prototype 
//MyArray.map()            =>  we write like this .prototype is handeled BY javascript

//A.increment()  // TypeError: Cannot read properties of undefined 
//               because the properties that  we injected are got injected BUT WHEN WE DOING 
//               const A  = createUser('Ram' , 4) we not convey it to A that we got some properties injected , THAT CAN BE DONE BY USING new KEYWORD

A.increment()  /*after using new keyword*/
A.printMe()    //score: 5

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

JAVASCRIPT GIVE constructor function THROUGH new KEYWORD , not THROUGH A class

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/