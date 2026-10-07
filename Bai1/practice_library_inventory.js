const books = [
    {
        bookCode: "B01",
        title: "Lập trình JavaScript",
        category: "Công nghệ thông tin",
        price: 150000,
        totalCopies: 10,
        availableCopies: 3,
        shelfLocation: "A01"
    },
    {
        bookCode: "B02",
        title: "Cơ sở dữ liệu",
        category: "Công nghệ thông tin",
        price: 200000,
        totalCopies: 8,
        availableCopies: 5,
        shelfLocation: "A02"
    },
    {
        bookCode: "B03",
        title: "Phân tích hệ thống",
        category: "Công nghệ thông tin",
        price: 180000,
        totalCopies: 6,
        availableCopies: 2,
        shelfLocation: "B01"
    }
];

function displayBooks() {
    console.log("\n======================================================================");
    console.log("                    KIỂM KÊ KHO THƯ VIỆN");
    console.log("======================================================================");
    console.log(
        "Mã sách\tTên sách\t\t\tTổng\tCó sẵn\tKệ"
    );
    console.log("----------------------------------------------------------------------");

    for (const book of books) {
        console.log(
            book.bookCode + "\t" +
            book.title + "\t\t" +
            book.totalCopies + "\t" +
            book.availableCopies + "\t" +
            book.shelfLocation
        );
    }

    console.log("======================================================================");
}

const newBook = {
    bookCode: "B04",
    title: "Lập trình C",
    category: "Công nghệ thông tin",
    price: 170000,
    totalCopies: 5,
    availableCopies: 5,
    shelfLocation: "B02"
};

books.push(newBook);

console.log("1. SAU KHI NHẬP KHO SÁCH B04");
displayBooks();

for (const book of books) {
    if (book.bookCode === "B01") {
        if (book.availableCopies > 0) {
            book.availableCopies--;

            if (book.availableCopies === 0) {
                console.log("Sách B01: HẾT SÁCH TRÊN KỆ");
            }
        } else {
            console.log("Sách B01 đã hết sách trên kệ.");
        }
    }
}

console.log("\n2. SAU KHI SINH VIÊN MƯỢN SÁCH B01");
displayBooks();

for (let i = 0; i < books.length; i++) {
    if (books[i].bookCode === "B03") {
        books.splice(i, 1);
        break;
    }
}

console.log("\n3. SAU KHI THANH LÝ SÁCH B03");
displayBooks();

let totalBooks = 0;
let totalAssets = 0;

for (const book of books) {
    totalBooks += book.totalCopies;
    totalAssets += book.totalCopies * book.price;
}

console.log("\n4. THỐNG KÊ TÀI SẢN KHO");
console.log("----------------------------------------------------------------");
console.log("Tổng số lượng sách:", totalBooks);
console.log("Tổng giá trị tài sản:", totalAssets, "VNĐ");
console.log("----------------------------------------------------------------");

