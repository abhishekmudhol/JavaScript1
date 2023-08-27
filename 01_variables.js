  console.log("declaratiom"); 

 // const , Let and var
  const accountID = 9322;       // using const
  let  accountEmail = "abhishekmudholatwork@gamil.com" //using let
  var accountCity = 'pune' // using var
    accountLogged = true   // without using let or var
  let accountState;       //just declared value not assigned
    
  console.log("modification"); 

  // accountID = 8217 ->  error beacause of const (not allowed to modify)
  accountEmail = "abhi@gmail.com"
  accountCity  = "vadgaon "
  accountLogged = false

  //   let vs var
/*
  -> constant can be decleared by only ONE way using (const)
  -> variable can be decleared by TWO ways using (let , var)
  
->   SCOPE PROBLEM was there in javascript
        {
              // problem solved by let 
        }
         
  -> var does not obey a scope 
  -> USE let INSTEND OF var BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE

      ( ; not matter you put it or not in javascript)
*/
console.log(accountState);  // GIVES undefined
console.table([accountID,accountEmail,accountCity,accountLogged,accountState]);




