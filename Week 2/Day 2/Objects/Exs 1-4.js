// #1
let p1 = {
    name: "Lucy",
    age: 2.5,
    city: "Haifa"
}

let p2 = {
    name: "Shushlek",
    age: 34,
    city: "Haifa"
}

if(p1.age == p2.age) {
    console.log("Same age");
}

if(p1.city == p2.city) {
    console.log("Jill wanted to date Robert");
} else {
    console.log("Jill wanted to date Robert, but couldn't");
}


// #2
let library = {
    books: [{title: "Book 1", author: "Author 1"},
            {title: "Book 2", author: "Author 2"},
            {title: "Book 3", author: "Author 3"},
            {title: "Book 4", author: "Author 4"},
            {title: "Book 5", author: "Author 5"}]
    };


// #3
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const userName = "teD"; //'Bob' or 'Ted'
newUserName = userName.toLowerCase().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

if (reservations[newUserName] === undefined) {
  console.log("No reservation for " + newUserName);
  reservations[newUserName] = { claimed: true };
  console.log("Reservation created for " + newUserName);
} 
else if(!(reservations[newUserName].claimed)) {
  console.log("Welcome back, " + newUserName);
} 
else if(reservations[newUserName].claimed) {
  console.log("Someone already claimed your reservation, " + newUserName);
} 



