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
