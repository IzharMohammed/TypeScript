
class test{
    //name : string; 
    //ERROR :- Needs to initialize name value to constructor or use assertion operator (!)
    name !: string;
}

/*Using constructor */
class hello{
    name1 : string;
    constructor(){
        this.name1 = "hello";
    }
}

/*Getters and setters */
//If we are using protected then we cant change its value by directly assigning by creating object we can change its value by extending it in its sub class
class user{
    protected count = 1;
    readonly city : string = 'kurnool';
    //constructor
    constructor(
        public email : string,
        public name : string
    ){

    }

    private deleteToken(){
        console.log('Deleted');
    }

    get getEmail() : string {
        return `Uber${this.email}`;
    }

get courseCount() : number {
    return this.count;
}

set courseCount(num){
    if(num<=1) throw new Error("error");
    this.count=num;
}
}

class subUser extends user{
    changeCourseCount(){
        this.count=100;
    }
}

const pikachu = new user("","");

//pikachu.count = 10 //ERROR
//pikachu.deleteToken();

