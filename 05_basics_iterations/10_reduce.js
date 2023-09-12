/*****************************reduce()**********************/

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial);
// Expected output: 10
/***********************************************************/

const myNums = [1,2,3]

const Total = myNums.reduce(function (acc , currval) {
        console.log(`acc: ${acc} and currval: ${currval}`); //  acc: 0 and currval: 1   
        return acc + currval;                               //  acc: 1 and currval: 2
},0)                                                        //  acc: 3 and currval: 3

console.log(Total); // 6
 
//accumulator is just a variable whose value we can initials 
// it nothing to do with array index 

/***********************************************************/
//                              OR
 
   // const TotalUsingArrowFunc = myNums.reduce( () => {},intialvalue)

//  intialvalue can be anything i.e. 0 or 1 or 2 or 3 or 4 so on....

/***********************************************************/

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

//   add all prices in shoping cart

const priceTotal = shoppingCart.reduce( (acc , item) => {
                return acc + item.price
},0)

 console.log(priceTotal);   // 22996