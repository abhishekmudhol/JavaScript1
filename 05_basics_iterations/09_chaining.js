/***************************chaining**********************/
  

const newNums = myNumbers
                       .map( (num) => {return num*10})
                       .map( (num) => { return num + 1}) 
                       .filter( (num) => { return num >= 40})   // In filter num who will satisfy will be return  
                                                     // IMPORTANT -> result of first chain will go to second and so on....
                                                        // HERE in second chain i.e. second map num will be 10 , 20 , 30 , 40....so on
   
    console.log(newNums);   // [ 41, 51,  61, 71, 81, 91, 101 ]
