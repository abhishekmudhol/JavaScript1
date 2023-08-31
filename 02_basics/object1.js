
/*  
 * object can be declare in two ways
 *  1. as literals
 * 2. as constructor
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











        