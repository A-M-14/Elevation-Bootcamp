const fetch = function (isbn) {
    console.log(`Fetching book with ISBN: ${isbn}`);
    
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
            console.log(`Success for ISBN ${isbn}:`, data);
            if (data.totalItems > 0) {
                const book = data.items[0].volumeInfo;
                console.log(`Book Title: ${book.title}`);
                console.log(`Authors: ${book.authors ? book.authors.join(', ') : 'Unknown'}`);
            } else {
                console.log(`No book found for ISBN: ${isbn}`);
            }
        },
        error: function (xhr, text, error) {
            console.log("Error:", text);
        }
    });
};

fetch(9780575087057); // Name of the Wind
fetch(9782806269171); // The Little Prince
fetch(1440633908);    // Of Mice and Men
fetch(9781945048470); // The Alchemist
fetch(9780307417138); // Hitchhiker's Guide