// ### Задание 1:
// Написать generic type для получения типа элемента по индексу в массиве.

type GetElementType<T extends any[], Index extends keyof T> = T[Index];

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type elem1 = GetElementType<arr1, 0>; // 'a'
type elem2 = GetElementType<arr2, 2>; // 1

// ### Задание 2:
// Написать conditional type, который принимает 2 типа и возвращает тип, который является объединением общих свойств.

type CommonProperty<A, B> = {
  [K in keyof A & keyof B]: A[K] | B[K];
};

type A = { a: number; b: string };
type B = { a: string; b: string; c: number };

type C = CommonProperty<A, B>; // {a: string | number, b: string }

// ### Задание 3:
// Написать mapped type, который принимает объект и делает все его свойства необязательными.

type MakePropertiesOptional<T> = {
  [K in keyof T]?: T[K];
};

type D = { a: number; b: string };
type F = MakePropertiesOptional<D>; // { a?: number; b?: string }

// ### Задание 4:
// Напишите функцию, которая принимает 2 объекта в виде аргументов 
// и возвращает новый объект который состоит из всех полей объектов на входе.
// Аргементы функции должны быть заданы интерфейсами.
// Например: User, UserAddress или Book, BookAuthor
// Возвращаемое значение должно быть задано интерфейсом,
// который состоит из всех полей объектов на входе.

interface User {
  name: string;
  age: number;
}

interface UserAddress {
  city: string;
  street: string;
}

interface Book {
  title: string;
  author: string;
}

interface BookAuthor {
  name: string;
  nationality: string;
}

type MergeObjects<T, U> = T & U;

function mergeObjects<T, U>(obj1: T, obj2: U): MergeObjects<T, U> {
  return { ...obj1, ...obj2 };
}

const user: User = { name: "John", age: 25 };
const address: UserAddress = { city: "Moscow", street: "Lenin Street" };

const mergedUser = mergeObjects(user, address); // { name: "John", age: 25, city: "Moscow", street: "Lenin Street" }

const book: Book = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
const author: BookAuthor = {
  name: "F. Scott Fitzgerald",
  nationality: "American",
};

const mergedBook = mergeObjects(book, author); // { title: "The Great Gatsby", author: "F. Scott Fitzgerald", name: "F. Scott Fitzgerald", nationality: "American" }

// ### Задание 5.
// Сделайте задание 1, но вместо интерфейсов используйте type.
// Подумайте, в чем разница между type и interface.

type GetElementType5<T extends any[], Index extends keyof T> = T[Index];

type arr51 = ['a', 'b', 'c'];
type arr52 = [3, 2, 1];

type elem51 = GetElementType<arr1, 0>; // 'a'
type elem52 = GetElementType<arr2, 2>; // 1

// ### Задание 6.
// Напишите Union тип, который может принимать значения string, number, boolean, null, undefined, object
// Напишите функцию, принимает на вход этот Union Type и возвращает строку
// с названием типа аргумента
// Если аргумент - строка, то вернуть "string"
// Если аргумент - число, то вернуть "number"
// Если аргумент - булево, то вернуть "boolean"
// Если аргумент - null, то вернуть "null"
// Если аргумент - undefined, то вернуть "undefined"
// Если аргумент - объект, то вернуть "object"

type UnionType = string | number | boolean | null | undefined | object;

function getType(arg: UnionType): string {
  if (typeof arg === "string") {
    return "string";
  }
  if (typeof arg === "number") {
    return "number";
  }
  if (typeof arg === "boolean") {
    return "boolean";
  }
  if (arg === null) {
    return "null";
  }
  if (arg === undefined) {
    return "undefined";
  }
  return "object";
}

console.log(getType("Hello")); // "string"
console.log(getType(42)); // "number"
console.log(getType(true)); // "boolean"
console.log(getType(null)); // "null"
console.log(getType(undefined)); // "undefined"
console.log(getType({})); // "object"

// ### Задание 7.
// Напишите Enum, который содержит 3 значения: Admin, Manager, User
// Напишите функцию, которая принимает на вход Enum и возвращает строку
// с названием Enum.

enum UserRole {
    Admin = "Admin",
    Manager = "Manager",
    User = "User",
  }
  
  function getRole(role: UserRole): string {
    return UserRole[role];
  }
  
  console.log(getRole(UserRole.Admin)); // "Admin"
  console.log(getRole(UserRole.Manager)); // "Manager"
  console.log(getRole(UserRole.User)); // "User"
  
// ### Задание 8.
// Напишите функцию, которая принимает на вход Tuple из 3-х значений [string, number, object, undefined]
// внутри функции должна быть проверка, если первый элемент Tuple - строка, то вернуть строку,
// если второй элемент Tuple - число, то вернуть число,
// если третий элемент Tuple - объект, то вернуть объект,
// если четвертый элемент Tuple - undefined, то вернуть undefined
// если ни одно из условий не выполняется, то вернуть null

type Tuple = [string, number, object, undefined];

function getValueFromTuple(tuple: Tuple): string | number | object | undefined | null {
  if (typeof tuple[0] === "string") {
    return tuple[0];
  }
  if (typeof tuple[1] === "number") {
    return tuple[1];
  }
  if (typeof tuple[2] === "object") {
    return tuple[2];
  }
  if (typeof tuple[3] === "undefined") {
    return tuple[3];
  }
  return null;
}

console.log(getValueFromTuple(["Hello", 42, {}, undefined])); // "Hello"
// console.log(getValueFromTuple(["Hello", "World", {}, undefined])); // "World"
// console.log(getValueFromTuple(["Hello", 42, null, undefined])); // null
