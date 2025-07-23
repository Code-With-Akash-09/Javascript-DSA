// For Loop Questions

// Question 1
// Write a function that searches for an element in an array and returns the index , if the element is not present then return -1

let arr = [4, 2, 0, 10, 8, 30]

const searchElement = (arr, element) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

console.log(searchElement(arr, 0))

// The output of the above example is : 2

// Code Explanation

//  In the above example we have defined an array called arr we have a task to find the index of an element in the array if the element is not present then return -1
// So we created function where we takes arra and element as parameters then we added for loop where we have initialized the variable i with 0 and incremented it by 1 each time the loop runs and the condition is that the i is less than the length of the array and if the array element index is equal to the given element then it will return the index of the element and if not if we added else statement next to the if statement then it will return -1 and the program will not print anything. so avoid else condition in for loop if you want to return -1 do that outside the for loop. 




// Question 2
// Write a function that returns the number of negative numbers in an array

let arr1 = [2, -9, 17, 0, 1, -10, -4, 8]

const negativeNumbers = (arr) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }
    return count
}

console.log(negativeNumbers(arr1))



// Question 3

// Write a function that return the largest number in a array

let arr2 = [5, 0, 7, 10, 8, 17, 1]

// Using recursive function

const largestNumber1 = (arr) => {
    const newArr = arr.sort((a, b) => a - b)
    return newArr[newArr.length - 1]
}

// Using for loop
const largestNumber2 = (arr) => {
    let largest = -1
    for (let i = 0; i, i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestNumber1(arr2))
console.log(largestNumber2(arr2))
