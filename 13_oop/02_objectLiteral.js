const user = {
    username: "Ram",
    loginCount: 8,
    signedIn : true,

    getUserDetails : function () {
       //console.log("Got user details from database");
       //console.log(`Username: ${username}`);      // error
       //console.log(`Username: ${this.username}`); // Username: Ram
        console.log(this); /* {
                              username: 'Ram',
                              loginCount: 8,
                              signedIn: true,
                              getUserDetails: [Function: getUserDetails]
                            }*/
    }
}

console.log(user.username);
console.log(user.getUserDetails());


console.log(this); // {}  // here in Global Context in Node environment
//                           BUT IN BROWSER IT gives Window Object


const user2 = {
    username: "js",
    loginCount: 8,
    signedIn : true,

    getUserDetails : function () {
       //console.log("Got user details from database");
       //console.log(`Username: ${username}`);      // error
       //console.log(`Username: ${this.username}`); // Username: Ram
        console.log(this); /* {
                              username: 'Ram',
                              loginCount: 8,
                              signedIn: true,
                              getUserDetails: [Function: getUserDetails]
                            }*/
    }
}
/* here we need to write whole code to create user2
   BUT using Constructor function it can be Avoided */