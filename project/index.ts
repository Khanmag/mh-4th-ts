import {Catalog} from "./catalogue";

export enum LibRoles {
    User = "User",
    Admin = "Admin",
    Librarian = "Librarian"
}
interface IUser {
    id: number;
    name: string;
    role: LibRoles;
}

class LibUser implements IUser{
    id: number;
    name: string;
    role: LibRoles;
    constructor(obj: IUser) {
        this.id = obj.id;
        this.name = obj.name;
        this.role = obj.role;
    }
    getBookList():[] {
        return []
    }
    searchBook():[] {
        return  []
    }
}


class LibAdmin extends LibUser {
    getUserList():[] {
        return []
    }
    createUser():void {
        // const newUser = new User()
    }
    deleteUser():void {

    }
}
class LibLibrarian extends LibUser {
}
const admin1 = new LibAdmin({id: 5, name: 'Gorge',role: LibRoles.Admin})
const librarian1 = new LibLibrarian({id: 15, name: 'Marcus',role: LibRoles.Librarian})

interface IBook {
    isbn: number;
    title: string;
    genre: string;
    author: string;
    editionYear: number;
}
class Book {
    isbn: number;
    title: string;
    genre: string;
    author: string;
    editionYear: number;
    constructor(obj: IBook) {
        this.isbn = obj.isbn
        this.title = obj.title;
        this.genre = obj.genre;
        this.author = obj.author;
        this.editionYear = obj.editionYear;
    }
}


const catalogue = new Catalog([]);
// catalogue.addBook({isbn: 1, title: 'A', genre: 'fantasy', author: 'Uells', editionYear: 1956}, user1)
catalogue.addBook({isbn: 2, title: 'B', genre: 'fantasy', author: 'Uells', editionYear: 1956}, admin1)
catalogue.addBook({isbn: 3, title: 'C', genre: 'fantasy', author: 'Uells', editionYear: 1956}, librarian1)
// catalogue.deleteBook(2)
const a = catalogue.bookList
console.log(a)


class UserManager {
    userList: IUser[]
    constructor(arr:IUser[]) {
        this.userList = arr
    }
    addUser(user:IUser, admin: IUser):void {
        if (admin.role === LibRoles.Admin) {
            this.userList.push(user)
        }
    }
}
const userManager = new UserManager([])
userManager.addUser({id: 111, name: "Alice", role: LibRoles.User}, admin1)
userManager.addUser({id: 112, name: "Anton", role: LibRoles.User}, admin1)
userManager.addUser({id: 113, name: "Nasty", role: LibRoles.User}, admin1)
console.log(userManager.userList)



// const state1 = {
//     value: 13,
//     users: 'some',
// }
// const state2 = {
//     value: 25,
//     users: 'some',
// }
// console.log(state1 !== state2);
// console.log({} !== {});




