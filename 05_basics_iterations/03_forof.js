
/************************for-of***************************/

// ["","","",""]
// [{},{},{},{}]


const arr = [1,2,3,4,5]

for (const nums of arr) {
    console.log(nums);   
}

/******************************************************/

const st = "ABHISHEK MUDHOL"

for (const ch of st) {
    console.log(`Each char is ${ch}`);
}

/**************************MAPS*************************/

/*
 The Map object holds key-value pairs 
 Map objects are collections of key-value pairs.
 A keys in the Map may only occur once; it is unique in the Map's collection.
 remembers the original insertion order of the keys
*/


const map = new Map()

    map.set('IN' , "India")
    map.set('fr' , "France")
    map.set('NZ' , "New Zealand")
    map.set('CH' , "switzerland")
    map.set('IN' , "India") //  Not Added becuz duplicate entry
    
 console.log(map);  /*
                      Map(4) {
                               'IN' => 'India',
                               'fr' => 'France',
                               'NZ' => 'New Zealand',
                               'CH' => 'switzerland'
                             }
                     */

    for (const key of map) {
         console.log(key);     
    }
                       /*
                        [ 'IN', 'India' ]
                        [ 'fr', 'France' ]
                        [ 'NZ', 'New Zealand' ]
                        [ 'CH', 'switzerland' ]
                       */

    for (const [key , value] of map) {
           console.log(`${key} :- ${value}`);     
    }
                        //   IN :- India
                        //   fr :- France
                        //   NZ :- New Zealand
                        //   CH :- switzerland

/********************IMPORTANT****************************/

        const myObject = {
            game1: 'NFS',
            game2: 'Spiderman'
        }
        
        for (const [key, value] of myObject) {
            console.log(key, ':-', value);     //TypeError: myObject is not iterable
            
        }
/******************************************************/


// IMPORTANT :-> for-of NOT WORKS WITH A OBJECTS 