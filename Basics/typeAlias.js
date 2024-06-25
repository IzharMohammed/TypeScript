"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var superHeros = [];
var heroPower = [];
superHeros.push("izhar");
heroPower.push(2);
//var carYear : year = "izhar"
var carYear = 2022;
var carType = "2";
var carModel = "A2";
var allUsers = [];
allUsers.push({ name: "izhar", isActive: true });
/* type Reactangle = {
  height :number
  width : number
}
  */
var recatngle = {
    height: 20,
    width: 20
};
var coloredRectangle = {
    height: 20,
    width: 20,
    color: 'blue'
};
//Functions 
function addTwo(num) {
    return num + 2;
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("izhar", "h");
/* function getValue(myVal: number): boolean{
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}
 */
//Map function 
var heros = ["thor", "spiderman", "ironman", 2];
heros.map(function (hero) {
    return "".concat(hero);
});
//Return type void
function consoleError(errmsg) {
    console.log('error');
}
//Method - 1 (Arrow function returning never)
/*
Never keyword in TS :-
Never type is a function that never returns a value but throws an exception or error and terminates the program
It is often used to indicate that a function will not return a value or that a variable will never have a value
*/
var handleError = function (errmsg) {
    throw new Error(errmsg);
};
//Method -2 (Simple function returning never)
function handleError1(errmsg) {
    throw new Error(errmsg);
}
//Callback functions
/*
Contextual Typing :-
Contextual Typing: This is a feature where TypeScript infers the type of a variable based on the context in which it is used. In this case, because names is an array of strings, the forEach method expects a function where the parameter is a string. TypeScript automatically infers that s is a string.
This type inference helps reduce the need for explicit type annotations, making the code more concise and readable while still being type-safe.
*/
var names = ['izhar', 'Abrar', 'maamulich'];
//we dont have to declare s to be string TS automatically infers it to be string -  parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toLowerCase());
});
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 2, y: 2 });
//Optional Properties (?) :-
function printName(name) {
    var _a;
    // console.log(name.last.toLocaleUpperCase());
    //OR
    if (name.last !== undefined) {
        // OK
        console.log(name.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = name.last) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase());
}
printName({ first: 'MD' });
