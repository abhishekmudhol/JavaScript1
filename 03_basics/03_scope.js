
/*********************SCOPE******************************/

  //  {} => it is a scope (DO NOT miss understant it with object)


    if (true) {
        let a = 20
        const b = 100
        var c = 80  
    }

    //console.log(a); // error
    //console.log(b);  // error
    console.log(c);  // 80 -> here scope gets viotes 
                     // SOLUTION -> use let instead var

/*
if any programer declared some varible using var but if 
program import some file which have method and inside that
method there is varible with same name then also scope gets violets
        
     var c = 88 

    if (true) {
        let a = 20          => if get imported form other file assume that
        const b = 100
        var c = 80       //OR c = 80 
    }
         console.log(c);  // 80
*/


/******************LOCAL AND GLOBAL SCOPE**********************/

 
   let a = 100    // global scope

   if (true) {
      let b = 400  // local scope
      console.log("INNER B",b);

      let a = 200
      console.log("INNER A",a); //200
   }

    console.log("OUTER A",a); // 100

    let b = 223
    console.log("OUTER B",b); // 233

// b is first declared in local scope


/********************************************************/


// IMPORTANT => GLOBAL SCOPE in node.js and browser are differnt

    // see note in commit