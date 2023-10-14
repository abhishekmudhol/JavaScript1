console.log(Math.PI); //3.141592653589793
Math.PI = 5
console.log(Math.PI); //3.141592653589793  => Math.PI value cannot be modified

/* HOW TO CHANGE IT*/

const discripter = Object.getOwnPropertyDescriptor(Math,"PI") //getOwnPropertyDescriptor give access to hidden properties

console.log(discripter);   /*{
                               value: 3.141592653589793,
                               writable: false,
                               enumerable: false,
                               configurable: false
                             } */

/************************************************************************************************/

const User = {
    name : "Abhishek",
    id : 1,
    isLoggedIn:true,
    func : function(){console.log("function");}
}

console.log(Object.getOwnPropertyDescriptor(User)); // undefined => it is get property Descriptor and User is Object hence it is giving undefined 

const Userdiscripter = Object.getOwnPropertyDescriptor(User , "name")

console.log(Userdiscripter);  /*{
                                   value: 'Abhishek',
                                   writable: true,
                                   enumerable: true,
                                   configurable: true
                                 }*/


for (const [key , value] of Object.entries(User)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`); /* name:Abhishek
                                           id:1
                                           isLoggedIn:true */
    }
}


Object.defineProperty (User , "name", {
    writable: false,
    enumerable: false,
})

const Userdiscripter1 = Object.getOwnPropertyDescriptor(User , "name")
console.log(Userdiscripter1); /*{
                                 value: 'Abhishek',
                                 writable: false,
                                 enumerable: false,
                                 configurable: true
                               }*/

for (const [key , value] of Object.entries(User)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`); /* //name property is not printing due to enumerable: false
                                           id:1
                                           isLoggedIn:true */
    }
}