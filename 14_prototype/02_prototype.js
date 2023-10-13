// let myName = "Ram     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ram = function(){
    console.log(`ram is present in all objects`);
}

heroPower.ram() //ram is present in all objects
myHeros.ram()   //ram is present in all objects

Array.prototype.hareRam = function(){
    console.log(`ram `);
}

myHeros.hareRam()   //ram 
//heroPower.hareRam() //TypeError: heroPower.hareRam is not a function


/***************************inheritance******************************/

const User = {
    name: "js",
    email: "js@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // borrow all properties of TASupport
}

Teacher.__proto__ = User // Giving access of properties of User to Teacher

/************************** modern syntax*******************************/

Object.setPrototypeOf(TeachingSupport, Teacher)  // TeachingSupport accessing all properties of Teacher 


/************************************************************************/


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);  // ChaiAurCode  // becuz inside anotherUsername we have reference of ChaiAurCode
//                                ram        // becuz inside anotherUsername we have reference of ram
//                               iceTea      // becuz inside anotherUsername we have reference of iceTea  
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()  //11
"ram".trueLength()            //3 
"iceTea".trueLength()         //6 
