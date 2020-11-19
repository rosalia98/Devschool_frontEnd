'use strict'; //nu ne lasa sa folosim variabile fara sa le declaram inainte

declareVar(); //pot sa o apelez aici!
//functie declarativa
function declareVar(){
    //undefined
    console.log('scope in non-arrow', this);
    var a = 1;
    let b = 2; //nu-l pot muta in if pt ca are vizibilitate numai in blocul lui (orice e intre 2 {})
    const c = 3; //block-scoped as well
    if(true){
        var a = 1; //il pot muta aici, are vizibilitate la nivel de functie
    }
    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
}

declareVar();

let d = 5; //primitive, number
let e = 'devschool'; //primitive, string
let f = ['mere','pere']; //array - este obiect in JS
let g = {key: 'value'}; //JS object
let h = Symbol('foo'); //primitive, symbol
let i = Symbol('foo'); //primitive, symbol
console.log(h === i) //false


console.log('my current scope', this); //window
//symbolul genereaza chestii unice

console.log('d', typeof(d));
console.log('f', typeof(f));
console.log('h', typeof(h));

//null - exista/declarata, dar fara valoare vs undefined - nu exista

//NaN se obtine cand vrei sa convertesti la numar ceva ce nu e numar (un string)
console.log(typeof(NaN));
let l = Number('foo');
console.log(l);

let j = 4/0;
console.log('j', j, typeof j) //se obtine Infinity, este tot Number

//expr(); //nu o pot apela aici
const expr = function(){
    console.log('expression');
};

expr();

//arrow function
//foloseste functie anonima
//paseaza scopul parintelui, spre deosebire de functiile non-arrow
//in () params
const arrow = (a,b) => {
    //scopul este window
    console.log('scope in arrow', this);
    console.log('arrow function', a, b);
};

arrow(3,4);

//pt un singur parametru si o singura linie in arrow function, se poate scrie:

const arrow2 = a => console.log(a);

arrow2(2);

//immediatedly invoked function expressions (iife)
//se defineste si apeleaza in acelasi timp
//nu ramane definitva, scop local
(function iie(){
    console.log('iie');
})();

function variadic(){
    console.log(arguments);
}

variadic(2,3,4); //nu am params mai sus, se duc pe arguments

//spread operator
function variadic2(...args){ //pot pune oricati params
    console.log(args);
}
variadic2(2,3,4,5,6)

//closure pattern
//fct care aduna o valoare la ea insasi
function sum(by){
    let sum = 0;
    return function(){
        sum += by;
        return sum;
    }
}

const sumby5 = sum(5);
console.log(sumby5); //va afisa functia din interiorul returnului
console.log(sumby5()); //intoarce 5
console.log(sumby5()); //intoarce 10


//felul declarativ de a scrie o clasa
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
        console.log('this1 ',this);
    }

    getMeThis(){
        console.log('this2 ',this);
    }
};

const p = new Rectangle(12,14);
p.getMeThis();

const Rectangle1 = class{
    constructor(width, height){
        this.width = width;
        this.height = height;
        console.log('this1 ',this);
    }
};

console.log(Rectangle1.name); //intoarce Rectangle1

//const q = Rectangle2(12,34); //nu pot face asta inainte sa declar clasa

const Rectangle2 = class Rectangle3{
    constructor(width, height){
        this.width = width;
        this.height = height;
        console.log('this1 ',this);
    }
};
console.log(Rectangle2.name); //intoarce Rectangle3

//exprimari echivalente:
let k1 = Object.create({});
let k2 = {};
console.log('k1 ', k1, 'k2 ', k2);
console.log(typeof k1, k2);

let str = String("ana");
console.log('str', typeof str, str);

let arr = Array();
console.log('arr', typeof arr, arr);

// HOISTING = calling function or variable before declaring them

let users = [
    {
        name: 'Ion',
        age: 25,
    },
    {
        name: 'Gigi',
        age: 12,
    },
    {
        name: 'Viorica',
        age: 50,
    },
    {
        name: 'Maria',
        age: 26,
    },
    {
        name: 'Vasile',
        age: 80,
    }
];
users.push({name: 'Ioana', age: 30,});
console.log(users);

let newUsers = [
    {name: 'Alex',
    age: 10,
    }
];

users = users.concat(newUsers); //pt ca se returneaza unul nou
console.log(users); 

//remove
users.pop();
console.log(users);

//remove
console.log(users.slice(1,2)); //incepe la 1, inclusiv, se termina la 2, exclusiv

//filter
//vrem toti users with age > 40
users = users.filter(user => user.age >= 40);
console.log('useri > 40', users);

//splice
// users.splice(1,2);
// console.log(users);

