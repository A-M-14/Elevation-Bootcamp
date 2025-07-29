const fetch = function (queryType, queryValue) {
    console.log(`Fetching book with ${queryType}: ${queryValue}`);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`;

    $.ajax({
        method: "GET",
        url: url,
        success: function (data) {
            console.log(`Success for ${queryType} "${queryValue}":`, data);
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log("Error:", text);
        }
    });
};

fetch("isbn", 9789814561778); // From Third World to First
fetch("title", "How to Win Friends and Influence People"); // Dale Carnegie
fetch("title", "The Wise Man's Fears"); // Sequel to Name of the Wind
