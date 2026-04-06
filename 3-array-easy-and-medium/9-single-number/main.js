// Single Number

function singleNumber(nums) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) {
            return nums[i]
        }
    }
    return hash
}


const nums1 = [3, 1, 5, 4, 1, 5, 3]

console.log(singleNumber(nums1))