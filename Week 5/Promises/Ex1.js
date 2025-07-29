// #1
function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 0) {
        reject(new Error("Invalid number"));
      } else if (num % 7 === 0) {
        resolve("Lucky!");
      } else {
        resolve("Not lucky");
      }
    }, 800);
  });
}

checkLuckyNumber(14)
  .then(result => console.log(result))   // Lucky!
  .catch(err => console.error(err.message));

checkLuckyNumber(10)
  .then(result => console.log(result))   // Not lucky
  .catch(err => console.error(err.message));

checkLuckyNumber(-5)
  .then(result => console.log(result))
  .catch(err => console.error(err.message)); // Invalid number