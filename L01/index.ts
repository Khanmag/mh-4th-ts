
// let a: number = 10;
// // a = '19'

// let b: string | number = 44
// b = 'qwerty'
// // b =33
// let numbers : number[] = [1, 2, 3, 4, 5]
// let text : string[] = ['a', 'b', 'c']
// let hasAnswer : boolean = true
// numbers.push(13)
// numbers.unshift('13')

// console.log(a.toFixed(2));
// console.log(a.toUpperCase());
// console.log(b.toUpperCase());

// let login : string | null = null
// let userLogin : string | undefined = 'str'


// let data : any = 'fasdfads12312'
// // console.log(data.push(3));

// let otherData : unknown = 'wetr123re'
// // console.log(otherData.push());
// console.log((otherData as string).toUpperCase());

// let userStatus: 'active' | 'inactive' | 'pending'
// // userStatus = 'normal'
// userStatus = 'active'

// type Person = {
//     name: string;
//     age: number;
// }
// type Employer = {
//     // name: number;
//     id: number;
//     exp: number;
// }

// type personalEmployer = Person & Employer

// const obj: personalEmployer = {
//     name: 'Anna', // string & number ==> never
//     age: 18,
//     id: 32,
//     exp: 3,
// }

// type userDataType = {
//     firstName: string;
//     lastName: string | null;
//     age?: number;
//     isAuth: boolean;
// }

// const userData = {
//     firstName: 'Bill',
//     lastName: 'Murey', 
//     age: 53,
//     isAuth: true,
// }

// const userData: userDataType = {
//     firstName: 'Bill',
//     lastName: null,
//     isAuth: true,
// }

// type plUserType =  {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     address: {
//         street: string | null,
//         house: number | null ,
//     },
// }
// interface plInterface {
//     id: number,
//     name: string,
//     username: string,
//     email: string,
//     address: {
//         street: string | null,
//         house: number | null ,
//     },
// }
// const plUser:plInterface = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//         street: "Kulas Light",
//         house: 13,
//     },
// }


// interface Shape {
//     color: string,
// }
// type Cirecle = Shape & {radius: number}
// interface Circle extends Shape {
//     radius: number
// }
// interface Rectangle extends Shape {
//     width: number,
//     height: number,
// }
// const circle:Circle = {
//     color: 'red',
//     radius: 20,
// }
// const rectangle: Rectangle = {
//     color: 'red',
//     width: 11,
//     height: 11,
// }

// enum loadingStatus {
//     isLoading = 'IsLoading',
//     hasError = 'hasError',
//     success = 'success',
// }
// const currentStatus = loadingStatus.isLoading 

// enum Weekday {
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday,
// }
// let value1: number = 1123
// let value2: number = 1123
// enum values {
//     value1,
//     value2,
// }
// const obj2 = {value1, value2}
// console.log(values[0], values[1]);
// value1 = 1000
// console.log(values[0], values[1]);

// let tupleEx: [number, string, boolean] = [329, 'qwerty', true]

// const [value, changeValue] = [32, () => {}]

type userData = {
    name: string | null;
    age?: number;
    getName(): string;
    getAge: () => number;
}
const user2:userData = {
    name: 'Clint',
    getName() {
        return this.name
    },
    getAge: () => {
        return this.age
    }
}

function getDate(name: string) : void {
    console.log(new Date);
}











