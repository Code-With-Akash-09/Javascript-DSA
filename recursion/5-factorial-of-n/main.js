// Factorial of n

const fact = (n) => {
    if (n == 1) return 1
    return n * fact(n - 1)
}

const result = fact(5);
console.log(result);


// Explaination for above code

// In the way of factorial to find the value of n, we need to multiply the valus of n with (n - 1) until the value of n is 1. like below example 

// 5! = 5 * 4 * 3 * 2 * 1 = 120 

// similarly, we can find the factorial of n by multiplying the value of n with (n - 1) until the value of n is 1.

// so we craete a function fact(n) in which it take once n as number and return the factorial of n.
// in recursion, first we add base condition that if n is 1, then return 1 and if n is not 1, then return n * fact(n - 1)