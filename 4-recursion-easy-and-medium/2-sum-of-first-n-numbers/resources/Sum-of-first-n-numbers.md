# Sum of First N Natural Numbers (Recursion)

## Problem Statement

Write a function `sum(n)` that calculates the **sum of the first n natural numbers** using recursion.

---

# Example

**Input**

```
n = 5
```

**Process**

```
5 + 4 + 3 + 2 + 1 = 15
```

**Output**

```
15
```

---

# Concepts

## Recursion
A technique where a function calls itself with a **smaller subproblem**.

## Base Case
Stops recursion to prevent infinite calls.

```
if (n === 0) return 0;
```

## Recursive Case

```
return n + sum(n - 1);
```

---

# Approach

1. Use recursion to reduce the problem
2. Base case:
   ```
   if (n === 0) return 0;
   ```
3. Recursive case:
   ```
   return n + sum(n - 1);
   ```
4. The function keeps calling itself until `n` becomes `0`

---

# Time Complexity

```
O(n)
```

- One function call for each value from `n` to `0`

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
n = 5
```

### Function Calls

```
sum(5)
= 5 + sum(4)
= 5 + 4 + sum(3)
= 5 + 4 + 3 + sum(2)
= 5 + 4 + 3 + 2 + sum(1)
= 5 + 4 + 3 + 2 + 1 + sum(0)
= 5 + 4 + 3 + 2 + 1 + 0
```

### Output

```
15
```

---

# Visualisation

![Sum Recursion Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function sum(n) {

    if (n === 0) return 0;

    return n + sum(n - 1);
}

console.log(sum(5)); // 15
```

---

## Python

```python id="python-sum-recursion"
def sum_n(n):

    if n == 0:
        return 0

    return n + sum_n(n - 1)


print(sum_n(5))  # 15
```

---

## Java

```java id="java-sum-recursion"
class Main {

    static int sum(int n) {

        if (n == 0) return 0;

        return n + sum(n - 1);
    }

    public static void main(String[] args) {

        System.out.println(sum(5)); // 15
    }
}
```

---

## C++

```cpp id="cpp-sum-recursion"
#include <iostream>
using namespace std;

int sum(int n) {

    if (n == 0) return 0;

    return n + sum(n - 1);
}

int main() {

    cout << sum(5) << endl; // 15

    return 0;
}
```

---

## C

```c id="c-sum-recursion"
#include <stdio.h>

int sum(int n) {

    if (n == 0) return 0;

    return n + sum(n - 1);
}

int main() {

    printf("%d", sum(5)); // 15

    return 0;
}
```

---

## C#

```csharp id="cs-sum-recursion"
using System;

class Program {

    static int Sum(int n) {

        if (n == 0) return 0;

        return n + Sum(n - 1);
    }

    static void Main() {

        Console.WriteLine(Sum(5)); // 15
    }
}
```

---

# Summary

- Uses **Recursion**
- Requires **Base Case**
- Breaks problem into smaller subproblems

```
Time Complexity: O(n)
Space Complexity: O(n)
```