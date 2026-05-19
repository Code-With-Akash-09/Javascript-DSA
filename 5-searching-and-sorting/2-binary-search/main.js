// Binary Search

// Binary search only apply to the sorted array.

const arr = [-1, 0, 3, 5, 9, 12]
const target = 9 

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (right >= left) {
        let middle = Math.floor((left + right) / 2)   
        
        if (target === arr[middle]) {
            return middle
        } else if (target < arr[middle]) { 
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
}

console.log(binarySearch(arr, target));
