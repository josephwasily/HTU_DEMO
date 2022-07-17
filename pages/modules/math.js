export default function power(base, exponent){
    if(exponent == 0){
        return 1;
    }
    return base * power(base, exponent-1);
}
export let x = 1;
export let y = {name: 'joseph'};

export class User{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let myVariable = 1;

async function hello(){
    await Promise.resolve(1);
}
