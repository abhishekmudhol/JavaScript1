const name = "ABHISHEK"
const age = 21 

console.log(name + age + " Value" );
 //           OR
 console.log(`${name} ${age} Value`);  // string interpollation

/******************string declaration*******************/

   const gameName_1 = "cricket"
   const gameName_2 = new String("javlin")

   //we can declare string in both ways
   // but in second way i.e(.gameName_2) if we see on browser we can various method in prototype
   // we can access key-value pair of string 


/******************string keyaccessing *****************/

     console.log(gameName_2[0]); //j

 /*****************accessing prototype*****************/
     console.log(gameName_2.__proto__); //{} -> it is not acually empty we can see it in browser console

/*******************************************************/

 // we can use all this method without writing __proto__

  console.log(gameName_2.length);//6
  console.log(gameName_1.length);//7

 console.log(gameName_1.toUpperCase());//CRICKET
 console.log(gameName_1); //cricket
// i.e. original string not get change (cricket)

console.log(gameName_2.toUpperCase());
console.log(gameName_2.charAt(1));//a
console.log(gameName_2.indexOf('a'));//1

//go through all methods 

/*******************************************************/

const game = new String("javlin-throw")

console.log(game.length);

const newGame = game.substring(0,4) //(inclusive , exclusive)
                      
console.log(newGame);//javl

const newGame_1 = game.slice(-9,-4)//we can give -ve value here string get reverse

console.log(newGame_1);//lin-t

/*******************************************************/
//                    trim()                       

const newString = "     ABHSIHEK   "
console.log(newString);
console.log(newString.trim());  //ABHSIHEK


const url ="https://abhishek.com/abhishek%21mudhol"//abhishek mudhol -> abhishek%21mudhol

   console.log(url.replace('%21','-')); // https://abhishek.com/abhishek-mudhol
   
   console.log(url.includes('abhishek')); //true
/*******************************************************/

//                   split()


const ArrayString = game.split('-')

const ArrayString_2 = game.split('');

const ArrayString_3 = game.split();

const ArrayString_4 = game.split('v');

console.log(ArrayString); // [ 'javlin', 'throw' ]
console.log(ArrayString_2);   /* [
                                 'j', 'a', 'v', 'l',
                                 'i', 'n', '-', 't',
                                 'h', 'r', 'o', 'w'
                               ]  
                              */
console.log(ArrayString_3); //[ 'javlin-throw' ]
console.log(ArrayString_4); //[ 'ja', 'lin-throw' ]







/*  
1.substring()  // not able to use -ve value not obey and start from 0

     SYNTAX
substring(indexStart)
substring(indexStart, indexEnd)

2.slice()

findexStart < 0, the index is counted from the end of the string. 
More formally, in this case, the substring starts at max(indexStart + str.length, 0).

The slice() method of String values extracts a section of this string 
and returns it as a new string, without modifying the original string.

Differences between substring() and slice()

The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that 
a string is still returned. The slice() method returns an empty string if this is the case.
 */
