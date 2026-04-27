
# Sum of Array Elements (Recursion)

## Problem Statement

Write a function `sum(arr, n)` that calculates the **sum of all elements in an array** using recursion.

The function sums elements from index **0 to n**.

---

# Example

**Input**

```
arr = [5, 2, 6, 1, 3]
```

**Process**

```
5 + 2 + 6 + 1 + 3 = 17
```

**Output**

```
17
```

---

# Concepts

## Recursion
The function calls itself by reducing the problem size.

- It adds the current element `arr[n]`
- Then calls `sum(arr, n - 1)`

---

## Base Case

```
if (n == 0) return arr[0];
```

Stops recursion when only one element is left.

---

## Recursive Case

```
return arr[n] + sum(arr, n - 1);
```

---

# Approach

1. If `n == 0`, return `arr[0]`
2. Otherwise:
   ```
   return arr[n] + sum(arr, n - 1)
   ```
3. Recursion continues until `n = 0`

---

# Time Complexity

```
O(n)
```

- One recursive call per element

---

# Space Complexity

```
O(n)
```

- Due to recursive call stack

---

# Dry Run

### Input

```
arr = [5, 2, 6, 1, 3]
n = 4
```

### Function Calls

```
sum(4)
= 3 + sum(3)
= 3 + 1 + sum(2)
= 3 + 1 + 6 + sum(1)
= 3 + 1 + 6 + 2 + sum(0)
= 3 + 1 + 6 + 2 + 5
```

### Output

```
17
```

---

# Visualisation

![Array Sum Recursion Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function sum(arr, n) {

    if (n === 0) return arr[0];

    return arr[n] + sum(arr, n - 1);
}

let arr = [5, 2, 6, 1, 3];

console.log(sum(arr, arr.length - 1)); // 17
```

---

## Python

```python id="python-array-sum-recursion"
def sum_array(arr, n):

    if n == 0:
        return arr[0]

    return arr[n] + sum_array(arr, n - 1)


arr = [5, 2, 6, 1, 3]

print(sum_array(arr, len(arr) - 1))  # 17
```

---

## Java

```java id="java-array-sum-recursion"
class Main {

    static int sum(int[] arr, int n) {

        if (n == 0) return arr[0];

        return arr[n] + sum(arr, n - 1);
    }

    public static void main(String[] args) {

        int[] arr = {5, 2, 6, 1, 3};

        System.out.println(sum(arr, arr.length - 1)); // 17
    }
}
```

---

## C++

```cpp id="cpp-array-sum-recursion"
#include <iostream>
using namespace std;

int sum(int arr[], int n) {

    if (n == 0) return arr[0];

    return arr[n] + sum(arr, n - 1);
}

int main() {

    int arr[] = {5, 2, 6, 1, 3};

    int len = sizeof(arr) / sizeof(arr[0]);

    cout << sum(arr, len - 1) << endl; // 17

    return 0;
}
```

---

## C

```c id="c-array-sum-recursion"
#include <stdio.h>

int sum(int arr[], int n) {

    if (n == 0) return arr[0];

    return arr[n] + sum(arr, n - 1);
}

int main() {

    int arr[] = {5, 2, 6, 1, 3};

    int len = sizeof(arr) / sizeof(arr[0]);

    printf("%d", sum(arr, len - 1)); // 17

    return 0;
}
```

---

## C#

```csharp id="cs-array-sum-recursion"
using System;

class Program {

    static int Sum(int[] arr, int n) {

        if (n == 0) return arr[0];

        return arr[n] + Sum(arr, n - 1);
    }

    static void Main() {

        int[] arr = {5, 2, 6, 1, 3};

        Console.WriteLine(Sum(arr, arr.Length - 1)); // 17
    }
}
```

---

# Summary

- Uses **Recursion**
- Base case prevents infinite calls
- Breaks array into smaller subproblems

```
Time Complexity: O(n)
Space Complexity: O(n)
```