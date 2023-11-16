// 1 Написать generic type для получения типа элемента по индексу в массиве.
function identity<Type>(arg:Array< Type>, index: number): Type {
  return arg[index];
}
const arr = ['a','s','r','r']
let output = identity(arr, 3);
console.log(typeof output)
//
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];
type GetElementType<T> = Array<T>;

type elem1 = GetElementType<arr1[0]>; // elem1 имеет тип 'a'
type elem2 = GetElementType<arr2[2]>; // elem2 имеет тип 1

// 2 Написать conditional type, который принимает 2 типа и возвращает тип, который является объединением общих свойств.

type CommonProperty<T, U> = T extends U ? T : never;
type A = { a: number; b: string };
type B = { a: string; b: string; c: number };
type C = CommonProperty<A, B>; 

// 3 Написать mapped type, который принимает объект и делает все его свойства необязательными.

type A1 = { a: number; b: string };
type MakePropertiesOptional<T> = { [P in keyof T]?: T[P] };
type B1 = MakePropertiesOptional<A1>

//  4 

interface User {
  userAddress: string;
}

interface Book {
  bookAuthor: string;
}

interface Newobj extends User, Book {

};

// }
// function getNewInterfase<T,U>(obj1: T, obj2: U): extends T,U {
//   return Object.assign(obj1, obj2)
// }
//
// type Person = {name: string; age: number};
// type Book2= {nameBook: string};
// type userBook = Person | Book2

// function GetNewObj<T,U>(obj1:T, obj2: U): T | U {
//   return Object.assign(obj1, obj2)
// }


// 6

type Union = string |number | boolean | null | undefined | object
function GetType(t: Union) {
  return typeof t
}
console.log(GetType('w'))
// 7
enum Enum{
Admin, 
Manager, 
User, 
}

function getNameEnum(e: Enum): string {
return typeof e;
}

