
const marvel = ["thor","spiderman"]
const dc = ["superman","batman"]

//marvel.push(dc);

// console.log(marvel); //[ 'thor', 'spiderman', [ 'superman', 'batman' ] ]

// console.log(marvel[2]); // [ 'superman', 'batman' ]
// console.log(marvel[2][0]);// superman


// console.log(marvel[2][8]);//undefined
// console.log(marvel[8]); //undefined

/*********************************************************/

const marvelconcat = marvel.concat(dc); //This method returns a new array without
                                        // modifying any existing arrays.

                                        
console.log(marvelconcat); //[ 'thor', 'spiderman', 'superman', 'batman' ]
// first comment above push then run

//push() work on existing array i.e. original array but concat() returns new array instead of modifing existing one
/*********************************************************/


//                 SPREAD OPERATOR

const all_character = [...marvel,...dc]

console.log(all_character); // [ 'thor', 'spiderman', 'superman', 'batman' ]

/*********************************************************/

const arrayNexted = [1,2,3,4,[5,6,7,8],9,[1,2,3,4,[5,6,7,8]]]

flatArray = arrayNexted.flat(Infinity)

console.log(flatArray); //  [1, 2, 3, 4, 5, 6, 7,8, 9, 1, 2, 3, 4, 5,6, 7, 8]


/*********************************************************/


console.log(Array.isArray("ABHISHEK")); //false
console.log(Array.from("ABHISHEK"));  //[ 'A', 'B', 'H', 'I', 'S', 'H', 'E', 'K' ]

//      IMPORTANT

console.log(Array.from({name:"ABHISHEK"})); //[]

/*********************************************************/

  //  Array.of
  // Returns a new array from a set of elements. 

  let score1 = 100;
  let score2 = 200;

 console.log(Array.of(score1,score2)); // [ 100, 200 ]

 /*********************************************************/

/*
 *  push (array in a array)
 * concat()
 * spread operator ...
 * flat()
 * Array.isArray()
 * Array.from()
 * Array.of()
 */