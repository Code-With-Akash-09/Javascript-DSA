// Reverse String

// Write a function that reverse a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.


const reverseString = (s) => {
    let len = s.length
    let halfLen = Math.floor(len / 2)

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i]
        s[i] = s[len - 1 - i]
        s[len - 1 - i] = temp
    }
    return s
}

const s = ["h", "e", "l", "l", "o"];
const s1 = ["a", "k", "a", "s", "h", "a", "t", "a"];
const s2 = ["a", "k", "a", "s", "h"];

const result = reverseString(s) // [ 'o', 'l', 'l', 'e', 'h' ]
const result1 = reverseString(s1) // [ 'a', 't', 'a', 'h', 's', 'a', 'k', 'a']
const result2 = reverseString(s2) // [ 'h', 's', 'a', 'k', 'a' ]

console.log(result);
console.log(result1);
console.log(result2);
