// Recursion 101

// Function call itseld to solve smaller versions of the same problem

// in this having 2 parts of Recursion
// 1. Base Case - Stop condition (when to stop calling itself)
// 2. Recursive Case - Part where function call itself


// Stack Overflow

function fun(num) {
    if (num === 0) {
        return
    }
    console.log(num);
    num = num - 1
    fun(num)
}

fun(5)

// 5
// 4
// 3
// 2
// 1