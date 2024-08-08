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
// Interfaces have another special property. You can implement interfaces as a class but not in types
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