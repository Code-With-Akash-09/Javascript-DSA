# JavaScript `for` Loop Guide

## 📘 Introduction

In JavaScript, the `for` loop is used to repeat a block of code a certain number of times.

### 🔁 Structure

A typical `for` loop has three parts:

1. **Initialization** – The starting value of the loop.
2. **Condition** – The loop runs as long as this condition is true.
3. **Increment/Decrement** – Changes the loop counter after each iteration.

---

## 🧪 Example 1: Basic `for` Loop

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Hello World");
}
```

### 🧾 Explanation:
- Starts with `i = 0`
- Runs while `i < 5`
- Increments `i` by 1 each time

### 🖨️ Output:
```
Hello World
Hello World
Hello World
Hello World
Hello World
```

---

## 🧪 Example 2: Starting From 3

```javascript
for (let i = 3; i < 5; i++) {
    console.log("Hello World");
}
```

### 🧾 Explanation:
- Starts with `i = 3`
- Runs until `i = 4` (because 5 is not less than 5)

### 🖨️ Output:
```
Hello World
Hello World
```

---

## 🧪 Example 3: Increment by 2

```javascript
for (let i = 2; i < 9; i = i + 2) {
    console.log("Hello World");
}
```

### 🧾 Explanation:
- Starts from 2
- Increments by 2: 2 → 4 → 6 → 8
- Stops before reaching 9

### 🖨️ Output:
```
Hello World
Hello World
Hello World
Hello World
```

---

## 🧪 Example 4: Decrementing Loop

```javascript
for (let i = 5; i > 0; i--) {
    console.log("Hello World");
}
```

### 🧾 Explanation:
- Starts at 5
- Decrements until `i > 0` is false

### 🖨️ Output:
```
Hello World
Hello World
Hello World
Hello World
Hello World
```

---

## 🧪 Example 5: Condition False Initially

```javascript
for (let i = 5; i < 4; i++) {
    console.log("Hello World 5");
}
```

### 🧾 Explanation:
- `i` is 5
- Condition `5 < 4` is false at start

### 🖨️ Output:
```
(no output)
```

---

## 🧪 Example 6: Infinite Loop

```javascript
for (let i = 1; i > 0; i++) {
    console.log("Hello World 6");
}
```

### ⚠️ Warning:
- The condition `i > 0` will always be true
- `i` keeps increasing forever

### 🖨️ Output:
```
Hello World 6
Hello World 6
Hello World 6
... (continues infinitely)
```

> **This is called an infinite loop. Avoid it unless necessary.**

---

## 🧪 Example 7: Calling a Function in a Loop

```javascript
const great = () => {
    console.log("Namaste");
}

for (let i = 0; i < 3; i++) {
    great();
}
```

### 🧾 Explanation:
- The `great` function logs `"Namaste"`
- It's called 3 times by the loop

### 🖨️ Output:
```
Namaste
Namaste
Namaste
```

---

## 🧪 Example 8: Looping Through an Array

```javascript
let arr = [10, 6, 2, 0, 8, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### 🧾 Explanation:
- Loops from `i = 0` to `i = arr.length - 1`
- Prints each element of the array

### 🖨️ Output:
```
10
6
2
0
8
3
```

---

## ✅ Summary

The `for` loop is useful for:
- Repeating tasks a known number of times
- Looping through arrays
- Executing functions repeatedly

Always ensure:
- Your loop has a stopping condition
- Avoid infinite loops unless intentionally required
