/*************************THIS KEYWORD************************/

//  'this' keyword refers current context (context simply means value)

const user ={

    username : "abhishek",
    price : 1000,

    welcomeMessage : function () {
        console.log(`${this.username}, welcome to website`);

        console.log(this); 
    } 
}


user.welcomeMessage() //abhishek, welcome to website

user.username = "RAM"

user.welcomeMessage() //RAM, welcome to website


/* due to this keyword when we change username to RAM and it get refered in welcomeMessage 
(i.e. in current context usrname is RAM) */

console.log(this);  // {}

/* as we are in node environment there is no global context
hence this is refering to empty object {} */

/*********************IMPORTANT***************************/
 // BUT in browser  console.log(this); for global context have window object
 // this refers to a non empty object

/*********************************************************/

function Travel( ) {
    console.log(this);
}

Travel()  

/*  OUTPUT OF  Travel() is

<ref *1> Object [global] {

    global: [Circular *1],
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    structuredClone: [Function: structuredClone],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: Performance {
      nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 64.41139996051788,
        nodeStart: 2.952899932861328,
        v8Start: 8.900099992752075,
        bootstrapComplete: 43.20169997215271,
        environment: 21.068400025367737,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
      },
      timeOrigin: 1694262237847.437
    },
    fetch: [AsyncFunction: fetch]
  }
  */

/*********************************************************/

  function Travel1( ) {
    let username = "ABHISHEK"
    console.log(this.username); // undefined
}

Travel1() 

/* the context is only working in object we not getting username using this
 in function
*/

/*********************************************************/


/*********************ARROW FUNCTION*********************/

const travel4 =  ( ) => {
    console.log(this); // {}
}

travel4()

// console.log(this); in arrow function giving 

/******************************************/

const travel5 =  ( ) => {

    let username = "ABHISHEK"
    console.log(this.username); // undefined
}

travel5()

/******************************************/


const addTwo = (num1, num2) => {
    return num1 + num2
}

//          OR

// const addTwo = (num1, num2) => num1 + num2  // implicit return

//          OR

// const addTwo = (num1, num2) => (num1 + num2)

// IMPORTANT -> In arrow function {} -> use return        // explicit return
//                                () -> No need fo return // implicit return


/******************************************/
// return object in arrow function 

const addTwo1 = (num1, num2) => { username: "ABHISHEK"}

console.log(addTwo1(4,5)); // undefined becuz we cannot return  { username: "ABHISHEK"} way we need parenthesis ({ username: "ABHISHEK"})

          /***************/

const addTwo2 = (num1, num2) => ({ username: "ABHISHEK"})

console.log(addTwo2(4,5)); // { username: 'ABHISHEK' }
