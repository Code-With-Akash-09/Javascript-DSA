// Reverse integer session

function reverseInteger(n) {


    let isNeg = false

    if (n < 0) {
        isNeg = true
        n = Math.abs(n)
    }

    let rev = 0;
    while (n > 0) {
        let last = n % 10
        rev = (10 * rev) + last
        n = Math.floor(n / 10)
    }
    let limit = Math.pow(2, 31)

    if (rev > limit || rev < -limit) return 0

    return isNeg ? -rev : rev
}

const result = reverseInteger(-789)
console.log(result);
