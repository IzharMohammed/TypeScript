var test = /** @class */ (function () {
    function test() {
    }
    return test;
}());
/*Using constructor */
var hello = /** @class */ (function () {
    function hello() {
        this.name1 = "hello";
    }
    return hello;
}());
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = "world";
        if (name !== undefined) {
            this.name = name;
        }
    }
    return Greeter;
}());
var g = new Greeter("world 2");
console.log(g.name);
