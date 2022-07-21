
let x = 1; //global scope

if(true){ // block scope
    let x = 2;
    let z = 3;
    if(true){
        const y = 'hello';
        
    }
    //console.log(y);
    //console.log(x);
}
function name(){ //function scope
    var myName = 'joseph'; //local variables 
    console.log(myName);
    function lastName(){
        var family = 'botros';
    }
    console.log(lastName);
   
}
console.log(x);
//console.log(z);
//console.log(y);
//console.log(myName);
function clicked(){
    console.log('clicked');
} //module scope 

const z= 1;
{
    const z ={}; //reference value 
    z.name = "hello"; //mutable, immutable 
    z.x = 1;
    z.name = "m";
    
    let myName = 'joseph';

    const myArr = [];
    myArr[0] =  'HELLO';

    //z = 3
}

let myName  = 'Joseph';
function printName(){
    //debugger;
    console.log(myName);
}
myName = 'Ahmad';
printName();


function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        //debugger;
        console.log(outerVariable);
        console.log(innerVariable);
    }
}
const newFunction = outerFunction('outer');
const newFunction2 = outerFunction('outer2');
newFunction('inner'); 
//newFunction2('inner2');


// for(var i=0; i<3; i++){ //i=1
//     function log(){
//         console.log(i); //global value
//     }
//     setTimeout(log, i*1000);
// }

//callbackqueue [console.log(i), console.log(i), console.log(i) ]


//solution
// for(let i=0; i<3; i++){ //i=0
//     function log(){
//         console.log(i); //closure value
//     }
//     setTimeout(log, i*2000);
// }


//callbackqueue [console.log(i){i=0},console.log(i){i=1}, console.log(i){i=2}]



console.log("################");

//this and binding 
console.log(this); //global or default binding  => window objec


// function x (){
//     console.log(this); // stict mode (undefined), unstrict mode (window object)
// }

const obj1 = {
    method1: function(){
        console.log(this) // this is the object that method1 is being called from 
    }
}
obj1.method1(); // implicit binding 

const person1 = {
    name: 'joseph',
    printName: printName
} // object method => this refers to the object 
  // implicit binding (object before dot notation)


const person2 = {
    print: person1.printName 
};

const person3  = {
    hello: 'hello',
    console: person2.print
}
// printName();
// person1.printName(); //implicit binding 
// person2.print(); // implicit binding 
// person3.console(); //=> ?? 


const person4 =  {
    name: 'joseph'
};
const person5 =  {
    name: 'ahmad'
};
//printName();

function printName(name){
    console.log(name); // functional style
}
function printName(){
    console.log(this.name); // object oriented style 

}


printName.call(person4); //explicit binding using call method
printName.call(person5);


function printWeather(rain, snow){
    console.log(this.weatherC);
    console.log(this.weatherF);
    console.log(rain);
    console.log(snow);
}
const weatherInAmman  = {
    weatherC: 37,
    weatherF: 150
};
const weatherInAmman2  = {
    weatherC: 50,
    weatherF: 200
};

//using call method 

//printWeather.call(weatherInAmman, 'not raining', 'not snowing');
const printWeatherInAmman = printWeather.bind(weatherInAmman, 'not raining', 'not snowing');
printWeatherInAmman();
//const printWeatherInAmman2 = printWeatherInAmman.bind()
//printWeatherInAmman2(); //NOTE rebinding didn't work
//console.log(printWeatherInAmman2);
printWeather.call({weatherC: '37'}, 'its raining', 'its snowing'); //explicit binding 
printWeather.apply(weatherInAmman, ['its raining', 'its snowing']);


// class Person {
//     constructor(name){
//         this.name = name;
//     }
// };

// const p1 = new Person('joseph');



// function Person(name){
//     this.name = name;

//     console.log(this);
// }
// const p1 = new Person('joseph'); //factory function 
// //console.log(p1);



const button1 = document.getElementById('button1');

button1.addEventListener('click', function(e){
    console.log(this); //target element - clicked element
});

button1.addEventListener('click', (e)=> {
    console.log(this); // wwindow (unstrict mode), strict mode (undefined)
});


const obj3 = {
    method1: ()=> {
        console.log(this, 'method1');
        console.log("#########");
    },
    method2: function(){
        console.log(this, 'method2');
    }
}
obj3.method1();
obj3.method2();

class Person {

    constructor(name){
        this.name = name;
       
    }
    print = ()=> {
        console.log(this);// inside class execution context  => object
    }
    
}

const p1 = new Person('joseph');
p1.print();

const p2 = {
    name: 'joseph', 
    print3: function(){
        console.log(this); //function declaration => object
    },
    print: ()=> {
        console.log(this);  //arrow declartion => window
    },
    print2: function(){
        return ()=> {
            console.log(this); // arrow inside function declaration => object
        }
    }
}
p2.print();
p2.print2()();  
p2.print3();


const printValue = ()=> {
    console.log(this);
};

const printValue2 = printValue.bind({'name':'hello'});
printValue2();

printValue.call({name:'hello'}); 
