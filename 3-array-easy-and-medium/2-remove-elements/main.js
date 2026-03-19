// Remove Element


function removeElement(nums, val) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i]
            x = x + 1
        }
    }
    return x
}

const nums1 = [3, 1, 3, 4, 3, 3, 3, 7]
const val1 = 3

const nums2 = [3, 2, 1, 5, 3, 4, 8, 3]
const val2 = 3

const result1 = removeElement(nums1, val1)
const result2 = removeElement(nums2, val2)

console.log(result1); // 3
console.log(result2); // 5


// Explaination -

// The function removes all occurrences of a given value val from an array in -place and returns the count of remaining elements.

// It uses a two - pointer approach where one pointer iterates through the array, and the other tracks the position to place valid(non - val) elements.Whenever an element not equal to val is found, it is moved to the current valid position, and the pointer is advanced.

// By the end of the process, all elements not equal to val are shifted to the beginning of the array, and the function returns their total count.