// Move Zeros sessions

const nums = [0, 1, 0, 3, 12]

function moveZeros(nums) {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i]
            x++
        }
    }

    for (let i = x; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}

console.log(moveZeros(nums)) //  [ 1, 3, 12, 0, 0 ]Copilot