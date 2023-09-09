/*               RESOANS OF HAVING IIFE

    1.when we write file for database connection we want to start
       database connection function immediately inside that file  

    2. not having polution from global scope 

*/


// WE USE IIFE TO REMOVE POLLUTION OF GLOBAL SCOPE VARIABLES 


(function db() {
    // named IIFE
    console.log(`DB CONNECTED`);
})() ;  // ; -> TO STOP CONTEXT i.e. END CODE , IF WE NOT USED ;(semicolan) ERROR OCCURS

// db()


(function db2(){
     // named IIFE
     console.log(`DB TWO CONNECTED`);
})();


(() => {
    console.log(`DB CONNECTED ARROW FUNCTION`);
})();


((funcName) => {
    console.log(`DB CONNECTED ${funcName}`);
})('ARROW FUNCTION')