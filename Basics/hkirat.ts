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
    if (keyPressed == Direction.Up) {
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


/* Generics */
//you have a function that needs to return the first element of an array. Array can be of type either string or integer.
function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);
// What is the problem in this approach?
// User can send different types of values in inputs, without any type errors
function getFirstElement1(arr: (string | number)[]) {
    return arr[0];
}

const res = getFirstElement1([1, 2, '23']);

// Typescript isn’t able to infer the right type of the return type
function getFirstElement2(arr: (string | number)[]) {
    return arr[0];
}

const result = getFirstElement(["izhar", "mohammed"]);
// console.log(result.toLowerCase())  // Error

// Solution - Generics
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("random");
let output2 = identity<number>(1);

// Solution for above error 
function getFirstElement3<T>(arr: T[]) {
    return arr[0];
}

const res1 = getFirstElement3<string>(["izhar", "mohammed"]);
console.log(res1.toLowerCase());


/* Advance TS apis */

// Pick
// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.

interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

type UserProfile = Pick<User, 'name' | 'email'>

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name : ${user.name}, Email : ${user.email}`);
}


/* Partial */
// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
// Specifically useful when you want to do updates

interface User2 {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
}

type UpdateProps = Pick<User2, 'age' | 'name' | 'email'>

type UpdatedPropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatedPropsOptional) {
    // hit the database tp update the user
}

updateUser({})


/* ReadOnly */
// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

interface Config {
    readonly endPoint: string;
    readonly apiKey: string;
}

const config: Readonly<Config> = {
    endPoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
}

// config.apiKey = 'new key'  // Error :- Cannot assign to 'apiKey' because it is a read-only property.
// This is compile time checking, not runtime (unlike const)


/* Exclude  */
// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type Event1 = 'click' | 'scroll' | 'mouseMove';
type ExcludeEvent1 = Exclude<Event1, 'scroll'>; // Includes :- 'click' | 'mousemove'  Excludes :- 'scroll'

const handleEvent = (event: ExcludeEvent1) => {
    console.log(`Handling event: ${event}`);
}

handleEvent('click');
handleEvent('mouseMove');
// handleEvent('scroll');  // Error :- Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent1'

/* Record and Map */
// Record let’s you give a cleaner type to objects
interface User3 {
    id: string;
    name: string;
}

type Users = { [key: string]: User3 }

const users: Users = {
    '1': { id: 'abc123', name: 'izhar' },
    '2': { id: 'xyz456', name: 'Mohammed' }
}

/* With using Records it can be cleaner */
interface User4 {
    id: string;
    name: string;
}

type Users1 = Record<string, User4>

const users1: Users1 = {
    '1': { id: 'abc123', name: 'izhar' },
    '2': { id: 'xyz456', name: 'Mohammed' }
}

/* Map */
// maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

interface User5 {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, User4>();
// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
// Accessing a value using .get
console.log(usersMap.get('abc123'));