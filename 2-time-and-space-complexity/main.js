// Time Complexity session

// Define: It is used to measure efficiency of algorithm in terms of speed, as the input size grows/




// 1. O(n) - Linear Search

// for linear search we are using for loop where the loop will run the x = n times, it run till the x find in n.
// for(let i = 0; i < n; i++)





// 2. O(log n) - Binary Search

// in linear search loop will run like it find in array where the element in between the middle element in its below or above if above then we have to do 1/2 till the find x
// n , n/2, 2/4 ...... 1
// x = log n    





// 3. O(n^2) -

// this time complexity happen when 2 loop in loop are running, so both of n * n will run the n^2 times that why we got this.
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         console.log(i);
//     }
// }
// x = n * n 





// 4. O(n log n) - Merge sort

// this time complexity happen when you are running loop inside doing binary search
// for (let i = 0; i < n; i++){
//     n, 1/2, 1/4 ...... 1
// }
// x = n * log n





// 5. O(n^3)

// this time complexity happpen when in for loop we runing for loop inside of that running one more for loop then this complexity happen.





// 6. O(2^n)

// 7, O(n!) 


// 8. O(1) - Constant time complexity





// Which are more efficient 

// O(1) >> O(log n) >> O(n) >> O(n log n) >> O(n^2) >> O(2^n) >> O(n!)







// Space Complexity



// 1. find the max in array 

// function findMaxArray(arr) {
//     let max = arr[i]

//     for (let i = 0; i < arr.lenth; i++) {
//         if (arr[i] = max) max = arr[i]
//     }
//     return max
// }

// Time Complexity = O(n)
// Space Complexity = O(1)




// 2. Dobble the array

// function doubleArray(arr) {
//     let newArray = []

//     for (let i = 0; i < arr.length; i++) {
//         newArray[i] = arr[i] * 2
//     }
//     return newArray
// }

// Time Complexity = O(n)
// Space Complexity = O(n) 