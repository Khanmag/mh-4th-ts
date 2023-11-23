enum LibRoles {
  User = 0,
  Admin = 0,
  Librarian = 1
}

interface IUser{ 
  id: number;
  name: string;
  email: string;
  role: LibRoles;
}

class LibUser implements IUser { 
  id: number
  name: string;
  email: string;
  role: LibRoles;
  constructor({ id, name, email, role }: IUser) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
class Librarian extends LibUser{ 

}
 class LibAdmin extends LibUser{

}

interface IBook {
  title: string;
  author: string;
  genre: string;
  year: number;
  language: string;
  country?: string;
  imageLink?: string;
  link?: string;
  pages?: number;
}

class Book implements IBook{
  title: string;
  author: string;
  genre: string;
  year: number;
  language: string;
  country?: string;
  imageLink?: string;
  link?: string;
  pages?: number;
  constructor({title, author, genre, country, year, imageLink, language, link, pages}: IBook) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year
    this.country = country;
    this.imageLink = imageLink;
    this.language = language;
    this.link = link;
    this.pages = pages;
  }
}

class Catalog {
  bookList: Book[];
  constructor(arr: IBook[]) {
    this.bookList = arr
  }
  addBook (book: Book, user: IUser): Book[] | void {
    if (user.role === LibRoles.Librarian) {
      this.bookList.push(book)
      console.log('книга добавлена')
      return this.bookList
    } else {
      return console.log('у вас нет прав на добавление книги')
    }
  }
  deleteBook (isbn: number, user: IUser): Book[] | void {
    if (user.role === LibRoles.Librarian) {
      this.bookList = this.bookList.filter(item => item.isbn !== isbn)
      console.log('книга удалена')
      return this.bookList
    } else {
      return console.log('у вас нет прав на удаление книги')
    }
  }
  editBook (book: Book, isbn: number, user: IUser,{title, author, genre, country, year, imageLink, language, link, pages}: IBook): Book | void {
    if (user.role === LibRoles.Librarian){
      let newBook: Book = book
      this.deleteBook(isbn, user)
      newBook.author = author
      newBook.genre = genre
      newBook.country = country
      newBook.imageLink = imageLink
      newBook.language = language
      newBook.link = link
      newBook.pages = pages
      newBook.title = title
      newBook.year = year
      this.addBook(newBook, user)
      console.log('данные книги изменены')
      return newBook
    } else {
      return console.log('у вас нет прав на изменение книги')
    }
  }

  checkBookList(user: IUser): void {
    if (user.role === LibRoles.Librarian || user.role === LibRoles.User) {
      console.log(this.bookList)
      return console.log(`Каталог просмотрел ${user}`)
    } else {
      return console.log('у вас нет прав на просмотр каталога')
    }
  }

  searchBook(title: string, author: string, genre: string, year: number, country: string, imageLink: string, language: string, link: string, pages: number,  ): IBook[] {
    return this.bookList
      .filter(item => item.title.includes(title))
      .filter(item => item.author.includes(author))
      .filter(item => item.genre.includes(genre))
      .filter(item => item.year.toString().includes(year.toString()))
      .filter(item => item.country?.includes(country))
      .filter(item => item.imageLink?.includes(imageLink))
      .filter(item => item.language.includes(language))
      .filter(item => item.link?.includes(link))
      .filter(item => item.pages?.toString().includes(pages.toString()))
  }
}

const catalog = new Catalog("../books.json");

class UserManager {
  userList: LibUser[];
  constructor(arr: IUser[]) {
    this.userList = arr
  }
  addUser (user: IUser, admin: IUser): LibUser[] | void {
    if (admin.role === LibRoles.Admin) {
      this.userList.push(user)
      console.log('пользователь добавлен')
      return this.userList
    } else {
      return console.log('у вас нет прав на добавление пользователя')
    }
  }
  deleteUser (userId: number, admin: IUser): LibUser[] | void{
    if (admin.role === LibRoles.Admin) {
      this.userList = this.userList.filter(item => item.id !== userId)
      console.log('пользователь удалён')
      return this.userList
    } else {
      return console.log('у вас нет прав на удаление пользователя')
    }
  }
  editUser (userId: number, admin: IUser, user: IUser,{id, name, email, role}: IUser):LibUser | void {
    if (user.role === LibRoles.Admin){
      let newUser: LibUser = user
      this.deleteUser(userId, admin)
      newUser.id = id
      newUser.name = name
      newUser.email = email
      newUser.role = role
      this.addUser(newUser, admin)
      console.log('данные пользователя изменены')
      return newUser
    } else {
      return console.log('у вас нет прав на изменение данных пользователя')
    }
  }

  checkUserList(user: IUser): void {
    if (user.role === LibRoles.Librarian || user.role === LibRoles.Admin) {
      console.log(this.userList)
      return console.log(`Каталог просмотрел ${user}`)
    } else {
      return console.log('у вас нет прав на просмотр каталога')
    }
  }

  searchUser(id: number, name: string): IUser[] {
    return this.userList
      .filter(item => item.name.includes(name))
      .filter(item => item.id === id)
  }
}

interface IRaitingBook{
  title: string;
  raiting: number;
  comment: string[];
}

class RaitingBooks implements IRaitingBook{
  title: string;
  raiting: number;
  comment: string[];

  raitings: number[];
  comments: string[];

  constructor({title}: Book) {
    this.title = title;
    const averageRaiting: number = Math.round(this.raitings.reduce((acc, i) => acc + i, 0) / this.raitings.length);
    this.raiting = averageRaiting
    this.comment = this.comments
  }

  addRaiting (user: LibUser, raiting: number): number[] | void {
    if (user.role === LibRoles.User) {
      this. raitings.push(raiting)
      console.log(`${user.id} поставил оценку ${raiting}`)
      return this.raitings
    } else {
      return console.log('у вас нет прав на указание оценки')
    }
  }

  addComment (user: LibUser, comment: string): string[] | void {
    if (user.role === LibRoles.User) {
      this.comments.push(comment)
      console.log(`${user.id} написал комментарий ${comment}`)
      return this.comments
    } else {
      return console.log('у вас нет прав на добавление комментариев')
      }
    }
}

class FavoritesCatalog {
  id: number
  faivoritesBookList: Book[]
  constructor(arr: IBook[], {id}: IUser) {
    this.id = id
    this.faivoritesBookList = arr
  }
  addFaivoriteBook (book: Book, user: IUser): void {
    if (user.role === LibRoles.User) {
      this.faivoritesBookList.push(book)
      return console.log('книга добавлена в избранное')
    } else {
      return console.log('у вас нет прав на добавление книги в избранное')
      }
    }
  deleteFaivoriteBook (isbn: number, user: IUser): void {
    if (user.role === LibRoles.User) {
      this.faivoritesBookList = this.faivoritesBookList.filter(item => item.isbn !== isbn)
      return console.log('книга удалена из избранного')
    } else {
      return console.log('у вас нет прав на удаление книги в избранном')
    }
  }
  checkFaivoriteBookList(user: IUser): void {
    if (user.role === LibRoles.User) {
      console.log(this.faivoritesBookList)
      return console.log(`Каталог избранного просмотрел ${user.id}`)
    } else {
      return console.log('у вас нет прав на просмотр избранного')
    }
  }
    searchFaivoriteBook(title: string, author: string, genre: string, year: number ): IBook[] {
    return this.faivoritesBookList
      .filter(item => item.title.includes(title))
      .filter(item => item.author.includes(author))
      .filter(item => item.genre.includes(genre))
      .filter(item => item.year.toString().includes(year.toString()))
    }
}
  


  