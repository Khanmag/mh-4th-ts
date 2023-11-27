enum LibRoles {
    User = "User",
    Admin = "Admin",
    Librarian = "Librarian"
}

interface IUser {
    id: number;
    name: string;
    email: string;
    role: LibRoles;
}

class LibUser implements IUser {
    id: number;
    name: string;
    email: string;
    role: LibRoles;
    constructor(obj: IUser) {
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email
        this.role = obj.role;
    }
}


class LibAdmin extends LibUser {

}


class LibLibrarian extends LibUser {
}

const admin1 = new LibAdmin({ id: 10, name: 'Gorge', email: 'gorge@mail.com', role: LibRoles.Admin })

interface IBook {
    readonly isbn: number;
    title: string;
    genre: string;
    author: string;
    editionYear: number;
}

class Catalog {
    bookList: IBook[];
    constructor(arr: IBook[]) {
        this.bookList = arr
    }
    addBook(book: IBook, user: IUser): void {
        if (user.role === LibRoles.Librarian) {
            this.bookList.push(book)
            console.log(`Книга ${this.bookList[this.bookList.length - 1].title} добавлена в каталог библиотекарем: ${user.name}.`)
        }
        else console.log("У вас нет прав на добавление книг!")
    }
    deleteBook(isbn: number, user: IUser): void {
        let deleteBookTitle: string = ''
        if (user.role === LibRoles.Librarian) {
            this.bookList.forEach((item, index) => {
                if (item.isbn === isbn) {
                    deleteBookTitle = item.title
                    this.bookList.splice(index, 1)
                }
            })
            console.log(`Книга ${deleteBookTitle} удалена библиотекарем ${user.name}`)
        } else console.log("У вас нет прав на удаление книг!")

    }
    changeBook(isbn: number, book: IBook, user: IUser): void {
        let changeBookISBN: number = 0
        if (user.role === LibRoles.Librarian) {
            this.bookList.forEach((item, index) => {
                if (item.isbn === isbn) {
                    changeBookISBN = item.isbn
                    this.bookList[index] = book;
                    console.log(`Книга c ISBN: ${changeBookISBN} изменена библиотекарем ${user.name}`)
                }
            })
            // const currentBook = this.bookList.find((item) => item.isbn === isbn)
            // if (currentBook) {
            //     currentBook.title = 'other name'
            // } else console.log('Такой книги нет');
            
        } else console.log("У вас нет прав на редактирование книг!")
    }
    getBookList(user?: IUser) {
        console.log(this.bookList)
    }
    searchBook(title: string): void {
        const arrSearh: unknown[] = []
        this.bookList.forEach((item) => {
            if (item.title === title) {
                arrSearh.push(item)
                console.log(arrSearh)
            }
        })
        // const result = this.bookList.filter((item) => item.title.includes(title))
        // console.log(result);

        // return this.bookList.filter((item) => item.title.includes(title))
    }
}

class UserManager {
    userList: IUser[]
    constructor(arr: IUser[]) {
        this.userList = arr
    }
    addUser(user: IUser, admin: IUser): void {
        if (admin.role === LibRoles.Admin) {
            this.userList.push(user)
            console.log(`Пользователь ${this.userList[this.userList.length - 1].name} добавлен в список админом: ${admin.name}.`)
        } else console.log('У вас нет прав на добавление пользователей!')
    }
    deleteUser(id: number, admin: IUser): void {
        if (admin.role === LibRoles.Admin) {
            this.userList.forEach((item, index) => {
                if (item.id === id) {
                    this.userList.splice(index, 1)
                }
            })
        } else console.log('У вас нет прав на удаление пользователей!')
    }
    getUserList(admin: IUser): void {
        if (admin.role === LibRoles.Admin) {
            console.log(this.userList)
        } else console.log('У вас нет прав на просмотр списка пользователей!')
    }
}

const userManager = new UserManager([])
userManager.addUser({ id: 1, name: "Alice", email: 'alice@mail.com', role: LibRoles.User }, admin1)
userManager.addUser({ id: 2, name: "Anton", email: 'anton@mail.com', role: LibRoles.User }, admin1)
userManager.addUser({ id: 3, name: "Nasty", email: 'nasty@mail.com', role: LibRoles.Librarian }, admin1)

userManager.deleteUser(1, admin1)
userManager.getUserList(admin1)

const librarian1 = userManager.userList[1]

const catalogue = new Catalog([]);
catalogue.addBook({ isbn: 1, title: 'A', genre: 'fantasy', author: 'Uells', editionYear: 1956 }, librarian1)
catalogue.addBook({ isbn: 2, title: 'B', genre: 'fantasy', author: 'Uells', editionYear: 1956 }, librarian1)
catalogue.addBook({ isbn: 3, title: 'C', genre: 'fantasy', author: 'Uells', editionYear: 1956 }, librarian1)
catalogue.addBook({ isbn: 4, title: 'D', genre: 'fantasy', author: 'Uells', editionYear: 1956 }, librarian1)

catalogue.changeBook(2, { isbn: 2, title: 'BBBB', genre: 'fantasy', author: 'Uells', editionYear: 1956 }, librarian1)
catalogue.changeBook(5, { isbn: 5, title: 'EEEE', genre: 'fantasy', author: 'Uells', editionYear: 1956 }, librarian1)
catalogue.deleteBook(3, librarian1)

catalogue.getBookList()
catalogue.searchBook('A')