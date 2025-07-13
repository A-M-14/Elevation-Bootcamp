const duplicates = function(arr){

    for(let i = 0; i < arr.length; i++){

        for(let j = i + 1; j < arr.length; j++){

            if(arr[i] === arr[j])
                console.log(arr[i])
        }
    }
}


const duplicatesBetter = function(arr){

    arr.sort((a, b) => a - b);

    for(let i = 1; i < arr.length; i ++){

            if(arr[i] === arr[i - 1])
                console.log(arr[i])
        }
    }

    let arr1 = [2, 3, 1, 2, 6, 5, 8, 5]

    // duplicates(arr1)
    duplicatesBetter(arr1)



    const twoSum = function(arr, target){

        for (let i = 0; i < arr.length; i++){

            for(let j = i + 1; j < arr.length; j++){

                if(arr[i] + arr[j] === target){

                    return true;
                }
            }
        }

        return false;
    }


    const twoSumBetter = function(arr, target){

        arr.sort((a,b) => a-b)

        let i = 0;
        let j = arr.length - 1;

        while (i < j){

            let currSum = arr[i] + arr[j]

            if(currSum === target){
                return true;
            } else if(currSum < target){
                i++;
            } else{
                j--
            }     
        }

        return false;
    }



    const twoSumWithSet = function(arr, target){

        let set = new Set();

        for(let item of arr){

            set.add(target - item)
        }

        for(let item of arr){

            if(set.has(item))
                return true;
        }

        return false;
    }

    let arr2 = [11, 2, 7, 15]

    console.log(twoSumWithSet(arr2, 17))
    console.log(twoSumWithSet(arr2, 16))



    const duplicatesWithSet = function(arr){

        let set = new Set();

        let printedSet = new Set();

        for(let item of arr){

            if(set.has(item) && !printedSet.has(item)){
                console.log(item);
                printedSet.add(item)
            }
            else{
                set.add(item);
            }
        }
    }

    // arr1 = [2, 3, 1, 2, 6, 5, 8, 5]
    let arr3 = [2, 3, 1, 2, 6, 5, 8, 5, 2, 7]

    duplicatesWithSet(arr3);



