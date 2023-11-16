class Users {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getBook() {
        fetch('../project/books.json')
            .then(response => response.json())
            .then(data => {
                for (const iterator of data) {
                    console.log(iterator.title)
                }
            })
    }
    findBook() {
        fetch('../project/books.json')
            .then(response => response.json())
            .then(data => {
                const title: string = 'Fairy tales'
                for (const iterator of data) {
                    if (iterator.title === title) {
                        console.log(iterator.title)
                    }
                }
            })
    }
}


class Admins {
    name: string;
    email: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
    getBook() {
        fetch('../project/books.json')
            .then(response => response.json())
            .then(data => {
                for (const iterator of data) {
                    console.log(iterator.title)
                }
            })
    }
    findBook() {
        fetch('../project/books.json')
            .then(response => response.json())
            .then(data => {
                const title: string = 'Fairy tales'
                for (const iterator of data) {
                    if (iterator.title === title) {
                        console.log(iterator.title)
                    }
                }
            })
    }
    addUser() {
        fetch('../users.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.push(
                    {
                        "name": "New Name",
                        "email": "New Email"
                    }
                )
                console.log(data)
            });
    }
    deleteUser() {
        fetch('../users.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const index: number = 2;
                data.splice(index, 1)
                console.log(data)
            });
    }
    editUser() {
        fetch('../users.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const index: number = 2
                data[index].name = 'New Name'
                console.log(data)
            });
    }
}

class Librarians {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getBook() {
        fetch('../project/books.json')
            .then(response => response.json())
            .then(data => {
                for (const iterator of data) {
                    console.log(iterator.title)
                }
            })
    }
    findBook() {
        fetch('../project/books.json')
            .then(response => response.json())
            .then(data => {
                const title: string = 'Fairy tales'
                for (const iterator of data) {
                    if (iterator.title === title) {
                        console.log(iterator.title)
                    }
                }
            })
    }
    addBook() {
        fetch('../project/books.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.push(
                    {
                        "author": "New Author",
                        "country": "New Country",
                        "imageLink": "images/newImageLink.jpg",
                        "language": "newLanguage",
                        "link": "https://en.wikipedia.org/wiki/newLink\n",
                        "pages": 100,
                        "title": "New Title",
                        "year": 2023
                    }
                )
                console.log(data)
            });
    }
    deleteBook() {
        fetch('../project/books.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const index: number = 5;
                data.splice(index, 1)
                console.log(data)
            });
    }
    editBook() {
        fetch('../project/books.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const index: number = 5
                data[index].author = 'NewAuthor'
                data[index].country = "newCountry"
                console.log(data)
            });
    }
}