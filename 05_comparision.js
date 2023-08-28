// 2 > 1  
// 1 < 2
// 2 >= 1
// 2 <= 1
// 2 == 1
// 2 != 1


console.log("2" > 1); //true

console.log("02" > 1); //true

// before comparing values make sure there datatype is same or not

// typescript not allowed to compare two different datatype

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true  

/*
  the reason is that an equality check == and comparision <,>, >=,<=
  work differently
  
  camparision convert null to a number , treating it as 0.
  that's why (null >= is true) and (null > 0 is false)
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//strict check

 console.log("4"== 4);// true
 console.log("4"=== 4);// flase

 //SUMMARY =>  AVOID OPERATION LIKE ABOVE BECAUSE RESULT IS DIFFICULT TO PREDICT
 //            AND TRY TO WRITE CLEAN CODE