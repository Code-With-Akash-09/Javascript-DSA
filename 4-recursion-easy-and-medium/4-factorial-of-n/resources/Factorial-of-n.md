# Factorial of a Number (Recursion)

## Problem Statement

Write a recursive function `fact(n)` that returns the **factorial of a number n**.

---

# Example

**Input**

```
n = 5
```

**Process**

```
5 × 4 × 3 × 2 × 1 = 120
```

**Output**

```
120
```

---

# Concepts

## Recursion
The function repeatedly calls itself to multiply numbers in decreasing order.

---

## Base Case

```
fact(1) = 1
```

Stops recursion.

---

## Recursive Case

```
n * fact(n - 1)
```

---

# Approach

1. If `n == 1`, return `1`
2. Otherwise:
   ```
   return n * fact(n - 1)
   ```
3. Continue recursion until reaching base case

---

# Time Complexity

```
O(n)
```

- One recursive call per number

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
fact(5)
= 5 * fact(4)
= 5 * 4 * fact(3)
= 5 * 4 * 3 * fact(2)
= 5 * 4 * 3 * 2 * fact(1)
= 5 * 4 * 3 * 2 * 1
```

### Output

```
120
```

---

# Visualisation

![Factorial Recursion Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function fact(n) {

    if (n === 1) return 1;

    return n * fact(n - 1);
}

console.log(fact(5)); // 120
```

---

## Python

```python id="python-factorial-recursion"
def fact(n):

    if n == 1:
        return 1

    return n * fact(n - 1)


print(fact(5))  # 120
```

---

## Java

```java id="java-factorial-recursion"
class Main {

    static int fact(int n) {

        if (n == 1) return 1;

        return n * fact(n - 1);
    }

    public static void main(String[] args) {

        System.out.println(fact(5)); // 120
    }
}
```

---

## C++

```cpp id="cpp-factorial-recursion"
#include <iostream>
using namespace std;

int fact(int n) {

    if (n == 1) return 1;

    return n * fact(n - 1);
}

int main() {

    cout << fact(5) << endl; // 120

    return 0;
}
```

---

## C

```c id="c-factorial-recursion"
#include <stdio.h>

int fact(int n) {

    if (n == 1) return 1;

    return n * fact(n - 1);
}

int main() {

    printf("%d", fact(5)); // 120

    return 0;
}
```

---

## C#

```csharp id="cs-factorial-recursion"
using System;

class Program {

    static int Fact(int n) {

        if (n == 1) return 1;

        return n * Fact(n - 1);
    }

    static void Main() {

        Console.WriteLine(Fact(5)); // 120
    }
}
```

---

# Summary

- Uses **Recursion**
- Requires **Base Case**
- Multiplies values step-by-step

```
Time Complexity: O(n)
Space Complexity: O(n)
```