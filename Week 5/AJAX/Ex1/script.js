const fetch = function (isbn) {
    console.log(`Fetching book with ISBN: ${isbn}`);
    
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
            console.log(data);
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