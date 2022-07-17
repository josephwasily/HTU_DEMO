//import default export in math module / namespace / file
import powerFunc from "./math.js";

console.log(powerFunc(2,2 ));
x = 1;
//import named exports in math module 
import { x as Obj1} from "./math.js";
// var joseph = new User(Obj2.name);
// console.log(joseph);

//import all namespace with wildcard * 
import * as Math from "./math.js";
console.log(Math.x);