
/**********************forEach****************************/

const coding = ["js","ruby", "ruby","java","cpp"]

coding.forEach((value) => {      // no name for callback function 
      console.log(value);
})         
                    /*
                        js
                        ruby
                        ruby
                        java
                        cpp
                    */    
//               OR
//    coding.forEach(function (value) {     
//         console.log(value);
//    })


function printMe(item){
     console.log(item);
}

coding.forEach(printMe) // just give reference i.e. not printMe()

                    /*
                        js
                        ruby
                        ruby
                        java
                        cpp
                    */    

coding.forEach( (item, index , codingArray)=>{
        console.log(item , index , codingArray);
})

             // js 0 [ 'js', 'ruby', 'ruby', 'java', 'cpp' ]
             // ruby 1 [ 'js', 'ruby', 'ruby', 'java', 'cpp' ]
             // ruby 2 [ 'js', 'ruby', 'ruby', 'java', 'cpp' ]
             // java 3 [ 'js', 'ruby', 'ruby', 'java', 'cpp' ]
             // cpp 4 [ 'js', 'ruby', 'ruby', 'java', 'cpp' ]

/**********************************************************/             

 const details = [
    {
        id : 1,
        name : "Ram"
    },
    {
        id : 2,
        name : "Abhishek"
    },
    {
        id : 3,
        name : "sita"
    },
    {
        id : 4,
        name : "pooja"
    }]


    

details.forEach((element) => {
    console.log(element.id);
})

/**********************************************************/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
