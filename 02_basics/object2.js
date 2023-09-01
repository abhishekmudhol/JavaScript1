//                   OBJECT DECLARATION

const appuser = new Object();   //singleton object

const  webuser = {}         // Non singleton object

console.log(webuser); //{}
console.log(appuser); //{}

/**********************************************************/


webuser.id = "9322a"
webuser.name = "ABHSIEHK"
webuser.isLoggedIn = true
webuser.loggedInDays =["monday","sunday"]

console.log(webuser);  /*{
                           id: '9322a',
                           name: 'ABHSIEHK',
                           isLoggedIn: true,
                           loggedInDays: [ 'monday', 'sunday' ]
                         } */

/**********************************************************/

//       OBJECT INSIDE OBJECT (NEXTED OBJECT)

const newUser = {

         email : "abhishekmudholatwork@gamil.com",    
         fullName : {
                 userFullName : {
                      Uname : "ABHISHEK"
                 }
         }

}

  console.log(newUser.fullName.userFullName.Uname); // ABHISHEK

/**********************************************************/

  //            COMBINNING OBJECT (using assign())

     const object1 = {1: "a", 2: "b"}
     const object2 = {3: "a", 4: "b"}
     const object5 = {5: "a", 6: "b"}

const object3 = { object1 , object2}

const object4 = Object.assign({}, object1,object2,object5)  //Copy the values of all of the enumerable own properties from one or more
                                                //source objects to a target object. Returns the target object.

    /* {} is optinal parameter but good practice to give and assure us that it will return object 
           use full when more than 2 object is combine then {} act as target and remaining i.e. object1,object2 ....so on 
    */

console.log(object3); //{ object1: { '1': 'a', '2': 'b' }, object2: { '3': 'a', '4': 'b' } }

console.log(object4); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/**********************************************************/
 //         IMPORTANT REMAINBER

   const object8 = Object.assign(object1,object2,object5)

   console.log(object1); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

    // here we not used {} hence target become object1 and 

    console.log(object8 === object1 ); //true 

/**********************************************************/

 //            COMBINNING OBJECT (using spread operator)


   const objectCombine = { ...object1,...object2, ...object5}

   console.log(objectCombine); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

/**********************************************************/

//       OBJECT INSIDE A ARRAY WHEN (VALUES GET FROM DATABASE)

       const user =[
            {id: 1},
            {id: 2}
       ]

      console.log(user[0].id); //1

/**********************************************************/ 
//            METHODS

console.log(webuser);  /*{
                            id: '9322a',
                            name: 'ABHSIEHK',
                            isLoggedIn: true,
                            loggedInDays: [ 'monday', 'sunday' ]
                          } */

console.log(Object.keys(webuser)); // we got a Array -> [ 'id', 'name', 'isLoggedIn', 'loggedInDays' ]

console.log(Object.values(webuser)); // [ '9322a', 'ABHSIEHK', true, [ 'monday', 'sunday' ] ]

console.log(Object.entries(webuser)); /* [
                                           [ 'id', '9322a' ],
                                           [ 'name', 'ABHSIEHK' ],
                                           [ 'isLoggedIn', true ],
                                           [ 'loggedInDays', [ 'monday', 'sunday' ] ]
                                         ]
                                       */

 console.log(webuser.hasOwnProperty("name")); //true


// For more methods see broswer console (prototype)
