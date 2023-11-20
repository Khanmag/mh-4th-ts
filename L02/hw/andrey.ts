// ## Задание 1. 
// Написать generic type для получения типа элемента по индексу в массиве.
// ### Пример:
// type arr1 = ['a', 'b', 'c'];
// type arr2 = [3, 2, 1];
// type elem1 = GetElementType<arr1, 0>; // elem1 имеет тип 'a'
// type elem2 = GetElementType<arr2, 2>; // elem2 имеет тип 1
//
// <<< SOLUTION 01 >>>      // !!! Решил так, как понял задачу
console.log('<<< SOLUTION 01 >>>');
{
    type ArrType<T> = T[];
    const arr1 : ArrType<string> = ['a', 'b', 'c'];
    const arr2 : ArrType<number> = [3, 2, 1];
    // or
    // const arr1: Array<string> = ['a', 'b', 'c'];
    // const arr2: Array<number> = [3, 2, 1];
    //
    function GetElementType<T>(arr: T[], index: number) : T {
        return arr[index];
    }
    //
    type ElemType = number | string;
    const elem1 : ElemType = GetElementType(arr1, 0);
    const elem2 : ElemType  = GetElementType(arr2, 2);
    //
    console.log(elem1);  // --> [a]
    console.log(elem2);  // --> [1]
}
//
// ## Задание 2. 
// Написать conditional type, который принимает 2 типа и возвращает тип, который является объединением общих свойств.
// ### Пример:
// type A = { a: number; b: string };
// type B = { a: string; b: string; c: number };
// type C = CommonProperty<A, B>; // C имеет тип {a: string | number, b: string }
//
// <<< SOLUTION 02 >>>
console.log('<<< SOLUTION 02 >>>');
{
    type A = {
        a: number,
        b: string,
    };
    type B = {
        a: string,
        b: string,
        c: number,
    };
    type CommonProperty<T, U> = T extends U
        ? never
        : { [P in keyof T] : T[P] | string};
    type C = CommonProperty<A, B>;
    //  type C = {
    //      a: string | number
    //      b: string,
    //  }
}
{   // Шамиль
    type A = {
        a: number,
        b: string,
    };
    type B = {
        a: string,
        b: string,
        c: number,
    };
    type CommonProperty<T, U> = T | U extends never
        ? unknown
        : T | U;
    type C = CommonProperty<A, B>;
    let ab: CommonProperty<number, string> = 35;
    ab = 'qwerty';
    // ab = null;
}
//
// ## Задание 3. 
// Написать mapped type, который принимает объект и делает все его свойства необязательными.
// ### Пример:
// type A = { a: number; b: string };
// type B = MakePropertiesOptional<A>; // B имеет тип { a?: number; b?: string }
//
// <<< SOLUTION 03 >>>
console.log('<<< SOLUTION 03 >>>');
{
    type A = {
        a: number,
        b: string,
    };
    type MakePropertiesOptional<T> = { [P in keyof T] ? : T[P] };
    type B = MakePropertiesOptional<A>;
    //  type B = {
    //      a?: number,
    //      b?: string,
    //  }
}
//
// ## Задание 4. 
// Напишите функцию, которая принимает 2 объекта в виде аргументов 
// и возвращает новый объект который состоит из всех полей объектов на входе.
// Аргументы функции должны быть заданы интерфейсами.
// Например: User, UserAddress или Book, BookAuthor
// Возвращаемое значение должно быть задано интерфейсом,
// который состоит из всех полей объектов на входе.
//
// <<< SOLUTION 04 >>>
console.log('<<< SOLUTION 04 >>>');
{
    interface User {
        name: string,
        age: number,
    }
    interface UserAddress {
        building: number,
        street: string,
        city: string,
    }
    //
    const user : User = {
        name: 'Robin',
        age: 28,
    }
    const userAddress : UserAddress = {
        building: 1,
        street: 'Red Square',
        city: 'Moscow',
    }
    //
    function userAddition<T, U>(object1: T, object2: U) : T & U {
        return {...object1, ...object2};
    }
    //
    interface UserInfo extends User, UserAddress {};
    const userInfo : UserInfo = userAddition(user, userAddress);
    console.log(userInfo);
}
//
// ## Задание 5.
// Сделайте задание 4, но вместо интерфейсов используйте type.
// Подумайте, в чем разница между type и interface.
//
// <<< SOLUTION 05 >>>
console.log('<<< SOLUTION 05 >>>');
{
    type User = {
        name: string,
        age: number,
    }
    type UserAddress {
        building: number,
        street: string,
        city: string,
    }
    //
    const user : User = {
        name: 'Paul',
        age: 22,
    }
    const userAddress : UserAddress = {
        building: 5,
        street: 'Palace Square',
        city: 'Saint Petersburg',
    }
    //
    function userAddition<T, U>(object1: T, object2: U) : T & U {
        return {...object1, ...object2};
    }
    //
    type UserInfo = User & UserAddress;
    const userInfo : UserInfo = userAddition(user, userAddress);
    console.log(userInfo);
}
//
// ## Задание 6.
// Напишите Union тип, который может принимать значения string, number, boolean, null, undefined, object
// Напишите функцию, принимает на вход этот Union Type и возвращает строку
// с названием типа аргумента
// Если аргумент - строка, то вернуть "string"
// Если аргумент - число, то вернуть "number"
// Если аргумент - булево, то вернуть "boolean"
// Если аргумент - null, то вернуть "null"
// Если аргумент - undefined, то вернуть "undefined"
// Если аргумент - объект, то вернуть "object"
//
// <<< SOLUTION 06 >>>
console.log('<<< SOLUTION 06 >>>');
{
    type UnionType = string | number | boolean | null | undefined | object;
    //
    const typeString : UnionType = 'qwerty';
    const typeNumber : UnionType = 123456;
    const typeBooleanTrue : UnionType = true;
    const typeBooleanFalse : UnionType = false;
    const typeNull : UnionType = null;
    const typeUndefined : UnionType = undefined;
    const typeObject :  UnionType = {
        a: 123,
        b: 'qwe',
    };
    //
    function checkType<T>(arg: T) : string {
        if (typeof arg === 'string') return 'string';
        else if (typeof arg === 'number') return 'number';
        else if (typeof arg === 'boolean') return 'boolean';
        else if (arg === null) return 'null';
        else if (typeof arg === 'object') return 'object';
        return 'undefined';
        
    }
    //
    console.log('typeString :', checkType(typeString));                 // --> [typeString : string]
    console.log('typeNumber :', checkType(typeNumber));                 // --> [typeNumber : number]
    console.log('typeBooleanTrue :', checkType(typeBooleanTrue));       // --> [typeBooleanTrue : boolean]
    console.log('typeBooleanFalse :', checkType(typeBooleanFalse));     // --> [typeBooleanFalse : boolean]
    console.log('typeNull :', checkType(typeNull));                     // --> [typeNull : null]
    console.log('typeUndefined :', checkType(typeUndefined));           // --> [typeUndefined : undefined]
    console.log('typeObject :', checkType(typeObject));                 // --> [typeObject : object]
}
//
// ## Задание 7.
// Напишите Enum, который содержит 3 значения: Admin, Manager, User
// Напишите функцию, которая принимает на вход Enum и возвращает строку
// с названием Enum.
//
// <<< SOLUTION 07 >>>
console.log('<<< SOLUTION 07 >>>');
{
    enum userEnum {
        Admin = 'Cool Admin',
        Manager = 'Big Manager',
        User = 'Super User',
    }
    //
    function userStatus<T>(user: T) : string {
        return userEnum[user];
    }
    //
    console.log('Admin :', userStatus('Admin'));
    console.log('Manager :', userStatus('Manager'));
    console.log('User :', userStatus('User'));
}
//
// ## Задание 8.
// Напишите функцию, которая принимает на вход Tuple из 4-х значений [string, number, object, undefined]
// внутри функции должна быть проверка, если первый элемент Tuple - строка, то вернуть строку,
// если второй элемент Tuple - число, то вернуть число,
// если третий элемент Tuple - объект, то вернуть объект,
// если четвертый элемент Tuple - undefined, то вернуть undefined
// если ни одно из условий не выполняется, то вернуть null
//
// <<< SOLUTION 08 >>>
console.log('<<< SOLUTION 08 >>>');
{
    type TupleType = [string, number, object, undefined];
    //
    const tuplesGood : TupleType = ['qwerty', 123456, {a: 123, b: 'abc',}, undefined];
    const tuplesBroke1 : TupleType = [123456, 123456, {a: 123, b: 'abc',}, undefined];
    const tuplesBroke2 : TupleType = [123456, 'qwerty', {a: 123, b: 'abc',}, undefined];
    const tuplesBroke3 : TupleType = [123456, 'qwerty', undefined, undefined];
    const tuplesBrokeAll : TupleType = [123456, 'qwerty', undefined, {a: 123, b: 'abc',}];
    //
    function checkTuples<T>(tuples: T) : string | null {
        if (typeof tuples[0] === 'string') return 'string';
        if (typeof tuples[1] === 'number') return 'number';
        if (typeof tuples[2] === 'object') return 'object';
        if (typeof tuples[3] === 'undefined') return 'undefined';
        return null;
    }
    //
    console.log('tuplesGood :', checkTuples(tuplesGood));           // --> [tuplesGood : string]
    console.log('tuplesBroke1 :', checkTuples(tuplesBroke1));       // --> [tuplesBroke1 : number]
    console.log('tuplesBroke2 :', checkTuples(tuplesBroke2));       // --> [tuplesBroke2 : object]
    console.log('tuplesBroke3 :', checkTuples(tuplesBroke3));       // --> [tuplesBroke3 : undefined]
    console.log('tuplesBrokeAll :', checkTuples(tuplesBrokeAll));   // --> [tuplesBrokeALl : null]
}
//