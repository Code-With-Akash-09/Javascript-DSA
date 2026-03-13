// Second larget Number session


// Find the second larget number of an array

let arr1 = [4, 10, 9, 0, 2, 8, 7, 1]
let arr2 = [7, 3]
let arr3 = [7]

function findSecondLarget(arr) {

    if (arr.length < 2) {
        return "To find second largest number we need atleast 2 elements"
    }

    let firstLarget = -Infinity;
    let secondLarget = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLarget) {
            secondLarget = firstLarget
            firstLarget = arr[i]
        }
        else if (arr[i] > secondLarget) {
            secondLarget = arr[i]
        }
    }

    return secondLarget
}

console.log("Second largest:", findSecondLarget(arr1))
console.log("Second largest:", findSecondLarget(arr2))
console.log("Second largest:", findSecondLarget(arr3))


// Explaination: to find the second largest number we have to create 2 variable 1st is firstLargest and 2nd is secondLargest we will set them to -Infinity, it because over number can be negative also, next we do for loop on the arr in that we have to check first arr[i] element is greater that firstLargest if yes then first we have to set our secondLargest to firstLargest and then set firstLargest to be as arr[i] element then we have to check arr[i] greater than secondLargest then if yes then we have to set secondLargest to as a arr[i] element after finishing this loop we have to return secondLargest.