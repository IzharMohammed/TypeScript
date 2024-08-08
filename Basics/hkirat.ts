// Interfaces 

/*
Summary :-
You can use interfaces to aggregate data
You can use interfaces to implement classes from it but we cant use it in types
*/

// Assigning types for objects 
const user = {
    firstName: 'izhar',
    lastName: 'MD',
    email: 'izhar@xyz.com',
    age: 20
}

interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

// #1  Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.
interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true;
    } else {
        return false;
    }
}

//2. Implementing interfaces
// Interfaces have another special property. You can implement interfaces as a class but not in types and can be used in reusability 
interface Person {
    name: string
    age: number;
    greet(): void;
}

class employee implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
    greet(): void {
        console.log('greeting !!!');
    }
}

class manager implements Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
    greet(): void {
        console.log('greeting !!!');
    }
}


// Types 
// Very similar to interfaces , types let you aggregate data together.
type User1 = {
    firstName: string,
    lastName: string,
    age: number
}

// #1 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.
// You can not do this using interfaces

/* Method - 1  */
// function printId(id : (string | number)){
//     console.log('ID :- ',id);
// }

/* Method - 2 using types  */
type ID = string | number;

function printId(id: ID) {
    console.log('ID :- ', id);
}
printId(10);
printId('izhar');
// printId(true); //Error

/*
2. Intersection
What if you want to create a type that has every property of multiple types/ interfaces
You can not do this using interfaces
*/

type employee1 = {
    name: string;
    startDate: Date;
}

type manager1 = {
    name: string,
    department: string
}

/* Method -1  */
// type TeamLead = {
//     name : string;
//     startDate : Date;
//     department : string
// }

/* Method -2 using types but we cant use it in interfaces */
type TeamLead = employee1 & manager1;

const teamLead: TeamLead = {
    name: 'kak',
    startDate: new Date(),
    department: 'SDE'
}

/* Enums */

// Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.
// The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.


// Example 1 - Game 
// Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.
// What should the type of keyPressed be?
// Should it be a string? (UP , DOWN , LEFT, RIGHT) ?
// Should it be numbers? (1, 2, 3, 4) ?
// The best thing to use in such a case is an enum

/* Method - 1 (using types) */

type Direction1 = "up" | "down" | "left" | "right"

function doSomething(keyPressed: Direction1) {
    if (keyPressed == "up") {
        // Logic .................
    }
}
doSomething("up");
doSomething("down");
doSomething("left");
doSomething("right");
// doSomething("random");  // Error 


/* Method - 2 (using enums which increases readability) */
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething1(keyPressed: Direction) {
    if(keyPressed == Direction.Up){
        // Logic..........
    }

}

doSomething1(Direction.Up);
doSomething1(Direction.Left);
doSomething1(Direction.Down);
doSomething1(Direction.Right);

//  Common usecase in express
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })