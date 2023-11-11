// type passType = {
//     body: string,
//     hash: number,
// }
// // Обобщённый тип
// type userData<T> = {
//     login: string,
//     pass: T,
// }
// const user1: userData<number> = {login: 'qwerty', pass: 1111}
// const user3: userData<string> = {login: 'qwerty', pass: '1111'}
//
// // Обобщённая функция
// function printValue<T>(value: T):void {
//     console.log(`value: ${value}`)
// }
// printValue<number>(20)
// printValue<string>('qwerty')



// // Обобщённые параметры функции и возвращаемое значение
// function mergeArrays<T, U>(arr1: T[], arr2: U[]): [T, U][] {
//      return  arr1.map( (item, index) => [item, arr2[index]] )
// }
// const result = mergeArrays<number, string>([11, 43, 52], ['aa', 'bb', 'cc'])
// console.log(result)
//
//
// // Обобщённый клас
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



// // Определение типа ключей
// interface Person {
//     name: string;
//     age: number;
//     address: string;
// }
// type PersonKeys = keyof Person; // "name" | "age" | "address"
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
// console.log(typeof user)



// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
// }
// const person = new Person('Anna')
// console.log(person instanceof Person)



// type Check<T> = T extends string ? boolean : number;
// type Result1 = Check<string>; // Result1 имеет тип boolean
// type Result2 = Check<number>; // Result2 имеет тип number
//
// type Person = {name: string, age: number};
//
// type ExtractPropertyNames<T> = T extends object ? keyof T : never;
//
// type PersonKeys = ExtractPropertyNames<Person>; // "name" | "age"
//
// type Filter<T, U> = T extends U ? T : never;
// type Numbers = [1, 2, 3, 4, 5]
// type EvenNumbers = Filter<Numbers, 2 | 4> // EvenNumbers имеет тип 2 | 4



// {
//     interface Person {
//         name: string;
//         age: number;
//     }
//     type Partial<T> = { [P in keyof T]?: T[P] };
//     type PartialPerson = Partial<Person>
//     // PartialPerson имеет тип {name?: string; age?: number}
//     type ReadOnly<T> = { readonly [P in keyof T]: T[P]}
//     type ReadOnlyPerson = ReadOnly<Person>
//     // ReadOnlyPerson имеет тип {readonly name: string; readonly age: number}
//     type CurrentOrNull<T> = { [P in keyof T]: T[P] | null}
//     type CurrentOrNullPerson = CurrentOrNull<Person>
//     // CurrentOrNullPerson имеет тип {name: string | null; age: number | null}
// }