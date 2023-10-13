


function setUserName(username) {
     //  complex DB calls here
    this.username = username
    console.log("called");
}

function createUser(username , id , email , password) {
    setUserName.call(this , username) // we passing this i.e. context , as every func has it's own this 
    //                               // call here passing current excution context to other function 

    this.id = id
    this.email = email
    this.password = password 
}

const Ram = new createUser("ram",1,"A@gmail.com" , "abhishek")
console.log(Ram); //{ id: 1, email: 'A@gmail.com', password: 'abhishek' } // NOT HAVING username BECUZ setUserName() IS NOT CALLED FOR A createUser()
//                                                                                                      WE NEED call KEYWORD TO DO THAT



/**
 * call =>  we are using it to hold reference of the function which excution context is got removing from call stack after it's excution completed becuz all membner of that function got removed from memeory
 */