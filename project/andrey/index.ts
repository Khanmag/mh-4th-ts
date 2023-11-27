// # + Анализ
// # + Базовая АР
// ## + Инициализация библиотеки
// # + Функциональность пользователей
// ## + Администратор добавляет пользователя
// ## + Администратор редактирует пользователя
// ## + Администратор удаляет пользователя
// ## + Администратор показывает список пользователей
// # Функциональность управления каталогом книг
// ## + Библиотекарь добавить книгу
// ## + Библиотекарь редактировать книгу
// ## + Библиотекарь удалить книгу
// ## + Библиотекарь показать список книг
// ## + Читатель показать список книг
// # + Функциональность поиска книг
// ## + Библиотекарь поиск книг
// ## + Читатель поиск книг
// # Дополнительные функции
// ## + Читатель добавить книгу в избранное
// ## + Читатель посмотреть книги в избранном
// ## + Читатель удалить книгу из избранного

// --- <<< Пользователи - общее >>> ---
const enum UserRole {
    Administrator = "administrator",
    Librarian = "librarian",
    Reader = "reader",
    Deleted = "deleted",
}
interface UserInterface {
    id?: number,
    name?: string,
    email?: string,
    role: UserRole,
    favorite?: number[],
}
class User implements UserInterface {
    id?: number;
    name: string;
    email: string;
    role: UserRole;
    favorite?: number[];
    constructor(user: UserInterface) {
        this.id = user.id;
        if (user.name) this.name = user.name;
        if (user.email) this.email = user.email;
        this.role = user.role;
    }  
}
// --- <<< Администратор - пользователи >>> ---
interface NewInfoUserInterface extends Pick<UserInterface, 'id' | 'name' | 'email'> {};
class UserAdministrator extends User {
    userList: UserInterface[];
    userCount: number;
    constructor(user: UserInterface) {
        super(user);
        this.userList = [];
        this.userCount = 0;
    }
    addUser(user: UserInterface, supervisor: string): void {
        if (supervisor === UserRole.Administrator) {
            if (user.role === UserRole.Administrator) {
                const userAdministrator = new UserAdministrator({id: this.userCount, ...user});
                this.userList[this.userCount] = userAdministrator;
                console.log(`Администратор ${user.name} добавлен в базу`);
            } else if (user.role === UserRole.Librarian) {
                const userLibrarian = new UserLibrarian({id: this.userCount, ...user});
                this.userList[this.userCount] = userLibrarian;
                console.log(`Библиотекарь ${user.name} добавлен в базу`);
            } else if (user.role === UserRole.Reader) {
                const userReader = new UserReader({id: this.userCount, ...user});
                this.userList[this.userCount] = userReader;
                console.log(`Читатель ${user.name} добавлен в базу`);
            }
            this.userCount++;
        }
    }
    editUser(newInfoUser: NewInfoUserInterface, supervisor: string): void {
        if (supervisor === UserRole.Administrator) {
            if (newInfoUser.id) {
                if (newInfoUser.name) this.userList[newInfoUser.id].name = newInfoUser.name;
                if (newInfoUser.email) this.userList[newInfoUser.id].email = newInfoUser.email;
            }
        }
    }
    deleteUser(id: number, supervisor: string): void {
        if (supervisor === UserRole.Administrator) {
            console.log(`Пользователь ${this.userList[id].name} удалён из базы`);
            this.userList[id].email = '';
            this.userList[id].role = UserRole.Deleted;
        }
    }
    showUserList(id: number): void {
        if (this.userList[id].role === UserRole.Administrator) {
            console.log(`Список пользователей библиотеки:`);
            for (let user of this.userList) {
                if (user.role !== UserRole.Deleted) {
                    console.log(`id: ${user.id},\tимя: ${user.name},\te-mail: ${user.email},\tдоступ: ${user.role}`);
                }
            }
        }
    }
}
// --- <<< Библиотекарь - книги >>> ---
const enum BookPublisher {
    InfraEngineering = 'Инфра-Инженерия',
    Eksmo = 'Эксмо',
    AST = 'АСТ',
    YoungGuard = 'Молодая гвардия',
}
const enum BookGenre {
    Transport = 'транспорт',
    Cooking = 'кулинария',
    Art = 'искусство',
    ArtisticLiterature = 'художественная литература',
    Health = 'Здоровье',
}
const enum BookRaiting {
    Bad_1    = 1,
    Better_2 = 2,
    Normal_3 = 3,
    Good_4   = 4,
    Great_5  = 5,
}
interface BookInterface {
    article?: number;
    title?: string,
    author?: string,
    isbn?: number,
    publisher?: BookPublisher,
    yearPublishing?: number,
    description?: string,
    genre?: BookGenre,
    // raiting?: {
        // userID: number,
        // raiting: BookRaiting,
        // review: string,
    // }
    // useReader: number | null,
}
interface NewInfoBookInterface extends Pick<BookInterface, 'article' | 'title' | 'author' | 'isbn' | 'publisher' | 'yearPublishing' | 'description' | 'genre'> {};
interface SearchBookInterface extends Pick<BookInterface, 'article' | 'title' | 'author' | 'isbn' | 'publisher' | 'yearPublishing' | 'description' | 'genre'> {};
class UserLibrarian extends User {
    bookList: BookInterface[];
    bookCount: number;
    constructor(user: UserInterface) {
        super(user);
        this.bookList = [];
        this.bookCount = 1;
    }
    addBook(book: BookInterface, supervisor: string): void {
        if (supervisor === UserRole.Librarian) {
            this.bookList.push({
                article: this.bookCount,
                title: book.title,
                author: book.author,
                isbn: book.isbn,
                publisher: book.publisher,
                yearPublishing: book.yearPublishing,
                description: book.description,
                genre: book.genre,
            })
            console.log(`Книга "${book.title}" добавлена в каталог`);
            this.bookCount++;
        }
    }
    editBok(newInfoBook: NewInfoBookInterface, supervisor: string) {
        if (supervisor === UserRole.Librarian) {            
            if (newInfoBook.article) {
                const bookElement = this.bookList.filter(function(item) {
                    return item.article === newInfoBook.article;
                })[0];
                const bookIndex = this.bookList.indexOf(bookElement);
                if (newInfoBook.title) this.bookList[bookIndex].title = newInfoBook.title;
                if (newInfoBook.author) this.bookList[bookIndex].author = newInfoBook.author;
                if (newInfoBook.isbn) this.bookList[bookIndex].isbn = newInfoBook.isbn;
                if (newInfoBook.publisher) this.bookList[bookIndex].publisher = newInfoBook.publisher;
                if (newInfoBook.yearPublishing) this.bookList[bookIndex].yearPublishing = newInfoBook.yearPublishing;
                if (newInfoBook.description) this.bookList[bookIndex].description = newInfoBook.description;
                if (newInfoBook.genre) this.bookList[bookIndex].genre = newInfoBook.genre;
            }
        }
    }
    deleteBook(article: number, supervisor: string): void {
        if (supervisor === UserRole.Librarian) {
            const bookElement = this.bookList.filter(function(item) {
                return item.article === article;
            })[0];
            const bookIndex = this.bookList.indexOf(bookElement);
            console.log(`Книга "${this.bookList[bookIndex].title}" удалена из каталога`);
            this.bookList.splice( bookIndex ,1);
        }
    }
    showBookList(id: number): void {
        if (userAdministrator.userList[id].role === UserRole.Librarian || userAdministrator.userList[id].role === UserRole.Reader) {
            console.log(`Список книг:`);
            for (let book of this.bookList) {
                let bookLog = `\n${this.bookList.indexOf(book) + 1 }.\t`;
                bookLog += `"${book.title}",\t${book.author},\tISBN: ${book.isbn},\tартикул: ${book.article}\n`;
                bookLog += `издатель ${book.publisher},\tгод издания ${book.yearPublishing},\tжанр "${book.genre}"\n`;
                bookLog += `"${book.description}"`;
                console.log(bookLog);
            }
        }
    }
    findBook(searchBook: SearchBookInterface, supervisor: string): void {
        if (supervisor === UserRole.Librarian || supervisor === UserRole.Reader) {
            let finder = this.bookList;
            if (searchBook.article) finder = finder.filter( item => (item.article === searchBook.article));
            if (searchBook.title) finder = finder.filter( item => (item.title === searchBook.title));
            if (searchBook.author) finder = finder.filter( item => (item.author === searchBook.author));
            if (searchBook.isbn) finder = finder.filter( item => (item.isbn === searchBook.isbn));
            if (searchBook.publisher) finder = finder.filter( item => (item.publisher === searchBook.publisher));
            if (searchBook.yearPublishing) finder = finder.filter( item => (item.yearPublishing === searchBook.yearPublishing));
            if (searchBook.description) finder = finder.filter( item => (item.description === searchBook.description));
            if (searchBook.genre) finder = finder.filter( item => (item.genre === searchBook.genre));
            if (finder.length > 0) {
                console.log(`Результат поиска книг:`);
                for (let book of finder) {
                    let bookLog = `\n"${book.title}",\t${book.author},\tISBN: ${book.isbn},\tартикул: ${book.article}\n`;
                    bookLog += `издатель ${book.publisher},\tгод издания ${book.yearPublishing},\tжанр "${book.genre}"\n`;
                    bookLog += `"${book.description}"`;
                    console.log(bookLog);
                }
            } else {
                console.log(`Таких книг нет`);
            }
        }	
    }
}
// --- <<< Читатель >>> ---
class UserReader extends User {
    constructor(user: UserInterface) {
        super(user);
    }
    addToFavoriteList(id: number, article: number): void {
        if (userAdministrator.userList[id].role === UserRole.Reader) {
            const bookElement = userLibrarian.bookList.filter(function(item) {
                return item.article === article;
            })[0];
            const bookIndex = userLibrarian.bookList.indexOf(bookElement);
            if (!userAdministrator.userList[id].favorite) userAdministrator.userList[id].favorite = [];
            if (userAdministrator.userList[id].favorite) {
                userAdministrator.userList[id].favorite?.push(article);
            }
            console.log(`Читатель ${userAdministrator.userList[id].name} добавил книгу "${userLibrarian.bookList[bookIndex].title}", артикул ${article} в избранное`);
        }
    }
    showFavoriteList(id: number): void {
        if (userAdministrator.userList[id].role === UserRole.Reader) {
            if (userAdministrator.userList[id].favorite) {
                console.log(`Список избранного у ${userAdministrator.userList[id].name}:`);
                if (userAdministrator.userList[id].favorite) {
                    userAdministrator.userList[id].favorite?.forEach( (item, index, arr) => {
                        const bookElement = userLibrarian.bookList.filter(function(bookItem) {
                        return bookItem.article === item;
                        })[0];
                        const bookIndex = userLibrarian.bookList.indexOf(bookElement);
                        const book = userLibrarian.bookList[bookIndex];
                        let bookLog = `\n"${book.title}",\t${book.author},\tISBN: ${book.isbn},\tартикул: ${book.article}\n`;
                        bookLog += `издатель ${book.publisher},\tгод издания ${book.yearPublishing},\tжанр "${book.genre}"\n`;
                        bookLog += `"${book.description}"`;
                        console.log(bookLog);
                    })
                } else {
                console.log(`Список избранного пуст`);
                }
            }
        }
    }
    deleteFromFavoriteList(id: number, article: number): void {
        if (userAdministrator.userList[id].role === UserRole.Reader) {
            const position = userAdministrator.userList[id].favorite?.indexOf(article);
            if (position != null) {
                userAdministrator.userList[id].favorite?.splice(position, 1);
            }
        }
    }
    bookRating() {
        // ? или в книге
    }
}
// --- <<< Запуск библиотеки и тесты >>> ---
console.log('\n--- Инициализация библиотеки ---');
const userAdministrator = new UserAdministrator({name: '', email: '', role: UserRole.Deleted});
const userLibrarian = new UserLibrarian({name: '', email: '', role: UserRole.Deleted});
const userReader = new UserReader({name: '', email: '', role: UserRole.Deleted});
function administratorLibrary() {
    console.log('\n--- РАБОТА С ПОЛЬЗОВАТЕЛЯМИ ---');
    console.log('\n--- Добавление администратора ---');
    userAdministrator.addUser({name: 'Administrator', email: 'admin@library', role: UserRole.Administrator}, UserRole.Administrator);
    console.log('\n--- Добавление библиотекаря ---');
    userAdministrator.addUser({name: "Marcus", email: 'librarian@library', role: UserRole.Librarian}, userAdministrator.userList[0].role);
    console.log('\n--- Добавление читателей ---');
    userAdministrator.addUser({name: "Alice", email: 'alice_1@library', role: UserRole.Reader}, userAdministrator.userList[0].role);
    userAdministrator.addUser({name: "Anton", email: 'anton_2@library', role: UserRole.Reader}, userAdministrator.userList[0].role);
    userAdministrator.addUser({name: "Nasty", email: 'nasty_3@library', role: UserRole.Reader}, userAdministrator.userList[0].role);
    console.log('\n--- Показать список пользователей ---');
    userAdministrator.showUserList(0);
    console.log('\n--- Редактировать пользователя с id = 3 ---');
    userAdministrator.editUser({id: 3, name: 'Antonio', email: 'antonio@library'}, userAdministrator.userList[0].role);
    console.log('\n--- Показать список пользователей ---');
    userAdministrator.showUserList(0);
    console.log('\n--- Удалить пользователя с id = 2 ---');
    userAdministrator.deleteUser(2, userAdministrator.userList[0].role);
    console.log('\n--- Показать список пользователей ---');
    userAdministrator.showUserList(0);
    console.log('\n--- Добавление больше читателей ---');
    userAdministrator.addUser({name: "Bob", email: 'bob@library', role: UserRole.Reader}, userAdministrator.userList[0].role);
    userAdministrator.addUser({name: "Josh", email: 'josh@library', role: UserRole.Reader}, userAdministrator.userList[0].role);
    userAdministrator.addUser({name: "Jule", email: 'jule@library', role: UserRole.Reader}, userAdministrator.userList[0].role);
    console.log('\n--- Показать список пользователей ---');
    userAdministrator.showUserList(0);
}
function librarianLibrary() {
    console.log('\n--- РАБОТА С КНИГАМИ ---');
    console.log('\n--- Добавить книги ---');
    userLibrarian.addBook({
        title: 'Основы строительства и эксплуатации автомобильных дорог',
        author: 'Леонид Романович Мытько',
        isbn: 9785972914951,
        publisher: BookPublisher.Eksmo,
        yearPublishing: 2020,
        description: 'Рассмотрены основные вопросы строительства автомобильных дорог',
        genre: BookGenre.Transport,
    }, userAdministrator.userList[1].role);
    userLibrarian.addBook({
        title: 'Подарок на Рождество. Чудесные рецепты для волшебного праздника и домашней сказки',
        author: 'Кириллова А.',
        isbn: 9785041847630,
        publisher: BookPublisher.InfraEngineering,
        yearPublishing: 2023,
        description: 'Эта книга написана специально для тех, кто хочет порадовать любимых вкусностями на Рождество',
        genre: BookGenre.Cooking,
    }, userAdministrator.userList[1].role);
    userLibrarian.addBook({
        title: 'Четыре книги об архитектуре',
        author: 'Палладио А.',
        isbn: 9785171121815,
        publisher: BookPublisher.AST,
        yearPublishing: 2021,
        description: 'НЕ ЗАБЫТЬ ДОБАВИТЬ ОПИСАНИЕ',
        genre: BookGenre.Art,
    }, userAdministrator.userList[1].role);
    console.log('\n--- Показать каталог книг ---');
    userLibrarian.showBookList(1);
    console.log('\n--- Удалить книгу, артикул  2 ---');
    userLibrarian.deleteBook(2, userAdministrator.userList[1].role);
    console.log('\n--- Показать каталог книг ---');
    userLibrarian.showBookList(1);
    console.log('\n--- Редактировать книгу с артикулом = 3 (например, добавим описание) ---');
    userLibrarian.editBok({
        article: 3,
        description: 'Андреа Палладио (1508–1580) – одна из ключевых фигур итальянского Возрождения, зодчий, теоретик и знаток античной архитектуры',
    }, userAdministrator.userList[1].role);
    console.log('\n--- Показать каталог книг ---');
    userLibrarian.showBookList(1);
    console.log('\n--- Добавим ещё пару книг ---');
    userLibrarian.addBook({
        title: 'Шаляпин',
        author: 'Виталий Николаевич Дмитриевский',
        isbn: 9785235036673,
        publisher: BookPublisher.YoungGuard,
        yearPublishing: 2014,
        description: 'Русская культура подарила миру певца поистине вселенского масштаба',
        genre: BookGenre.ArtisticLiterature,
    }, userAdministrator.userList[1].role);
    userLibrarian.addBook({
        title: 'Само не пройдет. Симптомник по основным заболеваниям',
        author: 'Олег Александрович Абакумов',
        isbn: 9785041846534,
        publisher: BookPublisher.Eksmo,
        yearPublishing: 2023,
        description: 'В книге автор разбирает самые частые симптомы заболеваний',
        genre: BookGenre.Health,
    }, userAdministrator.userList[1].role);
    console.log('\n--- Показать каталог книг ---');
    userLibrarian.showBookList(1);
    console.log('\n--- Найти книги (например, издатель Эксмо) ---');
    userLibrarian.findBook({
        publisher: BookPublisher.Eksmo,
    }, userAdministrator.userList[1].role);
}
function readerLibrary() {
    console.log('\n--- РАБОТА С ЧИТАТЕЛЯМИ ---');
    console.log('\n--- Показать каталог книг ---');
    userLibrarian.showBookList(3);
    console.log('\n--- Найти книги (например, автор Палладио А. и год 2021) ---');
    userLibrarian.findBook({
        author: 'Палладио А.',
        yearPublishing: 2021,
    }, userAdministrator.userList[3].role);
    console.log('\n--- Добавить книгу артикул 3 читателю id 3 в избранное ---');
    userReader.addToFavoriteList(3, 3);
    console.log('\n--- Добавить книгу артикул 4 читателю id 3 в избранное ---');
    userReader.addToFavoriteList(3, 4);
    console.log('\n--- Добавить книгу артикул 5 читателю id 3 в избранное ---');
    userReader.addToFavoriteList(3, 5);
    console.log('\n--- Посмотреть избранное у читателя id 3 ---');
    userReader.showFavoriteList(3);
    console.log('\n--- Удалить книгу артикул 3 у читателя id 3 из избранного ---');
    userReader.deleteFromFavoriteList(3, 3);
    console.log('\n--- Посмотреть избранное у читателя id 3 ---');
    userReader.showFavoriteList(3);
}
administratorLibrary();
librarianLibrary();
readerLibrary();
console.log('stop');