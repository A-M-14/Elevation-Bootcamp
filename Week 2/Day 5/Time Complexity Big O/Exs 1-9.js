// Q1 : O(n)

// Q2: O(logn)

// Q3: O(1)

// Q4: O(n * m)

// Q5: O(n)

// Q9: O(1) - green, O(n) - blue, O(logn) - yellow, O(n^2) - red



// #6
const findDuplicates = function(arr){
    let objTracking = {};

    for(let num of arr){
        if(!objTracking[num]){
            objTracking[num] = 1;
        } else{
            console.log("there is a duplicate!")
            return true;
        }
    }
    return false;
}



// #7
let Employees = {
    ax01: {
        name: "sassi",
        age: 54,
        salary: 2540
    },

    qs84: {
        name: "Lucy",
        age: 2.5,
        salary: 3000
    }
}


const findEmployeeSalary = function (id){
    return Employees[id].salary;
}

console.log(findEmployeeSalary("qs84"));



// #8
let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]

const findIndex = function(numbers, num){

    let leftIndx = 0;
    let currIndx = Math.floor(numbers.length / 2);
    let rightIndx = numbers.length - 1;

    while(numbers[currIndx] != num){

        if(numbers[currIndx] > num){
            rightIndx = currIndx;
            
        } else{
            leftIndx = currIndx;
        }

        currIndx = Math.floor((rightIndx + leftIndx) / 2);
    }

    return currIndx;
}

console.log(findIndex(numbers, 35))