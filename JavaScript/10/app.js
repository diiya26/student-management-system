class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

const books = [
    new Book("JavaScript", "Nishit", 500),
    new Book("Python", "Diya", 600),
    new Book("Java", "Harsh", 700),
    new Book("C++", "Karan", 550),
    new Book("React", "Krishna", 800)
];

console.log("Book Details:");
books.forEach(book => {
    const { title, author, price } = book;
    console.log(`Title: ${title}, Author: ${author}, Price: ₹${price}`);
});

const totalPrice = () => {
    return books.reduce((sum, book) => sum + book.price, 0);
};

console.log("\nTotal Price of Books: ₹" + totalPrice());

const fetchBooks = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books);
        }, 3000);
    });
};

async function displayBooks() {
    console.log("\nLoading books...");
    const data = await fetchBooks();

    console.log("\nBooks Loaded Successfully!");
    data.forEach(book => {
        console.log(book);
    });
}

displayBooks();