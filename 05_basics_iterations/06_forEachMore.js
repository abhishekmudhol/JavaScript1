/*************************RETURN IN forEach loop***********/


const moreCoding = ["js", "ruby", "java", "python", "cpp"]


const values = moreCoding.forEach( (item) => {
    //console.log(item);
    return item
} )

console.log(values);  // undefined

// IMPORTANT => forEach loop DOES NOT RETURN ANYTHING


//  WE CAN USE filter() TO RETURN VALUES

/**********************************************************/
