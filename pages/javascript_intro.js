console.log("hello from script tag");
console.log("hello from script tag");
console.log("hello from script tag");

//primitive types
// var x = 1;
// var z = x;
// x = 3;
// console.log(z);

//number
var x = 1;
var z = 1.5;
console.log(typeof x);
console.log(typeof z);
console.log(z > x);
console.log(z < x);
console.log(z > x && true);
console.log(z - x * x);
console.log(true - 1);

x -= 25;
console.log(x);
//PEMDAS
console.log("############");
//bolean
var isStudent = false;
console.log(typeof isStudent);
var isAthelete = true;

console.log(isStudent && isAthelete);
console.log(isStudent || isAthelete);

//string
var studentName = "Joseph";
console.log(studentName);
console.log(studentName + " botros");
console.log(studentName.indexOf("J"));
console.log(studentName.charAt(5));
console.log(studentName.replace("ph", "f"));
studentName = studentName.replace("ph", "f");
console.log(studentName);

var secondStudentName = studentName;
studentName = "NotJoseph";
console.log(secondStudentName);

// var x = {
//     name: 'joseph'
// };
// z = x;
// x.name = 'ahmad';
// console.log(z);

var variableName;
console.log(typeof variableName);

var dateNow = new Date();
console.log(dateNow);
console.log(typeof dateNow);

//dynamically typed

var dynamicVariable = "hello";
console.log(dynamicVariable.charAt(1));
console.log(typeof dynamicVariable);
dynamicVariable = 1;
console.log(typeof dynamicVariable);
//dynamicVariable.charAt(1);

console.log("test");

var x = 1;
var z = "test";
var y = z;
z = 4;

var student = {
  name: "joseph",
};

var student2 = student;
student.name = "ahmad";
console.log(student2);
//stack -> primitive data + reference for heap
//'test' '4'  - 1123124

//heap -> objects memory
// 1123124 = {}
var newVar = "hello from outside";
var newVar = 23;
let var2 = "asdasd";
if (newVar != null) {
  var newVar = "hello from inside";
  let var2 = 1;
}
console.log(var2);

const constantVariable = 1;
if (constantVariable != null) {
  const constantVariable = "hello from inside";
}
console.log(constantVariable);
// constantVariable = 2;

// console.log('line after error');

let newVar2 = 123;
newVar2 = "asdajsd";

{
  let newVar2 = "12312";
  console.log(newVar2);
}

let number = 1 <= 0;

//fall back

let firstVariable = null;
let thirdVarible = "third";
let secondVariable = firstVariable || thirdVarible || "hello";

// var variables = false || function1()  || anotherfunction();

console.log(secondVariable);

console.log(0 && true);

// let name2 = firstVariable ?? jquery ?? 'ahmad';
// console.log(name2);

//condition flow
if (x == "hello" && z > 1) {
  //if true
  //statements
  let x = 1;
} else if (x) {
} else {
}

let number2 = 0;
while (number2 <= 12) {
  console.log(number2);
  number2 += 2;
}

// do {
//    console.log(yourName);
//    var yourName = prompt('Enter your name');
// }
// while(!yourName);
console.log(yourName);
var yourName = 1;

//for loop
for (let number2 = 0; number2 <= 12; number2 += 2) {
    if(number2 % 7 == 0){
        break;
    }
  console.log(number2);
}

// var weather = prompt("enter your weather");

// if(weather ==  'sunny'){
//     console.log('wear t-shirts');
// }
// else if(weather == 'raining'){
//     console.log('bring umbrella')
// }
let weather = 'sunny';
switch (weather) {
    case "sunny":
        console.log("wear t-shirts");
        break;
    case "running":
        console.log('bring umbrella');
        break;
    default: 
        console.log('unknown weather, be careful');
}

x = 15;
var value2 = (x>1) ? 'x is greater than 1' : (x==1)? 'x is equal to 1 ': 'x is smaller than one';
console.log(value2);

if(x > 1){
    value2 = 'x is greater than 1';
}
else if(x == 1){
    value2 = 'x is equal to 1 ';
}
else {
    value2 = 'x is smaller than one';
}

console.log(value2);
var value3 = 14;
var isNumberEven = (value3 % 2 == 0) ? true : false;

let halfFive = halve(5);
console.log(halfFive);

function halve(n){
    return n/2;
}

function greet(){
    console.log('hello');
}
greet();


// var square = function(n){
//     return n*n*n;
// }
// if(x>1){
//     var square = function(n){
//         return n*n;
//     }    
// }
// square(2);

const square = x => x*x;
// function square(x){
//     return x*x;
// }

//arrow function 
// const square = x => x*x;

greet();

function func1 (){
    console.log('func1');
    func2();
    console.log('continue function 1');

}
function func2 (){
    console.log('func2');
    func3();
    console.log('continue function 2');
    
}

function func3 (){
    console.log('func3');
    greet();
    console.log('continue function 3');
}

func1();

// function fibonnaci(n){
//     if(n<=1) return n;
//     return fibonnaci(n-1) + fibonnaci(n-2);
// }
// console.log(fibonnaci(10));

// function factorial(n){
//     if(n == 1) return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

var template = `
hello ${value3}
`

console.log(template);  

let name = 'joseph';
function getName(){
  return 'joseph';
}
let string1 = `<Hello world, My Name is > 
${getName()} 
my age is ${30}
`;
let string2  = '<div>'+ name+'</div>'
console.log(string1);


var a = 1;
let b = 2;
const c = 3;

console.log(`global a ${a}`);
console.log(`global b ${b}`);
console.log(`global c ${c}`);

function myFunc(){
    
  var a = 10;
  let b = 20;
  const c = 15;
console.log(`function a ${a}`);
console.log(`function b ${b}`);
console.log(`function c ${c}`);

{
  let b = 5;
  console.log(`local scope a ${a}`);
  console.log(`local scope b ${b}`);
  console.log(`local scope c ${c}`);
  {
    var a = 12;
  }
}
console.log(`function a again ${a}`);
}
myFunc();
console.log(`global a again ${a}`);

//###########################

//Arrays

const myArray = [1,2,3];
// console.log(typeof myArray);
console.log(myArray[myArray.length-1]);
myArray[0] = 'Joseph';
myArray[1] = true;
console.log(myArray.length);
myArray[myArray.length] = 'Hello';
console.log(myArray);
myArray.push(1);
console.log(myArray);
myArray.push(3,4,5);
console.log(myArray);
console.log(myArray.pop());
console.log(myArray.pop());
console.log(myArray.pop());
console.log(myArray.length);

myArray.unshift(1,2,3);
console.log(myArray);
console.log(myArray.shift());
console.log(myArray.shift());
console.log(myArray.shift());

//remove element from array

console.log(myArray);

// delete myArray[0];
// console.log(myArray);

// console.log(myArray.splice(3, 1));
// console.log(myArray);

console.log(myArray.splice(3, 1,'new','element'));
console.log(myArray);


//slicing array 

console.log(myArray.slice(1,3));
console.log(myArray);

myArray.reverse();
console.log(myArray);

console.log(myArray.join());
let arrayStr = myArray.join();
console.log(arrayStr.split(','));

//concating arrays

let myArr1 = [1,2,3];
let myArr2 = [3,4,5,6];

let myArr3 = myArr1.concat(myArr2);
console.log(myArr3);
console.log(myArr1);
console.log(myArr2);

let myArr4 = [...myArr1, ...myArr2];
console.log(myArr4, 'my array 4');

//testing reference type

let myArr5 = [...myArr1];
console.log(myArr5 == myArr1);
myArr1[0] = 'Joseph';
console.log(myArr5 == myArr1);
console.log(myArr5);

//nesting arrays

let myArr6 = [myArr1,myArr2, myArr3];
console.log(myArr6);
console.log('###############################')
//for loop
for(let i=0; i<myArr6.length; i++){
  for(let j=0; j< myArr6[i].length; j++ )
  {
    console.log(myArr6[i][j]);
  }
}

//function as parameter (high order function)

function myFunc2(greetFunc){
  greetFunc();
}
function myFunc3(){
  console.log('nothing');
}
function myFunc4(){
  return greet;
}
myFunc2(myFunc4());


console.log(typeof myFunc2);

const myArray7 = ['Joseph', 'Sabry', 'Botros'];
myArray7[0] = 'joseph';
myArray7.push(1);
console.log(myArray7);

//mutable data 

//immutable data (primitive types string, number, bool)

var x = 'joseph';
x = x + ' botros';


//2. foreach 
function loopFunc(value, index){
  console.log(value, index);
}
myArray7.forEach((value, index)=> {
    console.log(value, length);
});
console.log("###################");

let classes =  ["class 1A", "class 2B"];
let students =  ["joseph", "ahmad"];
let school = [classes, students];

school.forEach((value, index)=> {
    value.forEach((value,index)=> {
        console.log(value);
    });
});

console.log("###################");
//3. for of 

for(let element of myArray7){
  console.log(element);
}
//4. for in 

for(let element in myArray7){
  console.log(element);
  console.log(myArray7[element]);
}

// map iteration
let myArray8 = myArray7.map((value, index)=> {
  return value;
});


console.log(myArray7 == myArray8);

let myArr9 = [true, true, false];
let myArray10 = myArr9.map((value, index)=> {
  return value ? 'Succeed' : 'Failed';
});
console.log(myArray10.length == myArr9.length);

//filter iteration 

let myArray11 = [5,4,20, 13, 25];

function over18(value, index){
  return value > 18;
}

console.log(myArray11.filter(over18));
console.log(myArray11);


let myArray12 = ['Joseph', 'Ahmad', 'Mohammad', 'Hussein'];

function hasJ(value, index){
  return value.indexOf(char) != -1;
}

function has(char) {
  return function(value, index) {
      return value.indexOf(char) != -1;
  }
}
console.log(myArray12.filter(has('A')));

//reduce 

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  console.log(`adding to total ${total} value ${value}`);
  return total + value;
}

const strings = ['j','o','s','e','p','h'];
let concatenatedString = strings.reduce(myFunctionStr);

function myFunctionStr(total, value, index, array) {
  console.log(`adding to total ${total} value ${value}`);
  return total+ value;
}

console.log(concatenatedString);


//##### Javascript Objects ########

const myObj = {
  name: 'Joseph Botros',
  age: 30,
  car: null,
  isAlive: true,
  skills: ['Javascript', 'Frontend'],
  frameworks: {
    frontend: ['Angular', 'Bootstrap'],
    backend: ['C#', 'Dotnet', 'NodeJs']
  },
  action: function(){
    console.log(`hello from ${this.name}`);
  } 
}
myObj.name = 'Joseph Sabry Botros';
console.log(myObj.frameworks.backend[0]);

myObj.action();

console.log(myObj["frameworks"]['backend'][2]);


//Javascript Object Methods

var myObjKeys = Object.keys(myObj);
myObjKeys.forEach((value, index)=> {
  console.log(myObj[value], value);
});

console.log(Object.values(myObj));

for(let element in myObj){
  console.log(myObj[element]);
}
//object is reference type (non-primitive)
myObj2 = myObj;
myObj.name = 'Joseph Sabry'
console.log(myObj2);


const vehicle = {
  wheels: 4,
  engine: function(){
    console.log('Vroooom');
  }
};
console.log(vehicle.wheels);

const car = Object.create(vehicle);
car.name = 'BMW';
console.log(car.wheels);
vehicle.engine();
car.engine();


const tesla = Object.create(car);
tesla.name = 'Tesla';
console.log(tesla.wheels); //prototypical inheritance

tesla.engine = function(){
  console.log('shhhhhh');
}
tesla.engine();

//array is an object
myArray12.name = 'ahmad';
console.log(myArray12);


//JSON VS Javascript

//convert js object to JSON 
let jsonString = JSON.stringify(myObj);

console.log(typeof jsonString);
//convert json string to js Object
let myObj3 = JSON.parse(jsonString);
console.log(typeof myObj3);
console.log(myObj3.name);


//#### Javascript Classes

class Vehicle {
  constructor(name, wheels){
    console.log('contructing a vehicle');
    this.wheels = wheels;
    this.name = name;
  
  }
  start(){
    console.log(`starting car ${this.name}`);
  }
}
const vehicle1 = new Vehicle('car',4);
vehicle1.start();
console.log(vehicle1);
console.log(vehicle1.wheels);


class Tesla extends Vehicle {
  constructor(name, wheels){
    super(name, wheels);
    this._computer = 'iot computer';
  }
  setComputer(computer){
    this._computer = computer;
  }
  getComputer(){
    return this._computer;
  }
}

const teslaCar1 = new Tesla('car', 4);
console.log(teslaCar1);


//#### Error Handling
//console.log(asdasjdasjkdhas);

try {
  // const newVar = '';
  // newVar = 'ASDSAD';
  // let m = null;
  // m[2];
  
  }
catch(err){
  console.log(err.stack);
}
finally {

}
console.log('after error');


// ## finally block
  let i= 1;
  while(i<=5){
    try{
    let m = null;
    m[1];
    console.log(i);

    }
    catch(err){

    }
    finally {
      i++;

    }
  }

// ## custom error
try{
let var1 = null;
if(var1 == null){
  throw new Error('FrameworkNotLoaded');
}
} catch(err){
  if(err.message == 'FrameworkNotLoaded'){
    // reload the framework
    
    //send email
  }
}