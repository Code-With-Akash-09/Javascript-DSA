// Missing Numbers

function findMissingNumber(nums) {
    let n = nums.length
    let totalSum = n * (n + 1) / 2
    let partialSum = 0

    for (let i = 0; i < n; i++) {
        partialSum = partialSum + nums[i]
    }
    return totalSum - partialSum
}

const nums1 = [3, 0, 1]
const nums2 = [0, 1]

console.log(findMissingNumber(nums1)); // 2 
console.log(findMissingNumber(nums2)); // 2

