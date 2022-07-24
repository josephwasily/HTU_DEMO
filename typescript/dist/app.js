"use strict";
//number 
let id = 1;
id = 5;
let first = 123; // number  base 10 
let second = 0x37CF; // hexadecimal base 16
let third = 0o377; // octal base 8 
let fourth = 0b111001; // binary   base 2
id = 15.5123;
console.log(id.toFixed(1));
//boolean 
let isEmployee = true;
let isEmployee2 = true;
isEmployee = false;
isEmployee = isEmployee2;
//isEmployee = first;
//string
let firstName = 'joseph';
let familyName = 'boutros';
console.log(firstName.concat(' ').concat(familyName));
//array 
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let x;
//x = arr2.pop();
// for(let i in arr1){
// }
//union (more than one type)
let pid = 'abc';
let age = true;
age = 1;
let arr3 = [1, 2, 3, 'abc', 'x'];
//any
let var1;
var1 = 'x';
console.log(typeof (var1));
var1 = 123;
console.log(typeof (var1));
var1 = true;
//enums 
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 4] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 8] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 16] = "Book";
})(PrintMedia || (PrintMedia = {}));
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Portrait"] = 0] = "Portrait";
    Orientation[Orientation["Landscape"] = 1] = "Landscape";
})(Orientation || (Orientation = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
var Direction;
(function (Direction) {
    Direction["Up"] = "u";
    Direction["Down"] = "d";
    Direction["Left"] = "l";
    Direction["Right"] = "r";
})(Direction || (Direction = {}));
;
let gender = Gender.Male;
console.log(gender);
let screenOrientation;
screenOrientation = Orientation.Landscape;
// switch(screenOrientation){
//     case Orientation.Landscape:
//         console.log('the screen is landscape');
//         break;
//     case Orientation.Portrait:
//         console.log('the screen is portrait');
//         break;
//     default:
//         break;
// }
//using enum in switch and cases
getOrientation(screenOrientation);
function getOrientation(screen) {
    switch (screen) {
        case Orientation.Landscape:
            console.log('the screen is landscape');
            break;
        case Orientation.Portrait:
            console.log('the screen is portait');
            break;
        default:
            throw new Error(`Non-existent orientation`);
    }
}
//reverse mapping for enums
console.log(Gender[1]);
//tuples and tuples arrays
let user = [1, 'abc'];
//let user2 : [number, number] = [1,2];
let arrayOfTupes = [[1, 'abc'], [2, 'xyz'], [3, 'lmn']];
//object type definition
const user3 = {
    name: 'joseph',
    age: 30,
    nationality: 'eg'
};
const user1 = {
    name: 'joseph',
    age: 30,
    nationality: 'eg'
};
const user2 = {
    name: 'ahmad',
    age: 25,
    nationality: 'jo'
};
;
let user5 = {
    name: 'joseph',
    age: 13,
    nationality: 'eg',
    degree: 'masters',
    countries: ['eg', 'jo']
};
//user5.age = 15; // not allowed to edit
function greet() {
    console.log('hello');
}
greet();
function sum(x, y) {
    return x + y;
}
function sum2(numbers) {
    let s = 0;
    for (let i of numbers) {
        s += i;
    }
    return s;
}
console.log(sum2([1, 2, 3, 4]));
// object oriented - classes definition
class Employee {
    // socialSecurityNumber: number;
    constructor(name, age, nationality, degree, coutries, ssn) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.degree = degree;
        this.countries = coutries;
        // this.socialSecurityNumber = ssn;
    }
}
let emp1 = new Employee('joseph', 30, 'eg', 'masters', ['eg', 'jo'], 12312312);
const aPerson = emp1;
emp1 = user5;
