// #1
function isEven(number){
    return number % 2 == 0;
}

console.log(isEven(16447));



// #2
function printOddNumbers(numbers){
    for(number of numbers){
        if(!isEven(number))
            console.log(number);
    }
}

let arrOfNums = [1, 5, -9, 26, 4, 7, 2, 78, 79];
printOddNumbers(arrOfNums);



// #3
function isNumberInArray(nums, num){
    for(let number of nums){
        if(number === num)
            return true;
    }
    return false;
}

console.log(isNumberInArray(arrOfNums, 5));



// #4
let calculator = {
    add: function(a, b){
        return a + b;
    },
    subtract: function(a, b){
        return a- b;
    }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42




// #5
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

function increaseByNameLength(money, name){
    return money * name.length;
}

function makeRegal(name){
    return "His Royal Highness, " + name;
}




// #6
function armstrong3DigitNumbers() {
    for (let num = 100; num <= 999; num++) {
        let ones = num % 10;
        let tens = Math.floor((num / 10) % 10);
        let hundreds = Math.floor(num / 100);

        if (ones ** 3 + tens ** 3 + hundreds ** 3 === num) {
            console.log(num);
        }
    }
}

armstrong3DigitNumbers();
