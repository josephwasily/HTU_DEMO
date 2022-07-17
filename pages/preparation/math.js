
const power= (base, exponent)=> {
    if(exponent == 0)
    return 1;
    return base* power(base, exponent -1);
}

const sum = (a,b)=> {
    return a+b;
}

const multiply = (a,b)=> {
    return a*b;
}


const obj = {
    greet(){
        console.log('hello');
    }
}

class User {
    constructor(name,age){
        this._name = name ;
        this._age = age;
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    set name(name){
        this._name = name;
    }
}
export default power;
export {sum, power, obj, User};


//too long file (library of all math methods)