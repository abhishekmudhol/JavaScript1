
// const promiseOne = new Promise()
// const Date1      = new Date()
 
/*ACTUALLY new keyword is constructor function
  constructor function ALLOW US TO MAKE multiple instances from one Object literal
*/

function user(username , userID) {
    this.username = username
    this.userID   = userID
    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
       return this  // => it is implisitly define , SO weather write it or NOT it does not affect
} 

const userOne = user("Ram" , 1)
const userTwo = user("sita" , 2)

console.log(userOne);  // value get override now with userTwo i.e. username: sita 
//                                                                 userID: 2

//           HOW TO SOLVE ABOVE THING

/* constructor function give us new instance every time 
    it means we get copy and we can do whatever we wnat with it , other is not get affected by it*/

 const userOneUsingNew = new user("Ram" , 1)
 const userTwoUsingNew = new user("sita" , 2)

 console.log(userOneUsingNew); // user { username: 'Ram', userID: 1 }
 console.log(userTwoUsingNew); // user { username: 'sita', userID: 2 }

 /* 1. whenever we write new keyword firstly empty object get created which we call instance
    2. In second step constructor function get called due to new keyword
    3. constructor function pack all arguments and give it to us*/

 console.log(userOneUsingNew.constructor)  // [Function: user]  // i.e. constructor property is nothing but a reference about
//                                                                                     ourself means user here

/******************************instanceof*****************************/

/* 
  The instanceof operator tests to see if the prototype property of a constructor
  appears anywhere in the prototype chain of an object.The return value is a boolean value.
*/

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);
//   // Expected output: true
  
//   console.log(auto instanceof Object);
//   // Expected output: true
