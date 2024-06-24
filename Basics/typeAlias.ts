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

//Callback functions











export {}