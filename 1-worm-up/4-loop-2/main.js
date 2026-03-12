//  Loop 2 session


// 1. Write a fucntion tha searches for an element in an array and returns the index, it the element is not found return -1.

let arr1 = [4, 2, 0, 10, 8, 30]

function searchElement(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

console.log("Search Element", searchElement(arr1, 30)) // 5
console.log("Search Element", searchElement(arr1, 20)) // -1
console.log("Search Element", searchElement(arr1, 10)) // 3

// Explaination: to search element index in array we make for loop on the array, while running the loop we are checking of each index is the current index element is equal to an our given element if yes then return the index of that element if not then after finish the loop we return -1;  if you get an question why didn't we write the else condtion which return -1 inside the for loop, so the reason is that if we do that loop is run if our given element is present in the 1st index then only it return the index other wise the it return -1 because of loop ended there so our loop not goes to next index.







// 2. Write a function that returns the number of negative numbers in an array.

let arr2 = [2, -9, 17, 0, 1, -10, -4, 8, -1]

function countNegative(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            ++count
        }
    }
    return count
}

console.log("Negative Element Count", countNegative(arr2)) // 4

// Explaination: to the count of element we are using the for loop before start loop we create one variable which will store the count so use create count variable, the we start the loop, when the loop is running it check on every index is current index is less that 0 if yes then it will return the count which will be incremented by 1 on every negative number got let after loop finish it will return the total count







// 3. Write a function that returns the largest number in an array

let arr3 = [5, 0, 10, 8, 17, 100]
let arr4 = [-5, -10, -8, -17, -100]

function largestNumber(arr) {
    let largestNumber = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i]
        }
    }
    return largestNumber
}

console.log("Largest Number", largestNumber(arr3))
console.log("Largest Number", largestNumber(arr4))

// Explaination: to find the largest number in function we declare the one variable with -Infinity which the store the value of largest number then we made the loop on the arr on each index element we are checking the arr[i] element is greater than our largestNumber if yes then set the value of largest to that arr index element this will continue till the loop will end once the loop will end it will return the largest number of array.






// 4. Write a function that return the smallest number in an array

let arr5 = [12, 32, 19, 3, 5, 7, 18]

function smallestNumber(arr) {
    let smallestNumber = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= smallestNumber) {
            smallestNumber = arr[i]
        }
    }
    return smallestNumber
}

console.log("Smallest Number", smallestNumber(arr5))

// Explaination: to find the smallest numnber in function we decalre the one varibale with Infinity which the store the value of smallest number then we made the loop in the arr in each index element we are checking the the arr[i] element is smaller than our smallestNumber if yes then set the value of largest to that arr index element this will continue till the loop will end once the loop will end it will return the smallest number in array.