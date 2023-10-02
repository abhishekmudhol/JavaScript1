// promises is OBJECT in javascript

 /*PROMISE CREATION*/
//const promiseOne = new Promise(take callback)   // getting instance of promise 
const promiseOne = new Promise(function (resolve , reject ) {
        
        // DO AN Async task
        /*  1. DB calls
            2.cryptography
            3.network
        */
       setTimeout(() => {
           console.log('Aync task is complete');
           resolve() // TO CONNECT resolve AND then
       },2000)       
}) 


 /*PROMISE CONSUMTION*/

    //promiseOne.then(take callback)  // have relation with resolve
    promiseOne.then(function () {
        console.log("promise consumed");
    })  


/**************************OR****************************************/

new Promise((resolve , reject)=> {
    setTimeout(() => {
        console.log('Aync task2 is complete');
        resolve() 
    },2000)   
}).then(() => {
    console.log("Aync task2 is resolved");
})

/********************************************************************/

const promiseThree = new Promise((resolve , reject)=> {
        setTimeout(()=>{
            resolve({userName : "ram" , id : 1})  // WE CAN PASS array , function ANYTHING IN HERE 
        },2000)
})

promiseThree.then((user)=> {
    console.log(user);  //{ userName: 'ram', id: 1 }
})

/********************************************************************/

const promiseFour = new Promise((resolve , reject)=>{
     setTimeout(()=>{
        let error = false
        if (!error) {
         resolve({userName : "ram" , id : 1})
        } else {
         reject('ERROR: Something went wrong') 
        }
     },2000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.userName
}).then((myUser)=>{  // chaining i.e. what above .then() return came inside .then() here 
    console.log(myUser); //ram
}).catch((error) => {
    console.log(error);
}).finally(()=>{     // excute weather our promise resolved or rejected
    console.log("The promise is either resolved or rejected");
})

/********************************************************************/

const promiseFive = new Promise((resolve , reject)=>{
    setTimeout(()=>{
       let error = true
       if (!error) {
        resolve({userName : "JS" , id : 1})
       } else {
        reject('ERROR: JS went wrong') 
       }
    },2000)
})


// async-wait => it waits sometime to complete task if completed then go further else GIVES error
//               eg => like we not want to move further if DATABASE connection is NOT establish


async function consumePromiseFive() {
 try {
    const response = await promiseFive
    console.log(response); // { userName: 'JS', id: 1 }
 } catch (error) {
    console.log(error); //ERROR: JS went wrong
 }
}

consumePromiseFive()

/********************************************************************/

// async function getAllUser () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')  // IT RETURNS Promise and TAKE url as parameter

//     const data = await response.json() // we getting data in String formate
// //                                    /* it take time to convert response to json, SO we also=o need to do await here
// //                                        otherwisgie it gives Promise { <pending> }  */                           
//     console.log(data);  
//   } catch (error) {
//      console.log('ERROR' , error);
//   }
// }
// getAllUser()

/************ABOVE CODE IN .then() AND .catch() format******************************/
 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

//https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we#:~:text=If%20you're%20coding%20both,map()%20%2C%20Promise.