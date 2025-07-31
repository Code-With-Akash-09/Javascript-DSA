// Reverse Integer

const reverseInterger = (x) => {
    let xCopy = x
    x = Math.abs(x)

    let rev = 0

    while (x > 0) {
        let last = x % 10
        rev = (10 * rev) + last
        x = Math.floor(x / 10)
    }

    if (rev > Math.pow(2, 31) - 1) return 0
    else return xCopy < 0 ? -rev : rev
}

let nums = 2147483648
let result = reverseInterger(nums)
console.log(result);
