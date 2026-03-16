// Remove duplicates session

// Remove dupliates form the sorted array


function removeDuplicates(nums) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1
            nums[x] = nums[i]
        }
    }
    return x + 1
}



const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
const nums1 = [0, 1, 1, 4, 4, 6, 7, 9, 9]

console.log(removeDuplicates(nums)); // 5
console.log(removeDuplicates(nums1)); // 6


// Approach(Two Pointer Technique)

// We use the two - pointer approach.
// x → tracks the position of the last unique element
// i → iterates through the array to check new elements


// Steps

// 1. Start with x = 0, because the first element is always unique.
// 2. Traverse the array using a loop (i pointer).
// 3. Compare the current element nums[i] with nums[x].
// 4. If nums[i] is greater, it means we found a new unique element.
// 5. Move the unique pointer forward(x++).
// 6. Place the new unique element at nums[x].
// 7. Continue until the array ends.
// 8. Return x + 1, which represents the count of unique elements.