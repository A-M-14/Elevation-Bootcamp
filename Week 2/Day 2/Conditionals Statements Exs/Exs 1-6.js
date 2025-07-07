let age = 20;

if (age >= 18) {
    console.log("Can vote");
} else {
    console.log("Cannot vote");
}



let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}



let temperature = 20;
let weather = "sunny";

if (weather == "sunny"){
    if(temperature > 24){
        console.log("Go to the beach");
    } else if(temperature >= 15){
        console.log("Go for a walk");
    } else {
        console.log("Stay inside and read");
    }
} else if (weather == "rainy") {
    console.log("watch a movie indoors");

} else if (weather == cloudy){
    if(temperature > 21) {
        console.log("Go hiking");
    } else{
        console.log("Visit a museum");
    }
}



let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
    console.log("Registration successful");
} else if (usernameLength < 5) {
    console.log("Username must be at least 5 characters long");
} else if (passwordLength < 8) {
    console.log("Password must be at least 8 characters long");
} else{
    console.log("You must be at least 13 years old to register");
}



let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 1 = Monday, etc.

if (customerType === "VIP") {
    console.log("You get a 20% discount");
} else if (customerType === "premium") {
    if(dayOfWeek === 6 || dayOfWeek === 0) { // Saturday or Sunday
        console.log("You get a 15% discount on weekends");
    } else {
        console.log("You get a 10% discount on weekdays");
    }
} else{
        if(purchaseAmount > 100) {
            console.log("You get a 0% discount on purchases over $100");
        } else if (purchaseAmount > 50) {
            console.log("You get a 5% discount on purchases over $50");
        }else {
            console.log("You did not get a discount");
        }
    }



let year = 2100;
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap

if(year % 4 === 0) {
    if(year % 100 === 0) {
        if(year % 400 === 0) {
            console.log(year + " is a leap year");
        } else {
            console.log(year + " is not a leap year");
        }
    } else {
        console.log(year + " is a leap year");
    }
} else {
    console.log(year + " is not a leap year");
}
    

