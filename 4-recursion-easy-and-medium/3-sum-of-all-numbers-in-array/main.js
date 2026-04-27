// Sum of all numbers in an array

const arr = [5, 3, 2, 0, 1]

function sumOfAllNumbersInArray(n) {
    if (n === 0) return arr[0]
    return arr[n] + sumOfAllNumbersInArray(n - 1)
}

console.log(sumOfAllNumbersInArray(arr.length - 1)) // 11




// Get the sum of all odd numbers in an array

const arr1 = [5, 3, 2, 10, 1]

const sumOfAllOddNumbersInArray = (n) => {
    const isOdd = arr1[n] % 2 !== 0
    if (n === 0) return isOdd ? arr1[0] : 0
    return (isOdd ? arr1[n] : 0) + sumOfAllOddNumbersInArray(n - 1)
}

console.log(sumOfAllOddNumbersInArray(arr1.length - 1)) // 9