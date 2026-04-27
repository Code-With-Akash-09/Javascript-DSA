# Recursion

## What is Recursion?

Recursion is a technique where a **function calls itself** to solve a problem by breaking it down into **smaller sub-problems**.

---

# Base Condition

Every recursive call is stored in the **call stack**.

- If recursion continues infinitely → stack grows
- This leads to **stack overflow error**

### Why Base Condition is Important?

A **base condition** is used to stop recursion.

Without it:
- Function keeps calling itself
- Program crashes due to memory overflow

### Example

```javascript
if (num === 0) return;
```

---

# Problem

## Print numbers from `n` to `1` using recursion

---

# Approach

1. Print the current number
2. Call the function with `num - 1`
3. Stop when `num === 0`

---

# Time Complexity

```
O(n)
```

- One function call for each number

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
print(5)
print(4)
print(3)
print(2)
print(1)
print(0) → stop
```

### Output

```
5
4
3
2
1
```

---

# Visualisation

![Recursion Call Stack Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function printDescending(num) {

    if (num === 0) return;

    console.log(num);

    printDescending(num - 1);
}

printDescending(5);
```

---

## Python

```python id="python-recursion"
def printDescending(num):

    if num == 0:
        return

    print(num)

    printDescending(num - 1)


printDescending(5)
```

---

## Java

```java id="java-recursion"
class Main {

    static void printDescending(int num) {

        if (num == 0) return;

        System.out.println(num);

        printDescending(num - 1);
    }

    public static void main(String[] args) {
        printDescending(5);
    }
}
```

---

## C++

```cpp id="cpp-recursion"
#include <iostream>
using namespace std;

void printDescending(int num) {

    if (num == 0) return;

    cout << num << endl;

    printDescending(num - 1);
}

int main() {

    printDescending(5);

    return 0;
}
```

---

## C

```c id="c-recursion"
#include <stdio.h>

void printDescending(int num) {

    if (num == 0) return;

    printf("%d\n", num);

    printDescending(num - 1);
}

int main() {

    printDescending(5);

    return 0;
}
```

---

## C#

```csharp id="cs-recursion"
using System;

class Program {

    static void PrintDescending(int num) {

        if (num == 0) return;

        Console.WriteLine(num);

        PrintDescending(num - 1);
    }

    static void Main() {

        PrintDescending(5);
    }
}
```

---

# Summary

- Recursion = function calling itself
- Requires a **base condition**
- Uses **call stack**
- Breaks problem into smaller parts

```
Time Complexity: O(n)
Space Complexity: O(n)
```