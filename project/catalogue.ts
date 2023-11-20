import {LibRoles} from "./index";

export class Catalog {
    bookList: IBook[];
    constructor(arr: IBook[]) {
        this.bookList = arr
    }
    addBook(book:IBook, user: IUser):void {
        if (user.role === LibRoles.Librarian) {
            this.bookList.push(book)
            console.log("Книга добавлена")
        }
        else console.log( "У вас нет прав на добавление книг!" )
    }
    deleteBook(isbn:number): string {
        this.bookList = this.bookList.filter( item => item.isbn !== isbn)
        return 'Книга удалена!'
    }
}