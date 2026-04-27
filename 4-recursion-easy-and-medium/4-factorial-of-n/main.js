//  Factorial of n

const factorialOfN = (n) => {
    if (n === 0) return 1
    return n * factorialOfN(n - 1)
}

console.log(factorialOfN(5)) // 120