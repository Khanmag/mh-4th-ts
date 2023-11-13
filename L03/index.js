var Animal = /** @class */ (function () {
    function Animal(w) {
        this.weight = w;
    }
    Animal.prototype.move = function () {
        return "animal is moving";
    };
    return Animal;
}());
var animal1 = new Animal(10);
var animal2 = new Animal(20);
console.log(animal1.move());
console.log(animal2);
