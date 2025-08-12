# Recursion

## What is Recursion?
function call itself to solve smaller versions of the same problem.


## Two parts of recursion
1. Base case - stop condition (when to stop calling itself)
2. Recursive case - Where function call itself


## Real Life Example
1. Queue of people
2. Comment threds
3. Organizational hierarchy


## Recursion in JavaScript

```javascript
function func() {
    console.log("Hello World");
    func()
}

func();
```
This function prints "Hello World" in infinite loop calling itselt again and again it's called recursion.


## Recursion & Call Stack
```javascript
function fun(nums){
    if(nums === 0) return;
    console.log(nums);
    nums = nums - 1;
    fun(nums)
}
a = 5 
fun(a)
```
Above code will print numbers till the number is became 0, so call stack will be created, this is called the recursion & call stack. When we give base case and recursive funtion then this phenomenon will happen.


## Stack Overflow
When we call a function which is calling itself again and again, it will create a call stack. When this call stack becomes too large, it will throw an error called Stack Overflow.


## Common mistakes in recursion
1. Missing base case - stack overflow
2. Not simplifying the input - it never reaches the base case
3. Too deep recursion - large input
4. Keeping in mind time complexity


## When to use recursion
- Problems can be broken into small sub problems
- Tree and Graph
- Backtracking, DP, Divide and Conquer