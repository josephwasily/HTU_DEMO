"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
//###### Object Oriented Typescript
//encapsulation 
class BankAccount {
    // private balance: number;
    // private currency: string;
    constructor(balance, currency) {
        this.balance = balance;
        this.currency = currency;
        this.balance = balance;
        this.currency = currency;
    }
    deposit(amount) {
        this.balance += amount;
    }
    checkBalance() {
        console.log(this.balance + " " + this.currency);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            throw new Error('insufficient balance, cannot withdraw');
        }
    }
    getBalance() {
        return this.balance;
    }
}
//inheritance
class CheckingAccount extends BankAccount {
    constructor() {
        super(...arguments);
        this.monthlyFee = 10;
    }
    //extending bankaccount
    chargeMonthlyFee() {
        this.balance -= this.monthlyFee;
    }
}
const acc1 = new BankAccount(100, 'JD');
// acc1.balance = -100;
// acc1.balance = 1000000;
acc1.deposit(10);
acc1.deposit(1000);
acc1.checkBalance();
//acc1.withdraw(100000);
console.log('after withdrawing');
const acc2 = new CheckingAccount(100, 'JD');
acc2.chargeMonthlyFee();
class PersonalCheckingAccount extends CheckingAccount {
    withdraw(amount) {
        if (amount > 5000) {
            throw new Error('Cannot withdraw more than 5000 for personal checking accounts');
        }
        super.withdraw(amount); //this line will never execute if amount > 5000;
    }
}
class BusinessCheckingAccount extends CheckingAccount {
    withdraw(amount) {
        if (amount > 50000) {
            throw new Error('Cannot withdraw more than 50000 for business checking accounts');
        }
        //super.withdraw(amount); //this line will never execute if amount > 5000;
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            throw new Error('insufficient balance, cannot withdraw');
        }
    }
}
//acc1.chargeMonthlFee(); //Polymorphism 
const acc3 = new PersonalCheckingAccount(10000, 'JD');
//acc3.withdraw(6000);
acc1.withdraw(1000); //polymorphism
// const obj1 = {
//   x: 1
// }
// const obj2 = obj1;
// obj1.x = 15;
// console.log(obj2);
// let number1  = 1;
// let number2 = number1;
// number1++;
//const acc5: PersonalCheckingAccount = acc1; // child cannot hold instance variable from the parent 
const acc6 = new PersonalCheckingAccount(100, 'jd'); // parent class object can hold instance from drived/child classes objects 
class MockUpQuoteApi {
    post(quote) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    put(quote) {
        throw new Error("Method not implemented.");
    }
    getAll() {
        return [];
    }
    get(id) {
        //throw new Error("Method not implemented.");
        return {
            id: id,
            author: '',
            en: ''
        };
    }
    deleteAll() {
    }
}
class QuoteApi {
    constructor() {
    }
    getAll() {
        throw new Error("Method not implemented.");
    }
    post(quote) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    put(quote) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        //throw new Error("Method not implemented.");
        //fetch
        return {
            id: 'xyz',
            author: 'joseph kadjl klsjdlkajd lj ldjlkajdlksajdlkas dlkajdlaksdj ',
            en: 'hello'
        };
    }
}
;
const quotesApi = new MockUpQuoteApi();
//abstraction power
// const quotesApi : IQuoteApi = new SOAPApi();
// previewDom(quotesApi.get('xyz'));
// previewDom(quotesApi.get());
// function previewDom(x: any){
// }
// interface IDatabase {
//    openConnection(): void;
//    executeQuery(sql: string): any;
// }
// class SqlDatabase implements IDatabase {
//   openConnection(): void {
//      SqlDatabase.open();
//   }
//   executeQuery(sql: string) {
//     SqlDatabase.execut();
//   }
// }
// class MySqlDatabase implements IDatabase {
//   openConnection(): void {
//      MSqlDatabase.open();
//   }
//   executeQuery(sql: string) {
//     SqlDatabase.execut();
//   }
// }
//object oriented way
// let dbContext : IDatabase;
// if(cloud == 'azure'){
//     dbContext = SqlDatabase();
// }
// else if(cloud == 'amazon'){
//   dbContext = MySqlDatabase();
// }
// function getDataFromDb(){
//   dbContext.executeQuery();
// }
// function anotherGetDataFromDb(){
//   dbContext.executeQuery();
// }
// //functional way 
// function connectToDb(type: string ){
//   if(type == 'SQL')
//   if(type == "MYSQL")
// }
// connectToDb('SQL');
const _ = __importStar(require("lodash"));
console.log(_.ceil(1.6));
