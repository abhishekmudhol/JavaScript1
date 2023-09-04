
/***********************REST OPERATOR***********************/

// In case of shopping cart you don't known how many atom user is going to add
// NOTE -> ... also called rest operator as well as spread operator

function calculateCartPrice(...number1) {
    return number1
}
console.log(calculateCartPrice(200,400,800,1000)); //[ 200, 400, 800, 1000 ]

/*********************************************************/

function calculateCartPrice1(value1,value2,...number1) {
    return number1
}
console.log(calculateCartPrice1(200,400,800,1000)); //[ 800, 1000 ]

/******************PASSING OBJECT IN FUCTION************************/

const user ={
    userName : "ABHISHEK",
    price : 1000
}

function handleObject(anyObject) {
    
     console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);

}

handleObject(user) //username is ABHISHEK and price is 1000

     //OR

handleObject({
    userName : "abhishek",
    price : 1000
})


/*BUT what if in user object in place of price there is prices
then it give undefined in console.log so we have to chek
type safety that why we use typescript*/



/******************PASSING ARRAY IN FUCTION************************/


const newArray = [200,400,500,900]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(newArray)); // 400

console.log(returnSecondValue([200,400,500,700])); // 400

/*********************************************************/
