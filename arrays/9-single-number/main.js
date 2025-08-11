//  Single Number

const nums = [4, 1, 2, 1, 2]

const singleNumber = (nums) => {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    return xor
}

let result = singleNumber(nums)
console.log(result)