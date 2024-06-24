/**
 * Type keyword in typescript:
In typescript the type keyword defines an alias to a type. We can also use the type keyword to define user defined types.
 * 
 * Type Aliases allow defining types with a custom name (an Alias).
*Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
 * 
 * 
 * 
 */

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










