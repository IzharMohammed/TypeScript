var superHeros : string [] = [];

var  heroPower : Array<number> = [];

superHeros.push("izhar");

heroPower.push(2);


type year = number;
type type = string;
type model = string;

//var carYear : year = "izhar"
var carYear :year = 2022 ;
var carType : type = "2";
var carModel : model = "A2";

type user = {
    name : string
    isActive : boolean
}

var allUsers : user[]=[] ;

allUsers.push({name : "izhar", isActive : true});

/**
Type keyword in typescript:
In typescript the type keyword defines an alias to a type. We can also use the type keyword to define user defined types.
  
Type Aliases allow defining types with a custom name (an Alias).
Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
 */

// Type Alias in interfaces

interface Reactangle  {
  height :number
  width : number
}

/* type Reactangle = {
  height :number
  width : number
}
  */

const recatngle : Reactangle ={
  height : 20,
  width : 20
}

//Extending interfaces
interface Reactangle1{
  height : number
  width:number
}

interface colorRectangle extends Reactangle1{
  color : string
}

const coloredRectangle :colorRectangle ={
height : 20,
width : 20,
color : 'blue'
}

//Functions 
function addTwo(num : number): number {
return num + 2;
}

let loginUser=(name : string,email:string,isPaid:boolean=false)=>{}

loginUser("izhar","h")

/* function getValue(myVal: number): boolean{
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}
 */


//Map function 
const heros = ["thor", "spiderman", "ironman",2];
heros.map((hero) : string=>{
  return `${hero}`;
})

//Return type void
function consoleError(errmsg : string) : void{
  console.log('error');
}

//Method - 1 (Arrow function returning never)
/*
Never keyword in TS :-
Never type is a function that never returns a value but throws an exception or error and terminates the program
It is often used to indicate that a function will not return a value or that a variable will never have a value
*/
const handleError= (errmsg : string) : never=>{
throw new Error(errmsg);
}

//Method -2 (Simple function returning never)
function handleError1 (errmsg : string) : never{
  throw new Error(errmsg);
}


/*
Contextual Typing :- 
Contextual Typing: This is a feature where TypeScript infers the type of a variable based on the context in which it is used. In this case, because names is an array of strings, the forEach method expects a function where the parameter is a string. TypeScript automatically infers that s is a string.
This type inference helps reduce the need for explicit type annotations, making the code more concise and readable while still being type-safe.
*/

const names : string[] = ['izhar','Abrar','maamulich'];
//we dont have to declare s to be string TS automatically infers it to be string -  parameter s inferred to have type string
names.forEach(function(s){
  console.log(s.toLowerCase());
})

names.forEach((s)=>{
  console.log(s.toUpperCase());
})

//Passing objects -1 
function printCoord(pt : {x : number , y : number}){
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({x :2 , y : 2})

//Passing objects -2
function createUser({name : string , isPaid : boolean}){}

createUser({name : 'izhar', isPaid : false})


/*   Optional Properties (?) :- */
function printName(name : {first : string ; last?: string}){
 // console.log(name.last.toLocaleUpperCase());
        //OR
 if (name.last !== undefined) {
  // OK
  console.log(name .last.toUpperCase());
} 

  // A safe alternative using modern JavaScript syntax:
  console.log(name.last?.toLocaleUpperCase());
}

printName({first : 'MD'});


/*Function passing and returning type is custom type  */
type user1 ={
  name : string
  email  : string
  isActive : Boolean
}

function createUser1(user : user1): user1{   
return {name : '',email : '', isActive : true}
}

createUser1({name : 'izhar', email : '', isActive : true })


/*readonly and optional property */
type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number
}

let myUser : User = {
  _id : '2' ,
  name : '',
  email : '',
  isActive : false
}


/*  Extensibility in type   */
type cardNumber = {
     cardnumber : string
}

type cardDate = {
  carddate : string 
}

type cardDetails = cardDate & cardNumber & {
  cvv : number
}

let user2 : cardDetails = {
cvv : 2 ,
carddate : '',
cardnumber : ''
}

/*   Interfaces  */
//   An interface declaration is another way to name an object type:
interface point {
  x : number ;
  y : number;
}

function printCoord1(pt : point) : void {
console.log(pt.x , pt.y);
}

printCoord1({x : 2 , y : 2});


//Adding new fields to existing interface
interface user3 {
  readonly id : number,
  email : string,
  googleId ?: string,
  start() : string,
  getCoupon(couponName : string , value : number) : number
}

interface user3 {
  githubToken?: string
}

interface Admin extends user3 {
   role :  "admin" | "ta" | "learner"
}

let user4 : Admin = {
role : "admin",
email : "",
id : 2,
/* start(){
  return ""
} */
start : ()=> {
  return ""
},
getCoupon(name : "", val : 9) {
    return 10;
},
}

/* 
We can define interface in TS in two ways :- 
1) interface keyword 
2) type keyword 

interface User1 {
  name: string;
  email: string;
  isActive: boolean;
}

type User1 = {
  name: string;
  email: string;
  isActive: boolean;
}

Both of these definitions allow you to create objects with the same structure:

const user: User1 = {
  name: "John Doe",
  email: "john.doe@example.com",
  isActive: true
};

Differences between interface and type:- 
1) Extensibility:
-interface can be extended by other interfaces using the extends keyword.
-type can be extended using intersection types.

interface Admin extends User1{
adminLevel : number;
}

type Admin = User1 &{
adminLevel : number;
}

 */

/*
Tuples : - 
 when we need to store a collection of a different types values in a single variable, then we will go with Tuples. 
*/

let tuser : [string, number, boolean];
tuser = ['',3,true];

let rgb: [number, number, number] = [255, 123, 112]

type user4 = [number , string];
const newUser : user4 =[2,'']

newUser.push(7);


/* 
Unions :-
The TypeScript union has the ability to combine one or two different types of data (i.e., number, string, float, double, etc). It is the most powerful way to express a variable with multiple types. Use pipe (‘|’) symbol to combine two or more data types to achieve Union type.

Syntax :-
(type1|type2|type3|...|type-n)
*/

let val : number | string;
val = 100;
val = "";
//val = true;  ERROR


/* Union in types */
type user5 = {
  name: string;
  id: number
}

type Admin2 = {
    username: string;
    id: number
}

let izhar : user5 | Admin2 =  {name : '' , id : 2}

izhar = {username : " " , id : 9}


/* Working with Union Types  */
// TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:


























export {}