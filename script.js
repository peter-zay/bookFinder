// Click handler for search button
const captureSearchValue = () => {
    return document.getElementById('search-bar').value.toLowerCase();
};

// Filter books based on search input
const filterBooks = (searchTerm, books) => {
    const flattenedBooks = flattenObjectValuesIntoArray(books);
    
    const filteredBooks = books.filter((book, index) => {
        const bookValues = flattenedBooks[index].map(value => value.toLowerCase());
        return bookValues.includes(searchTerm.toLowerCase());
    });

    return filteredBooks;
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (filteredBooks) => {
    return filteredBooks.map(book => structureBookAsHtml(book));
};

// Handler triggered when a user clicks the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML, and renders them to the DOM
const searchBtnClickHandler = (books) => {
    const searchTerm = captureSearchValue();
    const filteredBooks = filterBooks(searchTerm, books);
    const filteredBooksHtml = structureBooksAsHtml(filteredBooks);
    renderBooksToDom(filteredBooksHtml);
};

// Grab search button from the DOM
const searchBtn = document.getElementById('search-btn');

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });

document.getElementById("search-bar").addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        document.getElementById("search-btn").click();
    }
});


