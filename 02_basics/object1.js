
/*  
 * object can be declare in two ways
 *  1. as literals
 *  2. as constructor
 * 
 *   // singleton -> when we create object with constructor then
 *                   singleton object gets created
 * 
 * 
 * when we declare object with literal then it not a singleton 
 * 
 * 
 * 
 * diff between declare object using literal and constructor is of only singleton or not
 * 
 * Singleton is a design pattern that tells us that we can create only one instance of a 
 * class and that instance can be accessed globally. 
 * 
 * There are different ways to create new objects:
 *
 *           Create a single object, using an object literal.
 *           Create a single object, with the keyword new.
 *           Define an object constructor, and then create objects of the constructed type.
 *           Create an object using Object.create().
 */

//        OBJECT LITERALS

         const user ={}

//        OBJECT CONSTRUCTOR
  
         //Object.create()

        //  const person = {
        //     isHuman: false,
        //     printIntroduction: function () {
        //       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        //     },
        //   };
          
        //   const me = Object.create(person);
          
        //   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
        //   me.isHuman = true; // Inherited properties can be overwritten
          
        //   me.printIntroduction();
        //   // Expected output: "My name is Matthew. Am I human? true"
          

        const user_1 = {
            
            name : "ABHSIEHK",
            0 : "A",
            "id": 1 ,  // system process key like " " i.e. "id" but we usually wite without " " i.e. name
        }
        console.log(user_1.id);


        const  webUser = {

            name : "ABHISHEK",
            "database Name" : "mondoDB" , // space between database and Name
            age : 21,
            email : "abhishekmudholatwork.com", 
            lastLoggedIn : ["monday","sunday"],
            object1 :  {}
        }
/****************** 2 WAYS OF ACCESS OBJETS ***************/

     console.log(webUser.email);   // dot notation
     console.log(webUser["email"]); // squarebraket notation 

     // we cannot access database Name key using dot . we need [] squarebraket notation 
     
     // console.log(webUser.database Name);  -> not possible
        console.log(webUser["database Name"]);  //mongoDB

/**********************************************************/

  //           USING SYMBOL AS OBJECT KEY

  /**
   *  if you write symbol without [ ] in object declaration 
   * it show it as string i.e. typeof is string 
   * 
   */

const mysymbol = Symbol("key1") ;

const  webUser1 = {

    [mysymbol] : "myUniqueKeyOne" ,  
        
    name : "ABHISHEK",
    "database Name" : "mondoDB" , // space between database and Name
    age : 21,
    email : "abhishekmudholatwork.com", 
    lastLoggedIn : ["monday","sunday"],
    object1 :  {}
}
           
    //  console.log(webUser1.mysymbol); // myUniqueKeyOne but type is string not symbol
     
    //  console.log(typeof webUser1.mysymbol); // string
     
    console.log(webUser1[mysymbol]); // accessed like this without " "
    
    console.log(webUser1) //[Symbol(key1)]: 'myUniqueKeyOne'// see type is symbole there
/**********************************************************/
   
   //              MODIFYING VALUES IN OBJECT


     webUser1.email = "abhishekmudholatwork@gmail.com"

console.log(webUser1.email); //abhishekmudholatwork@gmail.com

/**********************************************************/

//            LOCKING VALUES OF OBJECT

   // Object.freeze(webUser1);  // commented because show error 

webUser1.age = 22 ;    
console.log(webUser1.age); // 21 not changed

/**********************************************************/

//            ADDING FUNCTION IN OBJECT

 webUser1.greeting = function() { console.log("Hello webUser1");}
    
           console.log(webUser1.greeting); // [Function (anonymous)]
           console.log(webUser1.greeting()); // Hello webUser1

        /**  this -> to refernce same object  **/

 webUser1.greetingWithUserName = function(){console.log(`Hello ${this.name}`);}          

           console.log(webUser1.greetingWithUserName); // [Function (anonymous)]
           console.log(webUser1.greetingWithUserName()); // Hello ABHISHEK

/**********************************************************/           