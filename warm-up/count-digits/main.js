// Count Digits

function countDigits(n) {

    // If the value is 0 then it will return 1
    if (n == 0) return 1

    // If the value is there but it's negative then we have to convert to negeative
    n = Math.abs(n)

    let count = 0

    while (n > 0) {
        n = Math.floor(n / 10)
        count++
    }
    return count
}

let nums = -89
let result = countDigits(nums);
console.log(result);
