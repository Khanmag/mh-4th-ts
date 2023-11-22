import * as fs from "fs";

// пишу any когда не придумал дальнейшию реализацию

enum AthenaeumRoles {
  User = "User",
  Admin = "Admin",
  AthenaeumWorker = "AthenaeumWorker",
}

interface IUser {
  id: number;
  name: string;
  role: AthenaeumRoles;
}

// User class
class AthenaeumUser implements IUser {
  public id: number;
  public name: string;
  public role: AthenaeumRoles;
  // favorite: number[];
  constructor(obj: IUser) {
    this.id = obj.id;
    this.name = obj.name;
    this.role = obj.role;
  }
  searchBooks(criteria: any, catalog: Catalog): Book[] {
    return catalog.searchBooks(criteria);
  }

  requestBook(title: string, catalog: Catalog): Book | undefined {
    const books = catalog.searchBooks({ title });
    if (books.length > 0) {
      // Предположим, что пользователь может запросить первую найденную книгу
      return books[0];
    }
    return undefined;
  }
}

// Admin class
class AthenaeumAdmin extends AthenaeumUser {
  manageUsers(
    users: AthenaeumUser[],
    action: string,
    user?: AthenaeumUser,
    newRole?: AthenaeumRoles
  ): void {
    switch (action) {
      case "add":
        if (user) {
          users.push(user);
        }
        break;
      case "delete":
        if (user) {
          const index = users.indexOf(user);
          if (index !== -1) {
            // users.filter( (item) => item.id !== 3 )
            users.splice(index, 1);
          }
        }
        break;
      case "changeRole":
        if (user && newRole) {
          user.role = newRole;
        }
        break;
      // case "ban"
      default:
        // Другие возможные действия
        break;
    }
  }
}

// AthenaeumWorker class
class AthenaeumWorker extends AthenaeumUser {
  addBook(catalog: Catalog, book: Book): void {
    catalog.addBook(book);
  }

  editBook(catalog: Catalog, oldBook: Book, newBookData: any): void {
    catalog.editBook(oldBook, newBookData);
  }

  deleteBook(catalog: Catalog, book: Book): void {
    catalog.deleteBook(book);
  }
}

interface IBook {
  author?: string;
  country?: string;
  imageLink?: string;
  language?: string;
  link?: string;
  pages?: number;
  title: string;
  year?: number;
}


// Book class
class Book {
  public author: string | undefined;
  public country: string | undefined;
  public imageLink: string | undefined;
  public language: string | undefined;
  public link: string | undefined;
  public pages: number | undefined;
  public title: string;
  public year: number | undefined;

  constructor(obj: IBook) {
    this.author = obj.author;
    this.country = obj.country;
    this.imageLink = obj.imageLink;
    this.language = obj.language;
    this.link = obj.link;
    this.pages = obj.pages;
    this.title = obj.title;
    this.year = obj.year;
  }
}

// Catalog class
class Catalog {
  private books: Book[];

  constructor(private fileName: string) {
    this.books = this.loadBooksFromJSON(this.fileName);
  }

  private loadBooksFromJSON(fileName: string): Book[] {
    try {
      const data = fs.readFileSync(fileName, "utf8");
      const books = JSON.parse(data);
      return books.map((book: any) => new Book(book.title));
    } catch (error) {
      console.error("Error reading books from JSON:", error);
      return [];
    }
  }

  private saveBooksToJSON(fileName: string): void {
    try {
      const data = JSON.stringify(this.books);
      fs.writeFileSync(fileName, data, "utf8");
    } catch (error) {
      console.error("Error saving books to JSON:", error);
    }
  }

  addBook(book: Book): void {
    this.books.push(book);
    this.saveBooksToJSON("books.json");
  }

  editBook(oldBook: Book, newData: any): void {
    // Реализация редактирования информации о книгах
    this.saveBooksToJSON("books.json");
  }

  deleteBook(book: Book): void {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
      this.saveBooksToJSON("books.json");
    }
  }

  searchBooks(criteria: any): Book[] {
    // Реализация поиска книг
    return this.books.filter((book) => {
      // реализация критериев поиска
      return true;
    });
  }
}

const catalog = new Catalog("../books.json");

// Search class
class Search {
  searchBooks(criteria: any, catalog: Catalog): Book[] {
    return catalog.searchBooks(criteria);
  }
}

// Review class
// class Review {
//   constructor(
//     public book: Book,
//     public user: User,
//     public rating: number,
//     public comment: string
//   ) {}
// }

// Favorite class
// class Favorite {
//   private favorites: Book[];

//   constructor() {
//     this.favorites = [];
//   }

//   addFavorite(book: Book): void {
//     this.favorites.push(book);
//   }

//   removeFavorite(book: Book): void {
//     const index = this.favorites.indexOf(book);
//     if (index !== -1) {
//       this.favorites.splice(index, 1);
//     }
//   }
// }
