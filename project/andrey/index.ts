// --- <<< User >>> ---
const enum UserRole {
    Reader = "reader",
    Administrator = "administrator",
    Librarian = "librarian",
}
interface UserInterface {
    id: number,
    name: string,
    email: string,
    role: UserRole,
}
// // interface NewUser extends Pick<UserInterface, 'name' | 'email' | 'role'> {};
class User implements UserInterface {
    id: number;
    name: string;
    email: string;
    role: UserRole;
//     // users: string[];
    constructor(user: UserInterface) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
        this.role = user.role;
//         // this.users = [];
    }
//     // addUser(user: NewUser) {
//     //     this.users.push(new User({id: 0 ,name: 'weew',email: 'we' ,role: UserRole.Admininistrator}));
//     //     // this.users.push(new User({
//     //     //     id: 0,
//     //     //     name: user.name,
//     //     //     email: user.email,
//     //     //     role: user.role}));
//     // }
//     // getName(id) {
// 	// 	return this.name;
// 	// }   
}
// --- <<< Administrator >>> ---
class UserAdministrator extends User {
    
//     addNewReader(reader: NewReader) {
//         // const newReader = new UserReader({});
//         // newUser.addUser({name: 'john', phone: 111});
//         // const userReader = {id: 1, name: reader.name, email: reader.email, role: UserRole.Reader};
//         // new UserReader().addNewReader(userReader);
        

//     }
// //     getUserList(): [] {
// //         return [];
// //     }
// //     createUser(): void {
// //         // const newUser = new User();
// //     }
// //     deleteUser(): void {

// //     }
}

// --- <<< Librarian >>> ---
class UserLibrarian extends User {

}

// --- <<< UserReader >>> ---
class UserReader extends User {
//     addNewReader() {

//     }
// //     getBookList(): [] {
// //         return [];
// //     }
// //     searchBook(): [] {
// //         return  [];
// //     }
}





// // class Library {
// //     start() {
// //         // const newUser = new User();
// //         // add Administrator
// //         const administrator = new User({
// //             id: 0,
// //             name: "Administrator",
// //             email: "administrator@library",
// //             role: UserRole.Admininistrator});
// //         // add Librarian
// //         // const librarian = new UserLibrarian({
// //         //     id: 0,
// //         //     name: "Librarian",
// //         //     email: "librarian@library",
// //         //     role: UserRole.Librarian});
// //     }
// // }


// --- <<< Catalog >>> ---
interface BookInterface {
    isbn: number;
    title: string;
    genre: string;
    author: string;
    yearEdition: number;
}
class Catalog {
    bookList: BookInterface[];
    constructor(book: BookInterface[]) {
        this.bookList = book;
    }
    addBook(book: BookInterface, user: UserInterface): void {
        if (user.role === UserRole.Librarian) {
            this.bookList.push(book);
            console.log("Книга добавлена");
        }
        else console.log("У вас нет прав на добавление книг!");
    }
    deleteBook(isbn: number): string {
        this.bookList = this.bookList.filter( item => item.isbn !== isbn);
        return 'Книга удалена!';
    }
}


// // class Book { //
// //     isbn: number;
// //     title: string;
// //     genre: string;
// //     author: string;
// //     yearEdition: number;
// //     constructor(book: BookInterface) {
// //         this.isbn = book.isbn;
// //         this.title = book.title;
// //         this.genre = book.genre;
// //         this.author = book.author;
// //         this.yearEdition = book.yearEdition;
// //     }
// // }

// --- <<< Library >>> ---
//
interface NewUserInterface extends Pick<UserInterface, 'name' | 'email' | 'role'> {};
interface EditUserInterface extends Pick<UserInterface, 'name' | 'email'> {};
//
class Library {
    userList: UserInterface[];
    userCount: number;
    constructor(user: UserInterface[]) {
        this.userList = user;
        this.userCount = 0;
    }
    addUser(user: NewUserInterface, admin: UserInterface): void {
        if (admin.role === UserRole.Administrator && user.role === UserRole.Reader) {
            this.userList.push({id: this.userCount++, name: user.name, email: user.email, role: user.role});
            console.log(`Читатель ${user.name} добавлен в базу.`);
        }
    }
    editUser(id: number, newInfo: EditUserInterface, admin: UserInterface) {
        if (admin.role === UserRole.Administrator) {
            const user = this.userList.find( item => item.id == id );
            console.log(user);
            user.name = newInfo.name;
            user.email = newInfo.email;
        }
    }
    deleteUser() {
        //
    }
    showUserList(admin: UserInterface) {
        if (admin.role === UserRole.Administrator) {
            console.log(`Список пользователей библиотеки:`);
            for (let user of this.userList) {
                console.log(`id: ${user.id}, имя: ${user.name}, e-mail: ${user.email}, доступ: ${user.role}`);
            }
        }
    }
}



function runLibrary() {
    //
    console.log('--- Init Library ---');
    const library = new Library([]);
    //
    console.log('--- Add New userAdministrator ---');
    const userAdmin = new UserAdministrator({
        id: 0,
        name: 'Administrator',
        email: 'admin@library',
        role: UserRole.Administrator,
    });
    console.log('out :', userAdmin);
    //
    console.log('--- Add New userLibrarian ---');
    const userLibrarian = new UserLibrarian({
        id: 0,
        name: 'Marcus',
        email: 'user5@librarian',
        role: UserRole.Librarian,
    });
    console.log('out :', userLibrarian);
    //
    console.log('--- Add New userReader ---');
    library.addUser({name: "Alice", email: 'reader1@library', role: UserRole.Reader}, userAdmin);
    library.addUser({name: "Anton", email: 'reader2@library', role: UserRole.Reader}, userAdmin);
    library.addUser({name: "Nasty", email: 'reader3@library', role: UserRole.Reader}, userAdmin);
    console.log('out :', library.userList);
    //
    console.log('--- Show UserList ---');
    library.showUserList(userAdmin);
    //
    console.log('--- Edit userReader ---');
    library.editUser(1, {name: "Antonio", email: 'reader2edit@library'}, userAdmin);
    //
    console.log('--- Show UserList ---');
    library.showUserList(userAdmin);
}
runLibrary();




//
// console.log('--- Add New userReader ---');
// // const userReader1 = new UserReader({id: 1, name: 'Alice', email: 'user1@reader', role: UserRole.Reader});
// // const userReader2 = new UserReader({id: 2, name: 'Bob',   email: 'user2@reader', role: UserRole.Reader});
// // const userReader3 = new UserReader({id: 3, name: 'Clint', email: 'user3@reader', role: UserRole.Reader});
// //
// console.log('--- Add New catalog ---');
// const catalog1 = new Catalog([]);
// //
// console.log('--- Add New book ---');
// catalog1.addBook({isbn: 1, title: 'A', genre: 'fantasy', author: 'Uells', yearEdition: 1956}, userReader1);
// catalog1.addBook({isbn: 2, title: 'B', genre: 'fantasy', author: 'Uells', yearEdition: 1956}, userAdmin1);
// catalog1.addBook({isbn: 3, title: 'C', genre: 'fantasy', author: 'Uells', yearEdition: 1956}, userLibrarian1);
// //
// console.log('--- Delete book ---');
// catalog1.deleteBook(2);
// //
// console.log('--- Show bookList ---');
// const a = catalog1.bookList;
// console.log(a);


// console.log('--- Initialize ---');
// // const library = new Library();
// // library.start();
// console.log('--- Add Administrator ---');
// const userAdministrator = new UserAdministrator({id: 0, name: 'Administrator', email: 'administrator@library', role: UserRole.Administrator});
// console.log(userAdministrator);
// console.log('--- Add Librarian ---');
// const userLibrarian = new UserLibrarian({id: 0, name: 'Librarian', email: 'librarian@library', role: UserRole.Librarian});
// console.log(userLibrarian);
// console.log('--- Add User ---');
// const userReader = new UserReader({id: 0, name: '', email: '', role: UserRole.Librarian});
// console.log('--- Add User 1 ---');
// userAdministrator.addNewReader({name: 'User1', email: 'user1@library'});
// // const userReader = new UserReader({});



// console.log('--- The End ---');