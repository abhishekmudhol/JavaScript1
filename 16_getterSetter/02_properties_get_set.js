//defining getter AND setter through properties (old syntax)


function User(email , password) 
{
    this._email = email
    this._password=password

    Object.defineProperty(this , 'email' , {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this , 'password' , {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const ram = new User("A@gmail.com" , "abcd")
   console.log(ram.email);  // A@GMAIL.COM


/*Inside the User function, properties with underscores (_email and _password) 
are set to the values provided as arguments to the constructor. These properties are 
intended to store the email and password for each user object. The use of underscores 
as a naming convention suggests that these properties are intended to be private or for internal use.*/
