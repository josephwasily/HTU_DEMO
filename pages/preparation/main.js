//importing a single function 
// import {power} from './math.js'

//import default exported function
import power from './math.js';
import apowermethod from './math.js';
//import as object 
 console.log(power(2,3));
 console.log(apowermethod(2,2));

//import named exported function, classes, objects
import {sum, User} from './math.js';
console.log(sum(1,2));

import * as Math from './math.js'; 
Math.power(1,2);

//import object
Math.obj.greet();

var joseph = new User('joseph', 30);
console.log(joseph.name);


import {User as Person} from './math.js';
var joseph2 = new Person('joseph', 30);
console.log(joseph2);