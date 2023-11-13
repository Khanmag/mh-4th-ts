// type passType = {
//     body: string,
//     hash: number,
// }
// // Обобщённый тип
// type userData<T> = {
//     login: string,
//     pass: T,
// }
// const NumArray: Array<number> = [1, 2, 3, 4]
//
// const user1: userData<number> = {login: 'qwerty', pass: 1111}
// const user3: userData<string> = {login: 'qwerty', pass: '1111'}

// Обобщённая функция
// function printValue<T>(value: T):void {
//     console.log(`value: ${value}`)
// }
// printValue<number>(20)
// printValue<string>('qwerty')
//
// interface ProfileTypes<T> {
//     userName: string;
//     address: T,
// }
// const address1: ProfileTypes<string> = {userName: 'Alice', address: 'Moscow, Arbat st. 1, 1'}
// const address2: ProfileTypes<number> = {userName: 'Alice', address: 100500}
// const address3: ProfileTypes<[number, userData<number>]> = {userName: 'Alice', address: [0.000001, { login: 'wqer', pass: 1111}]}
//
// function getSum<T, U>(a: T, b: U): void {
//     if (typeof a === 'number' && typeof b === 'number') {
//         console.log('numbers')
//     }
// }
// getSum<number, number>(10, 20)
// getSum<number, string>(10, '20')




// Обобщённые параметры функции и возвращаемое значение
// function mergeArrays<T, U>(arr1: T[], arr2: U[]): [T, U][] {
//      return  arr1.map( (item, index) => [item, arr2[index]] )
// }
// const result = mergeArrays<number, string>([11, 43, 52], ['aa', 'bb', 'cc'])
// console.log(result)

// function mergeArrays<T, U>(arr1: T[], arr2: U[]): [T, U][] {
//     return  arr1.map( (item, index) => [item, arr2[index]] )
// }
// const result = mergeArrays<number, string>([11, 43, 52], ['aa', 'bb', 'cc'])
// console.log(result)

// Обобщённый клас
// class Queue<T> {
//     private items: T[] = []
//     enqueue(item: T): void {
//         this.items.push(item)
//     }
//     dequeue(): T | undefined {
//         return this.items.shift()
//     }
//     print(): void {
//         console.log(this.items)
//     }
// }
// const queue = new Queue<number>()
//
// queue.enqueue(10)
// queue.enqueue(20)
// queue.dequeue()
// queue.enqueue(30)
// queue.print()



// Определение типа ключей
// interface Person {
//     name: string;
//     age: number;
//     address: string;
// }

// type PersonKeys = keyof Person; // "name" | "age" | "address"
// // type ExampleType = "name" | "age" | "address"
// // Использование ключей в обобщённых функциях
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key]
// }
// const person: Person = { name: "Anna", age: 30, address: "11 1st street"}
// const userName = getProperty(person, "name")
// const age = getProperty(person, "age")



// const num = 1111
// console.log(typeof num) // "number"
//
// const str = 'qwerty'
// console.log(typeof str) // "string"
//
// type Person = {
//     name: string,
//     age: number,
// }
// const user: Person = {name: "Anna", age: 30}
// console.log(typeof user) // "object"
//
// const func = (): void => {
//     console.log('a')
// }
// console.log(typeof func) // "function"
// console.log(typeof null) // "object"
// console.log(typeof NaN) // "number"


// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
// }
// class Woman extends Person {
//     name: string;
//     constructor(name: string) {
//         super(name)
//         this.name = name
//     }
// }
// const person = new Person('Anna')
// const woman = new Woman('Alice')
// // console.log(person instanceof Person)
// console.log(woman instanceof Person)
// console.log(woman instanceof Woman)
// console.log(person instanceof Woman)


// const randomAnswer = (Math.random() > 0.5) ? true : false
type Check<T> = T extends string ? boolean : number;
type Result1 = Check<string>; // Result1 имеет тип boolean
type Result2 = Check<number>; // Result2 имеет тип number

type Person = {name: string, age: number};

type ExtractPropertyNames<T> = T extends object ? keyof T : never;

type PersonKeys = ExtractPropertyNames<Person>; // "name" | "age"

type Filter<T, U> = T extends U ? T : never;
type Numbers = [1, 2, 3, 4, 5]
type EvenNumbers = Filter<Numbers, 2 | 4> // EvenNumbers имеет тип 2 | 4



{
    interface Person {
        name: string;
        age: number;
    }

    type Partial<T> = { [P in keyof T]?: T[P] };
    type PartialPerson = Partial<Person>
    // PartialPerson имеет тип {name?: string; age?: number}

    type ReadOnly<T> = { readonly [P in keyof T]: T[P]}
    type ReadOnlyPerson = ReadOnly<Person>
    // ReadOnlyPerson имеет тип {readonly name: string; readonly age: number}

    type CurrentOrNull<T> = { [P in keyof T]: T[P] | null}
    type CurrentOrNullPerson = CurrentOrNull<Person>
    // CurrentOrNullPerson имеет тип {name: string | null; age: number | null}

    type NullOrUndef<T> = { [P in keyof T]: null | undefined}
}