// Max Consecutive Ones

const nums = [1, 1, 0, 1, 1, 1]

let maxConsectiveOnes = (nums) => {
    let currCount = 0
    let maxCount = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currCount++
        }
        else {
            maxCount = Math.max(currCount, maxCount)
            currCount = 0
        }
    }
    return Math.max(currCount, maxCount)
}

let result = maxConsectiveOnes(nums)
console.log(result);