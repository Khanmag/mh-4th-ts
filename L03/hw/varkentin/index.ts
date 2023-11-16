class Client {
  protected name: string;
  protected email: string;
  protected role: string;
  constructor(name:string, email:string) {
    this.name = name;
    this.email = email;
  }
}
class Admin extends Client{
  role = 'Admin';

  addUser(name: string, email: string): void {
    let newUser = new User(name, email)
    // добавить в json-файл User
    // создать json-файл User 
  }
  addLibrarian(name: string, email: string): object {
    let newUser = new Librarian(name, email)
  }
  delUser(user: Librarian | User)
  {
    delete user;
  }
  editUser(user: Librarian | User) {
    delUser(user)
    let name: string = prompt('name')
    let email: string = prompt('email')
    addUser(name, email)
  }
  openUserJson(json){
  // открыть  json-файл
  }
}
class Librarian extends Client{
role = 'librarian';
delBook(book: Book)
  {
    delete book;
  }
  addBook(book: Book): void{
    book.author = prompt('author')
    book.country = prompt('country')
    book.imageLink = prompt('imageLink')
    book.language = prompt('language')
    book.link = prompt('link')
    book.pages = +prompt('pages')
    book.title = prompt('title')
    book.year = +prompt('year')
    // добавить в json-файл
  }
  editBook(book: Book, property: string | number): void{
    let newBook: Book = book
    newBook.property = prompt('property')
    // добавить в json-файл
    delBook(book)
  }
  bookIssuance(book: Book, user: User, userBook: UserBook): void{
    userBook.data = new Date();
  }
  mulct(book: UserBook, date: Date): void {
    let str: string = ""
    book.date > date ?  str = 'mulct' : str ='ok'
    str == 'mulct'?  str.remark = 'mulct' : str.remark = 'ok'
    }
}
class User extends Client{
  id: number;
  role = 'User';
  currentBook: string | null = null;
  readonly Book: Book;
  findBook (property: string | number) {
    // поиск по свойству
  }
  favorites (book: Book) {
  // добавить книгу в избранное json
  }
  review (book: UserBook): object {
    book.review = alert('review')
    return book
  }
  raiting (book: UserBook): object {
    book.raiting = alert('raiting')
    return book
  }
  }
  interface Book {
    author: string | null,
    country?: string | null,
    imageLink?: string | null,
    language: string | null,
    link?: string | null,
    pages?: number | null,
    title?: string | null,
    year?: number | null
  }
  interface UserBook {
    data: Date;
    book: Book;
    raiting?: number;
    review?: string;
    remark?: string;
  }

























