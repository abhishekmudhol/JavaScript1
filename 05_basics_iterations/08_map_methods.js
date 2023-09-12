
/*************************map method *********************/

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const myNewNumbers = myNumbers.map( (num) => { return num = num + 10})

console.log(myNewNumbers);  //[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
                           
/********************************************************/

console.log(myNumbers); // [1,2,3,4,5,6,7,8,9,10]


/*
What is difference between filter and map in JS?

     The map method transforms each element of an array and creates a new array 
     with the transformed values,
    while the filter method creates a new array by
     selecting only the elements that satisfy a specified condition
 */

/**********************************************************/    

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.map((bk) => bk.genre == 'History')

console.log(userBooks); //[false, false, true, false, false, false,true,  false, false]
    
/**********************************************************/ 