// Sum of first n numbers

//  Question is find the sum of first n natural numbers 
// 5 + 4 + 3 + 2 + 1 .... + n = ?

const findSumOfFirstNNumbers = (n) => {
    if (n === 0) return 0;
    return n + findSumOfFirstNNumbers(n - 1)
}

const result = findSumOfFirstNNumbers(5);
console.log(result);


// Explaination for Above function 
// to find the sum of first n numbers, we are using recursion.
// In the function first we added base case to the function where if the n value is 0 it return 0.
// if n is not 0 then we are retrun n + sum(n - 1)