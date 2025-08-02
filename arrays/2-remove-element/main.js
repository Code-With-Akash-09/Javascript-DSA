// Remove Elements

let nums = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2

const removeElement = (nums, val) => {
    let x = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i]
            x = x + 1
        }
    }
    return x
}


let result = removeElement(nums, val)

console.log(result);