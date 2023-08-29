
//                      DATES
/*
JavaScript Date objects represent a single moment in time in a platform-independent 
format. Date objects encapsulate an integral number that represents milliseconds since
the midnight at the beginning of January 1, 1970, UTC 
 */

let myDate = new Date() // creating date's object or instant 

console.log(myDate); //2023-08-29T11:44:37.244Z

console.log(myDate.toString()) //Tue Aug 29 2023 17:26:21 GMT+0530 (India Standard Time)

console.log(myDate.toISOString());// 2023-08-29T11:59:34.736Z

console.log(myDate.toDateString());// Tue Aug 29 2023

console.log(myDate.toLocaleDateString());// 29/8/2023

console.log(myDate.toJSON());// 2023-08-29T11:59:34.736Z

console.log(myDate.toLocaleString());// 29/8/2023, 5:29:34 pm


/*******************************************************/


console.log(typeof myDate); // object


/*******************************************************/


const myCreatedDate  = new Date(2023, 0 , 28);

console.log(myCreatedDate); //2023-01-27T18:30:00.000Z 


console.log(myCreatedDate.toDateString()); //Sat Jan 28 2023

        /* months starts with 0 in js */


 /*******************************************************/


const myCreatedDate1  = new Date(2023, 0 , 28, 5, 59);

console.log(myCreatedDate1.toLocaleString()); //28/1/2023, 5:59:00 am


/*******************************************************/

const myCreatedDate2  = new Date("2023-01-28"); 

/* months starts with 1 when we give YYYY-MM-DD format */

console.log(myCreatedDate2.toLocaleString()); //28/1/2023, 5:30:00 am


/*******************************************************/

const myCreatedDate3  = new Date("01-14-2023"); 



console.log(myCreatedDate3.toLocaleString()); //14/1/2023, 12:00:00 am


/*******************************************************/


//                      TIMESTAMP


let timeStamp = Date.now() //Returns the number of milliseconds elapsed since midnight, 
                           // January 1, 1970 Universal Coordinated Time (UTC).
    
    console.log(timeStamp); // 1693323739867 (miliseconds)

    //                      OR

let timestamp = new Date().getTime();

    console.log(timestamp); // 1693323739867 (miliseconds)

    //                      OR
    
let timestamp2 = new Date().valueOf()

    console.log(timestamp2); // 1693323739867 (miliseconds)


const myCreatedDate4  = new Date("08-29-2023");

    console.log(myCreatedDate4.getTime());

/*******************************************************/

let valueInSecond = Math.floor(Date.now()/1000) 

     console.log(valueInSecond); // 1693324515


/*******************************************************/


let newDate = new Date();

   console.log(newDate); //2023-08-29T16:00:22.157Z
   console.log(newDate.getMonth() + 1); //8  (start from 0 so 7 for Auguest)
   console.log(newDate.getDay()); //2
   
//                  IMPORTANT

  let custamizeDate =  newDate.toLocaleString('default',{
                                            day:"2-digit",
                                            weekday:"long"
                                                        })

     console.log(custamizeDate); // Tuesday 29