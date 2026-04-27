# Power of Two (Recursion)

## Problem Statement

Write a recursive function `isPowerOfTwo(n)` that returns **true** if `n` is a power of 2, otherwise **false**.

---

# Examples

## Example 1

**Input**

```
n = 8
```

**Process**

```
8 → 4 → 2 → 1
```

**Output**

```
true
```

---

## Example 2

**Input**

```
n = 18
```

**Output**

```
false
```

---

# Concepts

## Power of Two

A number is a power of 2 if it can be **divided by 2 repeatedly until it becomes 1**.

---

## Base Case

```
n == 1 → true
```

---

## Invalid Case

```
n < 1 OR n % 2 != 0 → false
```

---

## Recursive Case

```
isPowerOfTwo(n / 2)
```

---

# Approach

1. If `n == 1`, return `true`
2. If `n < 1` or `n % 2 != 0`, return `false`
3. Otherwise:
   ```
   return isPowerOfTwo(n / 2)
   ```
4. Continue until base case is reached

---

# Time Complexity

```
O(log n)
```

- Each step divides the number by 2

---

# Space Complexity

```
O(log n)
```

- Due to recursive call stack

---

# Dry Run

### Input

```
n = 8
```

### Function Calls

```
isPowerOfTwo(8)
→ isPowerOfTwo(4)
→ isPowerOfTwo(2)
→ isPowerOfTwo(1) → true
```

### Output

```
true
```

---

### Input

```
n = 18
```

### Steps

```
18 % 2 != 0 → false
```

### Output

```
false
```

---

# Visualisation

![Power of Two Recursion Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function isPowerOfTwo(n) {

    if (n === 1) return true;

    if (n < 1 || n % 2 !== 0) return false;

    return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(18)); // false
```

---

## Python

```python id="python-power-of-two"
def isPowerOfTwo(n):

    if n == 1:
        return True

    if n < 1 or n % 2 != 0:
        return False

    return isPowerOfTwo(n // 2)


print(isPowerOfTwo(8))   # True
print(isPowerOfTwo(18))  # False
```

---

## Java

```java id="java-power-of-two"
class Solution {

    public boolean isPowerOfTwo(int n) {

        if (n == 1) return true;

        if (n < 1 || n % 2 != 0) return false;

        return isPowerOfTwo(n / 2);
    }
}
```

---

## C++

```cpp id="cpp-power-of-two"
#include <iostream>
using namespace std;

class Solution {
public:

    bool isPowerOfTwo(int n) {

        if (n == 1) return true;

        if (n < 1 || n % 2 != 0) return false;

        return isPowerOfTwo(n / 2);
    }
};
```

---

## C

```c id="c-power-of-two"
#include <stdio.h>
#include <stdbool.h>

bool isPowerOfTwo(int n) {

    if (n == 1) return true;

    if (n < 1 || n % 2 != 0) return false;

    return isPowerOfTwo(n / 2);
}

int main() {

    printf("%d\n", isPowerOfTwo(8));  // 1 (true)
    printf("%d\n", isPowerOfTwo(18)); // 0 (false)

    return 0;
}
```

---

## C#

```csharp id="cs-power-of-two"
using System;

class Solution {

    public bool IsPowerOfTwo(int n) {

        if (n == 1) return true;

        if (n < 1 || n % 2 != 0) return false;

        return IsPowerOfTwo(n / 2);
    }
}
```

---

# Summary

- Uses **Recursion**
- Divides problem by **2 each step**
- Efficient logarithmic solution

```
Time Complexity: O(log n)
Space Complexity: O(log n)
```