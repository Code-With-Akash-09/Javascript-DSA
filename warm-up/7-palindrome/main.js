// Palindrome


const isPalindrome = (x) => {
    if (x < 0) return false

    let xCopy = x
    let rev = 0

    while (x > 0) {
        let rem = x % 10
        rev = (10 * rev) + rem
        x = Math.floor(x / 10)
    }

    return rev == xCopy
}

let nums = 898
let result = isPalindrome(nums)
console.log(result);
