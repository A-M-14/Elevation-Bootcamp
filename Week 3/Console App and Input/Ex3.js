const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userData = {};

rl.question("What's your name? ", (name) => {
  userData.name = name;

  rl.question("What's your email? ", (email) => {
    userData.email = email;

    rl.question("How old are you? ", (age) => {
      userData.age = age;

      rl.question("What's your favorite color? ", (color) => {
        userData.color = color;

        console.log("\nRegistration Summary:");
        console.log(`Name: ${userData.name}`);
        console.log(`Email: ${userData.email}`);
        console.log(`Age: ${userData.age}`);
        console.log(`Favorite Color: ${userData.color}`);

        rl.close();
      });
    });
  });
});
