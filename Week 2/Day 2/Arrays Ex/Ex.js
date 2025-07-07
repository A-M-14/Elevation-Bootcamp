const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.splice(1,2);
numbers[3] = 1;
numbers.splice(4);
numbers2 = [0, ...numbers];

console.log(numbers2);