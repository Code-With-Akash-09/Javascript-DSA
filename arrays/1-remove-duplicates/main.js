// Remove Duplicates

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

const removeDuplicates = (nums) => {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        // if (nums[i] > nums[x]) {
        //     x = x + 1
        //     nums[x] = nums[i]
        // }

    }
    return x + 1
}

let result = removeDuplicates(nums)

console.log(result);

// The Explaination for Above code

//  we have an array where we have to find out unique interger from un sorterd array and get the count of it

//  So have have the solution for this using 2 poitner method

// We are going to set over pointer as x to 0

// after doing that we will going to run for loop in that will check where the nums[i] which is at the start 0 nums[x] which is also 0.

// when loop will run i is 0 the over values of in array which is nums is 0 index value is 0 so over first index will be 0 then the loop i will be increment by 1 then i become the 1 check array nums[i] which is now nums[1] values is 0 and the nums[x] which is also 0 so nums[i] is not greater than the nums[x] so over loop will be incrementd the i values to 1 so over i became a 2 then over nums[i] which is now nums[2] which is now 1 it check with nums[x] check which is 0, it check nums[i] is greater than nums[x] over i 1 and x is 0 so its greater then we have to shift over previous x value which 0 to x + 1 so it became 1 and then we have to updated index of an array nums so over array nums[x] is now nums[i] and process will continur till the loop end 


