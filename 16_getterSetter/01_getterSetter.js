//The use of an underscore prefix (e.g., _password) is a common convention in JavaScript to indicate 
//that a property is intended to be private and not accessed directly from outside the class

class User {
     constructor(email,password){
        this.email = email
        this.password = password
     } 
     
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value 
    }

    get password(){
        return `${this._password}Ram`
    }

    set password(value){
        this._password = value
    }
}

const Abhishek = new User("A@gmail.com","abcd")
   console.log(Abhishek);       //User { _email: 'A@gmail.com', _password: 'abcd' }
   console.log(Abhishek.password); //A@GMAIL.COM
   

/*
User Class Definition:

The User class is defined with a constructor that takes two parameters: email and password.
Inside the constructor, the properties this.email and this.password are initialized with the values passed as arguments.
Getter and Setter for email Property:

The get email() method defines a getter for the email property. It returns the _email property in uppercase.
The set email(value) method defines a setter for the email property. It assigns the value to the _email property.
Getter and Setter for password Property:

The get password() method defines a getter for the password property. It returns the _password property with "Ram" appended to it.
The set password(value) method defines a setter for the password property. It assigns the value to the _password property.
Creating an Instance:

You create an instance of the User class called Abhishek with the email "A@gmail.com" and password "abcd."
Logging Abhishek Instance:

console.log(Abhishek) logs the Abhishek instance to the console. The output displays the object properties as _email and _password because the getters and setters are used to access and modify the underlying properties.
Logging Abhishek.password:

console.log(Abhishek.password) accesses the password property using the getter, which returns the _password property with "Ram" appended to it. The output is "abcdRam."
*//*
So, the class User uses getters and setters to manipulate the behavior of the email and password properties, while the underlying data is stored in _email and _password. 
The use of getters allows for custom formatting of the property values when they are retrieved, and setters enable validation or custom processing when the properties are set.
*/