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



// #4
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: false, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "radish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const hasOven = kitchen.hasOven;
const doesFridgeWork = kitchen.fridge.works;
let isRadishExpired = date - kitchen.fridge.items[1].expiryDate;
let fridgePrice = kitchen.fridge.price;


if(hasOven && doesFridgeWork){

  if(isRadishExpired > 0){
    console.log(`Geraldine's radish expired ${isRadishExpired} day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the radish in.`);
  } else{
    console.log("You can eat the radish!");
  }
}
else if(!hasOven && doesFridgeWork){
  if(isRadishExpired > 0){
    console.log(`Geraldine's radish expired ${isRadishExpired} day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the radish in.`);
  } else{
    console.log("You can eat the radish!");
  }
}
else if(hasOven && !doesFridgeWork){
  if(isRadishExpired > 0){
    console.log(`Geraldine's radish expired ${isRadishExpired} day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the radish in. And she'll have to pay ${fridgePrice * 0.5} to fix the fridge.`);
  } else{
    console.log("You can eat the radish!");
  }
}
else{
  if(isRadishExpired > 0){
    console.log(`Geraldine's radish expired ${isRadishExpired} day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the radish in. And she'll have to pay ${fridgePrice * 0.5} to fix the fridge.`);
  } else{
    console.log("You can eat the radish!");
  }
}

