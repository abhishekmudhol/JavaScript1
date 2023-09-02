
/********************************************************/

function myName (){};
const myName1 = function () {}; // anonimous fuction

/********************************************************/

function Myname() {
       console.log("A");
       console.log("B");
       console.log("H");
       console.log("I");
       console.log("S");
       console.log("H");
       console.log("E");
       console.log("K");
}
  Myname     // reference 
  Myname()   // execution

/********************************************************/

   function ADD (number1 , number2){  // parameter
      
         const result = number1 + number2 ;
         return  result // if not return then show undefined
         console.log("add fuction"); // not rechable 
   }
       
       // ADD(4,4) ->  we not printed return value
const result = ADD(4,4) //argument

  console.log(result); // 8
    
                //const z = 5
         // const result1 = ADD(4,"4")
         // const result2 = ADD(4,'a')
         // const result3 = ADD(4,null)
         // const result4 = ADD(4,z)

            /* IN ABOVE CASE CHECKING IS REQUIRED */

/********************************************************/
       
            //  ASSIGN FUCTION TO VARIABLE


    const addFunction = function ADD (number1 , number2){ 
      
                                            const result = number1 + number2 ;
                                            return  result 
                                      }

               const showResult = addFunction(4,4)                         
               console.log(showResult); // 8

/********************************************************/

  function userLoggedIn (username){

        return `${username} logged in on website`
  }

     console.log(userLoggedIn("abhishek")); //abhishek logged in on websit
     console.log(userLoggedIn(" "));       //  logged in on website 
     
     /* IMPORTANT */
     console.log(userLoggedIn( )); // undefined logged in on website

   //  when we pass nothing like above it consider as undefined

                //    const addFunction1 = function ADD (number1 , number2){ 

                //        return number1 + number2 // NAN
                //        return number1 // undefined
                //     }
                                         
                //     console.log(addFunction1( ) ); 

/********************************************************/

    //     SOLUTION 1 OF ABOVE CASE


    function userLoggedIn1 (username){
         
        if ( username === undefined) { // if (!username)   -> in js undefined is consider as falsy value
              
            console.log("please Enter valid name");
            return 
        }
        return `${username} logged in on website`
  }

     console.log(userLoggedIn1( )); 

/********************************************************/
 
     //     SOLUTION 2 OF ABOVE CASE (Givingde a fault value )

     function userLoggedIn2 (username = "RAM"){  // now if block like above not required because never excutes

        return `${username} logged in on website`
  }

     console.log(userLoggedIn2()) //RAM logged in on website
     console.log(userLoggedIn2("ABHISHEK")) // ABHISHEK logged in on website
          /* default value got override */





























































