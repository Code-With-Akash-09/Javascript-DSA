// Missing Number


const missingNumber = (nums) => {
    let n = nums.length
    let totalSum = n * (n + 1) / 2

    let partialSum = 0;

    for (let i = 0; i < n; i++) {
        partialSum = partialSum + nums[i]
    }

    return totalSum - partialSum
}

let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]

let result = missingNumber(nums)
console.log(result);

//  Output = 3



// Explainatin for above code

// We have one array where we have to find missing numbers from that. so as we see in the array all numbers are in distinct sequence

// so we use the solution n * (n + 1) / 2 by this formula first we calculate total of this array as distinct number we got the total then we calculate the total of over given array numbers by for loop we update over partial value by adding all i index values
