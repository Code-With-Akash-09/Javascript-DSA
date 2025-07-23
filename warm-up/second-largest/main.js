const arr = [4, 9, 0, 2, 8, 7, 1]

const findSecondLargest = (arr) => {

    if (arr.length < 2) {
        return -1
    }

    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(findSecondLargest(arr));



// Explaination for above code

// When we are trying to find the second largest element in an array, we need to find the first largest element first.
// Then we need to find the second largest element in the remaining array.

// we going to use for loop for this 
// before we start looping throught the array we need to assign the firstLargest and secondLarget to -Infinity these because over values must be greater than the previous value also the value must be any integer greater than -Infinity

// after assigning the values we going to loop through the array. over initial condition is i = 0 and condition is i < arr.length and increment i by 1 in each iteration until the array is completely traversed.

// in loop when i is 0  we have to check if arr[i] is greater than firstLargest, if yes then we have to assign over firstlargest to arr[i] once we assign the new value to firstLargest we have to assign before assigned value of firstLargest to secondLargest which is in first when i is 0 it is -Infinity. Once we assign the new value to firstLargest we have to check if arra[i] is greater than secondLargest then we have to assign the value of arr[i] to secondLargest.

// After doing this for all the elements in the array we will have the secondLargest element in the array. then we return the secondLargest value.