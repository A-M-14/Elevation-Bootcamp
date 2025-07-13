// #1
const findFactorial = function(num) {
    if(num === 0){
        return 1;
    }

    else{
        let smallerFact = findFactorial(num-1);
        return smallerFact * num;
    }
}

console.log(findFactorial(6))




// #2
const reverseString = function(str) {

    if(str == ""){
        return "";
    }

    else{
        let smallerReversedStr = reverseString(str.slice(1));
        return smallerReversedStr + str[0];
    }


}
console.log(reverseString("Assaf"))




// #3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1, arr2) {
  if(arr1.length == 0)
    return;

  let lastItem =   arr1.pop()
  swap(arr1, arr2);
  arr2.push(lastItem)
}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]