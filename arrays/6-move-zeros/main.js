// Move Zeros

const moveZeros = (nums) => {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== x) {
                let temp = nums[x]
                nums[x] = nums[i]
                nums[i] = temp
            }
            x++
        }
    }
    return nums
}

let nums = [0, 1, 0, 3, 12]

let result = moveZeros(nums)
console.log(result);

// [ 1, 3, 12, 0, 0 ]




// Explaination for above program

//  in above question we got an array where have some 0 element we have to shift then to end and non zero element came first without changes it order




// Solution for this

//  first we are going to use this for 2 pointer method where x denote the index where over nums[i] values to be replaced
//  we we are going to use for loop for this where we map the array which nums = [0, 1, 0, 3, 12],
// when the loop will run it check in nums array over nums[i] is not a zero. if its not zero it check first both i and x is not equal, if yes just did x++, if no then we have to to swap over nums[x] values = nums[i], for this we use over swap method after doing that just do x++
// once the loop will end just we return the array nums.

