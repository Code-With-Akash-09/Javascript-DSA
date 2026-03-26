// Max consecutive ones


function findMaxConsecutive(nums) {
    let currCount = 0;
    let maxcount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++
        } else {
            maxcount = Math.max(currCount, maxcount)
            currCount = 0
        }
    }
    return Math.max(currCount, maxcount)
}

const nums1 = [1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1]
const nums2 = [1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1]

console.log(findMaxConsecutive(nums1)); // 4
console.log(findMaxConsecutive(nums2)); // 2