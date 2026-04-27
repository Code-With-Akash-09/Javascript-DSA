# Sum of Odd Numbers in Array (Recursion)

## Problem Statement

Write a recursive function `sum(arr, n)` that calculates the **sum of all odd numbers** in an array up to index `n`.

---

# Example

**Input**

```
arr = [5, 2, 6, 1, 3]
```

**Odd Numbers**

```
5, 1, 3
```

**Output**

```
9
```

---

# Concepts

## Recursion
The function repeatedly checks whether `arr[n]` is **odd** and includes it in the sum if true.

---

## Base Case

```
if (n == 0) return arr[0] if odd else 0
```

Stops recursion when reaching the first element.

---

## Recursive Case

```
return (arr[n] if odd) + sum(arr, n - 1)
```

---

# Approach

1. Check if `arr[n]` is odd:
   ```
   arr[n] % 2 != 0
   ```
2. If odd:
   - Add it to recursive result
3. Else:
   - Skip it
4. Continue recursion until `n == 0`

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
= 3 + 1 + 0 + sum(1)
= 3 + 1 + 0 + 0 + sum(0)
= 3 + 1 + 0 + 0 + 5
```

### Output

```
9
```

---

# Visualisation

![Sum Odd Recursion Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function sumOdd(arr, n) {

    let isOdd = arr[n] % 2 !== 0;

    if (n === 0) return isOdd ? arr[0] : 0;

    return (isOdd ? arr[n] : 0) + sumOdd(arr, n - 1);
}

let arr = [5, 2, 6, 1, 3];

console.log(sumOdd(arr, arr.length - 1)); // 9
```

---

## Python

```python id="python-sum-odd-recursion"
def sum_odd(arr, n):

    is_odd = arr[n] % 2 != 0

    if n == 0:
        return arr[0] if is_odd else 0

    return (arr[n] if is_odd else 0) + sum_odd(arr, n - 1)


arr = [5, 2, 6, 1, 3]

print(sum_odd(arr, len(arr) - 1))  # 9
```

---

## Java

```java id="java-sum-odd-recursion"
class Main {

    static int sum(int[] arr, int n) {

        boolean isOdd = arr[n] % 2 != 0;

        if (n == 0) return isOdd ? arr[0] : 0;

        return (isOdd ? arr[n] : 0) + sum(arr, n - 1);
    }

    public static void main(String[] args) {

        int[] arr = {5, 2, 6, 1, 3};

        System.out.println(sum(arr, arr.length - 1)); // 9
    }
}
```

---

## C++

```cpp id="cpp-sum-odd-recursion"
#include <iostream>
using namespace std;

int sum(int arr[], int n) {

    bool isOdd = arr[n] % 2 != 0;

    if (n == 0) return isOdd ? arr[0] : 0;

    return (isOdd ? arr[n] : 0) + sum(arr, n - 1);
}

int main() {

    int arr[] = {5, 2, 6, 1, 3};

    int len = sizeof(arr) / sizeof(arr[0]);

    cout << sum(arr, len - 1) << endl; // 9

    return 0;
}
```

---

## C

```c id="c-sum-odd-recursion"
#include <stdio.h>

int sum(int arr[], int n) {

    int isOdd = arr[n] % 2 != 0;

    if (n == 0) return isOdd ? arr[0] : 0;

    return (isOdd ? arr[n] : 0) + sum(arr, n - 1);
}

int main() {

    int arr[] = {5, 2, 6, 1, 3};

    int len = sizeof(arr) / sizeof(arr[0]);

    printf("%d", sum(arr, len - 1)); // 9

    return 0;
}
```

---

## C#

```csharp id="cs-sum-odd-recursion"
using System;

class Program {

    static int Sum(int[] arr, int n) {

        bool isOdd = arr[n] % 2 != 0;

        if (n == 0) return isOdd ? arr[0] : 0;

        return (isOdd ? arr[n] : 0) + Sum(arr, n - 1);
    }

    static void Main() {

        int[] arr = {5, 2, 6, 1, 3};

        Console.WriteLine(Sum(arr, arr.Length - 1)); // 9
    }
}
```

---

# Summary

- Uses **Recursion**
- Filters values using condition (odd check)
- Breaks array into smaller subproblems

```
Time Complexity: O(n)
Space Complexity: O(n)
```