



class User {

    constructor(username,password){
        this.username = username
        this.password = password
    }

      passwordEncryption(){
        return `${this.password}abcd`
      }

      changeUserName(){
        return `${this.username.toUpperCase()}`
      }
}

const Ram = new User("siyaRam",'hanuman')

console.log(Ram.passwordEncryption())  //hanumanabcd
console.log(Ram.changeUserName())      //SIYARAM


//WHAT HAPPENS BEHIND THE SENCE 

function newUser(username,password) {
    this.username = username
    this.password = password
}

newUser.prototype.passwordEncryption = function(){
    return `${this.password}abcd`
  }

  newUser.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
  }

  const Travel = new newUser("Abhishek",'hanuman')

  console.log(Travel.passwordEncryption())  //hanumanabcd
  console.log(Travel.changeUserName())      //ABHISHEK