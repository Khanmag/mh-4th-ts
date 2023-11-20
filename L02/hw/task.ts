// 1
// Написать generic type для получения типа элемента по индексу в массиве.

// type arrItemType<T, U extends number> = T extends any[] ? T[U] : never;
//
// type a = [1, 2, 3];
// type b = ['a', 'b', 'c'];
//
// type res1 = arrItemType<a, 1>  // 2
// type res2 = arrItemType<b, 2>  // 'c'

// 2
// type firstTask<T, U> = T | U extends never ? unknown : T | U

// let a: firstTask<number, string> = 35
// a = 'qwerty'
// a = null

// type CombineProperty<T, U> = {[key in keyof (U | T)]: T[key] | U[key]}
// type a2 = {
//     a: number;
//     b: string;
// }
// type b2 = {
//     a: boolean;
//     c: null;
// }
// type c2 = CombineProperty<a2, b2>
// const res2:c2 = {
//     a: 13,
// }

// 3
// type A3 = { a: number; b: string };
//
// type CustomPartial<T> = {[key in keyof T]?: T[key]}
// type B3 = CustomPartial<A>

// 4

// interface IUser {
//     userAddress: string;
// }
// interface IBook {
//     bookAuthor: string;
// }
// const user:IUser = {userAddress: 'qwerty'}
// const book:IBook = {bookAuthor: 'qwerty'}
// interface IObj extends IUser, IBook {}
//
// const obj:IObj = {
//     bookAuthor: 'qwerty',
//     userAddress: 'qwerty',
// }
//
// function mergeObj<T, U>(obj1: T, obj2: U) {
//     return {...obj1, ...obj2}
// }
// console.log(mergeObj<IUser, IBook>(user, book))


// 5

// type UserType = {
//     userAddress: string;
// }
// type BookType = {
//     bookAuthor: string;
// }
// type ObjType = UserType & BookType
//
// const user:UserType = {userAddress: 'qwerty'}
// const book:BookType = {bookAuthor: 'qwerty'}
// const obj:ObjType = {
//     bookAuthor: 'qwerty',
//     userAddress: 'qwerty',
// }
// function mergeObj<T, U>(obj1: T, obj2: U):(T & U) {
//     return {...obj1, ...obj2}
// }
// console.log( mergeObj<UserType, BookType>(user, book) )

// 6

// type CustomType = string | number | boolean | null | undefined | object
//
// function getTypeUnion<T>(arg:T) {
//     if (arg === null) return 'null'
//     return typeof arg
// }
//
// console.log(getTypeUnion<CustomType>(35))
// console.log(getTypeUnion<CustomType>('qw'))
// console.log(getTypeUnion<CustomType>(false))
// console.log(getTypeUnion<CustomType>(null))
// console.log(getTypeUnion<CustomType>(undefined))
// console.log(getTypeUnion<CustomType>({}))

// 7

enum Roles {
    Admin = "Admin",
    Manager = "Manager",
    User = "User",
}

function whatIsEnum(obj: {Admin: String}) {
    return obj.Admin
}

console.log(whatIsEnum(Roles))


// 8

type TupleType = [string, number, object, undefined]

// function getTupleData(arr: TupleType) {
//     if (typeof arr[0] === "string") return (typeof arr[0])
//     else if (typeof arr[1] === "number") return (typeof arr[1])
//     else if (typeof arr[2] === "object") return (typeof arr[2])
//     else if (typeof arr[3] === "undefined") return (typeof arr[3])
//     else return "null"
//  }