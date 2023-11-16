

// class Animal {
//     weight: number;
//     constructor(w: number) {
//         this.weight = w
//     }
//     move(): string {
//         return "animal is moving"
//     }
// }
//
// const animal1 = new Animal(10)
// const animal2 = new Animal(20)
// console.log(animal1.move())
// console.log(animal2)
//
// class Dog extends Animal {
//     speed: number;
//     constructor(w: number, s: number) {
//         super(w);
//         this.speed = s
//     }
//     speak():void {
//         console.log("Wouf")
//     }
// }
// class Cat extends Animal{
//     speed: number;
//     constructor(w: number, s: number) {
//         super(w);
//         this.speed = s
//     }
//     speak():void {
//         console.log("Meow")
//     }
// }
//
//
// const dog1 = new Dog(30, 20)

// abstract class Car {
//     abstract model: number
// }
// interface ICar {
//     model: string;
//     year: number;
// }
// class Car implements ICar {
//     constructor(model: string, year: number) {
//         this.model = model
//         this.year = year
//     }
// }


class Counter {
    count: number = 0;
    increment(): void {
        this.count++
    }
    decrement(): void {
        if (this.count > 0) {
            this.count--
        }
    }
    getCount(): number {
        return this.count
    }
}
const counter = new Counter();
counter.increment()
console.log(counter.getCount()) // 1
console.log(counter) // Ошибка: свойство недоступно за пределами класса

// const symbols = []
//
// class Button {
//     width: number = 77
//     height: number = 77
//     private symbol: string
//     color: "white" | "orange" | "grey";
//     constructor(color:"white" | "orange" | "grey", symbol: string) {
//         this.color = color
//         this.symbol = symbol
//     }
//     getSymbols() {
//         // this.symbol = this.symbol.toUpperCase()
//         return this.symbol
//     }
//     getCorrectSymbol() {
//         this.symbol = this.symbol.toUpperCase()
//         return this.symbol
//     }
// }
// class ZeroButton extends Button {
//     width: number = 177;
// }
// class CalcButton = {
//
// }

class Rectangle {
    protected width: number;
    protected height: number;
    setWidth(width:number):void {
        this.width = width;
    }
    setHeight(height: number):void {
        this.height = height;
    }
}
class Square extends Rectangle {
    setWidth(width: number) {
        this.width = width;
        this.height = width;
    }
    setHeight(height: number) {
        this.width = height;
        this.height = height;
    }
}

class User {
    name: string;
    currentBook: string | null = null;
    constructor(name: string) {
    this.name = name;
    }
    getBook() {
        // fetch('../project/book.json')
        //     .then(res => res.json())
        //     .then(data => {})
        // получение книги
    }
}
// class Admin extends User {
//     refactorUserName(user) {
//         // изменение имени
//     }
// }

