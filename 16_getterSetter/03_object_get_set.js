
const User = {
    _email:'a@gmail.com',
    _password:"abcd",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
} 

const ram = Object.create(User) // we have to pass an object base on which it will create FUNCTION which create object base on User and refered it inside ram // by Default it is null
 console.log(ram.email); // A@GMAIL.COM



 
// factor function      => Object.create()
// constructor function => new

// when we use word get OR set then the meaning of _ i.e. underscore is NOT as USUAL
// ACTUALLY getter AND setter are methods which are kept on top of properties 