/************************FOR-IN**************************/


const myObject = {
    
    js : 'javascript',
    cpp : 'cpp',
    rb : "ruby",
    swift : 'swift by apple'
}

for (const key in myObject) {
    console.log(key);
}
                // js
                // cpp
                // rb
                // swift

 for (const key in myObject) {
        console.log(myObject[key]);
 }
                //  javascript
                //  cpp
                //  ruby
                //  swift by apple

for (const key in myObject) {
        console.log(` ${key} shortcut is for ${myObject[key]}`);
 }
                //  js shortcut is for javascript
                //  cpp shortcut is for cpp
                //  rb shortcut is for ruby
                //  swift shortcut is for swift by apple
 

/************************FOR-IN for array**************************/
                
   const programming = ["js", "rb", "py", "java", "cpp"]

   for (const key in programming) {
    console.log(key); // in for-of loop it directly gets values in key
}
                // 0
                // 1
                // 2
                // 3
                // 4

for (const key in programming) {
    console.log(programming[key]);
}
  
                // js
                // rb
                // py
                // java
                // cpp

/************************FOR-IN for maps**************************/

  const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);      // NOTHING PRINTED
}



// NOTHING PRINTED
// Reason :-> map is not iteratale henece not printing anythings


/*
     An enumerable property in JavaScript means that a property can be 
     viewed if it is iterated using the for…in loop or Object. keys() method. 
     
     for...in iterates over enumerable properties of an object. The keys in a 
     map are not enumerable properties (though a map, like all objects, can have
     enumerable properties). For one thing, they can be of any type, not just strings,
     as with JavaScript objects, which have historically stood in for maps.     
 */


     
/**********************************************************/