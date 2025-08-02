# 🔁 For Loop Questions in JavaScript

## 📌 Question 1

**Write a function that searches for an element in an array and returns the index. If the element is not present, return **\`\`**.**

```javascript
let arr1 = [4, 2, 0, 10, 8, 30];

const searchElement = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
};

console.log(searchElement(arr1, 0)); // Output: 2
```

### ✅ Code Explanation

* We define an array `arr`.
* The `searchElement` function takes two parameters: the array and the element to search.
* A `for` loop iterates through the array.
* If the current element matches the target, it returns the index.
* If the loop finishes without finding the element, `-1` is returned.
* **Note:** Avoid putting `else` inside the loop; handle the fallback return (`-1`) outside the loop for accurate logic.

---

## 📌 Question 2

**Write a function that returns the number of negative numbers in an array.**

```javascript
let arr2 = [2, -9, 17, 0, 1, -10, -4, 8];

const negativeNumbers = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    return count;
};

console.log(negativeNumbers(arr2)); // Output: 3
```

### ✅ Code Explanation

* A `count` variable tracks how many negative numbers are found.
* The loop checks each element, and if it's less than 0, the count is increased.
* The final count is returned after the loop ends.

---

## 📌 Question 3

**Write a function that returns the largest number in an array.**

### ✅ Using Recursive (Sort-based) Approach

```javascript
let arr3 = [5, 0, 7, 10, 8, 17, 1];

const largestNumber1 = (arr) => {
    const newArr = arr.sort((a, b) => a - b);
    return newArr[newArr.length - 1];
};

console.log(largestNumber(arr)); // Output: 17
```

### ✅ Using a `for` loop

```javascript
let arr4 = [5, 0, 7, 10, 8, 17, 1];

const largestNumber2 = (arr) => {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};

console.log(largestNumber1(arr3)); // Output: 17
console.log(largestNumber2(arr4)); // Output: 17
```

### 💡 Note

* Sorting is easier but not optimal for performance in large arrays.
* The `for` loop method is faster and more efficient as it checks values one by one.
