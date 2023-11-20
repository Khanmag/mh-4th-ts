enum LibRoles {
  User = 0,
  Admin = 0,
  Librarian = 1
}

interface IUser { // Каждый пользователь должен быть представлен отдельным классом со следующими полями, такие как - Имя, email, роль и т.д.Каждый пользователь должен быть представлен отдельным классом со следующими полями, такие как - Имя, email, роль и т.д.
  id: number
  name: string;
  email: string;
  role: LibRoles;
}

class LibUser implements IUser { // пользователь.
  id: number
  name: string;
  email: string;
  role: LibRoles;

  constructor({ id, name, email, role }: IUser) {
    this.id = id
    this.name = name
    this.email = email
    this.role = role
  }
  // constructor(obj: IUser) {
  //     this.id = obj.id
  //     this.name = obj.name
  //     this.email = obj.email
  //     this.role = obj.role
  //   }
}

class LibAdmin extends LibUser { // администратор
  // getUserList() : IUser[] { //добавление
  //   return []
  // }
}
class Librarian extends LibUser { // библиотекарь 
}

class MyCatalog {
  booklist: IBook[];
  // raiting: [];
  constructor(arr: IBook[]) {
    this.booklist = arr
  }
  addBook(book: IBook, user: IUser): void { //добаление
    if (user.role === LibRoles.Librarian) {
      this.booklist.push(book)
      return console.log('книга добавлена')
    } else {
      return console.log('нет прав на добавление')
    }
  }
  deleteBook(isbn: number, user: IUser): void { //удаление книг)
    if (user.role === LibRoles.Librarian) {
      this.booklist = this.booklist.filter(item => item.isbn !== isbn)
      return console.log('книга удалена')
    } else {
      return console.log('нет прав на удаление')
    }
  }
  // searchBook (): [] { //поиск книг
  //  let  property: string | null = prompt('введите поле поиска')
  //  let  searchProperty: string | null = prompt('введите значение')
  //  let bookListProperty: [] = []
  //  for (let i of this.booklist){
  //   if (i.property == searchProperty) bookListProperty.push(i)
  //  }
  //  return bookListProperty
  // }
  search(title: string, year: number, author: string): IBook[] {
    return this.booklist
      .filter(item => item.title.includes(title))
      .filter(item => item.year?.toString().includes(year.toString()))
      .filter(item => item.author.includes(author))
  }

}

const myCatalog = new MyCatalog([])
// myCatalog.search()
interface IBook {
  author: string | null,
  genre: string,
  country?: string | null,
  imageLink?: string | null,
  language: string | null,
  link?: string | null,
  pages?: number | null,
  title?: string | null,
  year?: number | null
  comment?: string | null
  rating?: number | null
}

// const myBook = new Book({})
interface IComment {
  author: IUser;
  date: string;
  body: string;
}
interface IRate {
  author: IUser;
  rate: number;
}
class Book {
  author: string | null
  genre: string
  country?: string
  imageLink?: string | null
  language: string | null
  link?: string | null
  pages?: number | null
  title?: string | null
  year?: number | null

  comments: IComment[] = []
  raitings: IRate[] = []

  constructor(obj: IBook) {
    this.author = obj.author;
    this.genre = obj.genre;
    this.country = obj.country;
    this.imageLink = obj.imageLink;
    this.language = obj.language;
    this.link = obj.link;
    this.pages = obj.pages;
    this.title = obj.title;
    this.year = obj.year;
  }
  addComment(comment: string, userId: string): object {
    // let comment: string | null = prompt('coment')
    // if (comment) comments.push(comment)
    // const obj = new Map();
    // obj.set(book, comments);
    // return obj
    this.comments = [...this.comments, {author: userId, date: '00', body: comment}]
  }

  addRaiting(book: IBook, raitings: []): object {
    let raiting: string | null = prompt('raiting')
    if (raiting) raitings.push(raiting)
    const obj = new Map();
    obj.set(book, raitings);
    return obj
  }

}

class UserManager {
  userList: IUser[]
  constructor(arr: IUser[]) {
    this.userList = arr
  }
  addUser(user: IUser, admin: IUser): void { //добавление)
    if (admin.role === LibRoles.Admin) {
      this.userList.push(user)
    } else {
      return console.log('нет прав на добавление')
    }
  }

  editUser(obj: IUser): object { // редактироание )
    obj.id = prompt(obj.id)
    obj.name = prompt(obj.name)
    obj.email = prompt(obj.email)
    obj.role = prompt(obj.role)
    return obj
  }
  //удаление 
  deleteUser(isbn: number, user: IUser): void { //удаление книг)
    if (user.role === LibRoles.Librarian) {
      this.userList = this.userList.filter(item => item.isbn !== isbn)
      return console.log('юзер добавлен')
    } else {
      return console.log('нет прав на удаление')
    }
  }
}

class Favorites {
  bookFavor: IBook[]
  constructor(arr: IBook[]) {
    this.bookFavor = arr
  }
  addBook(book: IBook, user: IUser): void { //добаление
    if (user.role === LibRoles.User) {
      this.bookFavor.push(book)
      return console.log('книга добавлена')
    } else {
      return console.log('нет прав на добавление')
    }
  }
  deleteBook(isbn: number, user: IUser): void { //удаление книг)
    if (user.role === LibRoles.User) {
      this.bookFavor = this.bookFavor.filter(item => item.isbn !== isbn)
      return console.log('книга удалена')
    } else {
      return console.log('нет прав на удаление')
    }
  }

}




