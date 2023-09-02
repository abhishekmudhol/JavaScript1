/*********************OBJECT DE-STRUCTERING***************************/
const course = {
    courseName : "js",
    prize : "999",
    courseInstructor : "javascript"
}

     course.courseInstructor
      
   /*
    * above way to extract values from object is ok but we have to
    * write it again and again if we want for example courseInstructor 
    * multiple times hence for clean code we have syntax which is given below
    */

     const {courseInstructor} = course   // *****

        console.log(courseInstructor); // javascript

//                OR

    const {courseInstructor : instructor} = course

         console.log(instructor);  // javascript

/**********************************************************/          

  //              JSON

    //  {
    //     "name" : "ABHISHEK",
    //     "id"   : 1
    //  }
 
//               data we get from some API
    
      [ {},{},{},{}]

   //   ONLINE TOOL -> jason formatter
/**********************************************************/



































































