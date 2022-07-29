//number 
let id : number = 1;
id = 5;

let first:number = 123; // number  base 10 
let second: number = 0x37CF;  // hexadecimal base 16
let third:number=0o377 ;      // octal base 8 
let fourth: number = 0b111001;// binary   base 2

id = 15.5123;

console.log(id.toFixed(1));


//boolean 

let isEmployee: boolean = true;
let isEmployee2: boolean = true;

isEmployee = false;
isEmployee = isEmployee2;
//isEmployee = first;


//string
let firstName: string = 'joseph';
let familyName: string = 'boutros';

console.log(firstName.concat(' ').concat(familyName));


//array 
let arr1 : number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];

let x: string;
//x = arr2.pop();

// for(let i in arr1){

// }

//union (more than one type)
let pid : (number | string) = 'abc';
let age : boolean | number = true;
age = 1;

let arr3: (number | string )[] = [1,2,3, 'abc', 'x'];

//any
let var1: any;
var1 = 'x';
console.log(typeof(var1));
var1 = 123;
console.log(typeof(var1));
var1 = true;


//enums 

enum PrintMedia {
    Newspaper = 1,
    Newsletter = 4,
    Magazine = 8,
    Book = 16
  }

enum Orientation {
    Portrait, 
    Landscape
}
enum Gender {
    Male,
    Female
};
enum Direction {
    Up = 'u',
    Down = 'd',
    Left = 'l',
    Right = 'r'
};

let gender: Gender = Gender.Male;
console.log(gender);
let screenOrientation: Orientation;
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
function getOrientation(screen: Orientation) {
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
  let user : [number, string] = [1,'abc'];
  //let user2 : [number, number] = [1,2];
  let arrayOfTupes:[number, string][] = [[1,'abc'],[2,'xyz'], [3,'lmn']];

  //object type definition
  const user3 : {
    name: string, 
    age: number,
    nationality: string
  } = {
    name: 'joseph',
    age: 30,
    nationality: 'eg'
  };

  type User = {
    name: string, 
    age: number,
    nationality: string
  };

  const user1 : User = {
    name: 'joseph',
    age: 30,
    nationality: 'eg'
  };

  const user2: User =  {
    name: 'ahmad',
    age: 25, 
    nationality: 'jo'
  };

  //interfaces 
interface Person {
    name: string, 
    readonly age: number,
    nationality: string, 
    degree: string,
    countries: string [],
    parent?: User // optional field or can accpet undefined value
};

let user5: Person =  {
    name : 'joseph',
    age: 13,
    nationality: 'eg',
    degree: 'masters',
    countries: ['eg', 'jo']
};

//user5.age = 15; // not allowed to edit

function greet(): void{
    console.log('hello');
}
greet();

function sum (x: number, y: number) : number {
    return x+y;
}
function sum2 (numbers: number[]) : number {
    let s : number = 0;
    for(let i of numbers){
        s += i;
    }
    return s;
}
console.log(sum2([1,2,3,4]));


// object oriented - classes definition

class Employee implements Person {
    name: string; 
    readonly age: number;
    nationality: string;
    degree: string;
    countries: string [];
    parent?: User; // optional field or can accpet undefined value
    // socialSecurityNumber: number;
    constructor(name: string, age: number, nationality: string, degree: string, coutries: string[], ssn: number){
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.degree = degree;
        this.countries = coutries;
        // this.socialSecurityNumber = ssn;
    }
}

let emp1 = new Employee('joseph', 30, 'eg', 'masters', ['eg', 'jo'], 12312312);


const aPerson: Person = emp1;

emp1 = user5;

//###### Object Oriented Typescript
//encapsulation 

class BankAccount {
    // private balance: number;
    // private currency: string;
    constructor(protected balance: number, private currency: string){
      this.balance = balance;
      this.currency = currency;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }

    checkBalance(): void {
      console.log(this.balance + " "+ this.currency);
    }
    withdraw(amount: number): void {
      if(this.balance >= amount){
        this.balance -= amount;
      }
      else {
         throw new Error('insufficient balance, cannot withdraw');
      }
    }
    getBalance() : number{
      return this.balance; 
    }
}
//inheritance
class CheckingAccount extends BankAccount {
    monthlyFee: number = 10;

    //extending bankaccount
    chargeMonthlyFee(): void {
       
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

    withdraw(amount: number): void {
       if(amount> 5000){
        throw new Error('Cannot withdraw more than 5000 for personal checking accounts');
       }
       super.withdraw(amount); //this line will never execute if amount > 5000;
    }
}
class BusinessCheckingAccount extends CheckingAccount {

  withdraw(amount: number): void {
     if(amount> 50000){
      throw new Error('Cannot withdraw more than 50000 for business checking accounts');
     }
     //super.withdraw(amount); //this line will never execute if amount > 5000;
     if(this.balance >= amount){
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

const acc6: PersonalCheckingAccount = new PersonalCheckingAccount(100, 'jd'); // parent class object can hold instance from drived/child classes objects 

// acc6.chargeMonthlyFee(); //casting

//abstraction 

interface Quote {
  id:    string;
  author: string;
  en:     string;

}

//abstraction 

interface IQuoteApi {
   //get one element
  //  x: number;
   get(id: string): Quote;
   //get many elements  
   getAll(): Quote[];
   //post 
   post(quote: Quote) : Quote;
   //delete
   delete(id: string): void;
   //put 
   put(quote: Quote): Quote;
}


class MockUpQuoteApi implements IQuoteApi {
  post(quote: Quote): Quote {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
  put(quote: Quote): Quote {
    throw new Error("Method not implemented.");
  }

  getAll(): Quote[] {
    return [];
  }
  get(id: string): Quote {
    //throw new Error("Method not implemented.");
    return  {
      id:id,
      author: '',
      en: ''
    };
  }
  deleteAll(): void{

  }
}


class QuoteApi implements IQuoteApi {
  constructor(){
  }
  getAll(): Quote[] {
    throw new Error("Method not implemented.");
  }
  post(quote: Quote): Quote {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
  put(quote: Quote): Quote {  
    throw new Error("Method not implemented.");
  }
 get(id: string): Quote {
   //throw new Error("Method not implemented.");

   //fetch
   return {
     id: 'xyz',
     author: 'joseph kadjl klsjdlkajd lj ldjlkajdlksajdlkas dlkajdlaksdj ',
     en: 'hello'
   };
 }
};

const quotesApi: IQuoteApi = new MockUpQuoteApi();
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

import * as _ from 'lodash'

console.log(_.ceil(1.6));