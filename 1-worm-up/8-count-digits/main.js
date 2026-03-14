// Count digits session

// Write function that return the count of digit in number

function countDigit(n) {

    // check the number is 0 
    if (n === 0) return 1

    // Handling negative number
    n = Math.abs(n)

    let count = 0;

    while (n > 0) {
        n = n / 10
        n = Math.floor(n)
        count++
    }
    return count
}

const result = countDigit(-23)
console.log(result);
