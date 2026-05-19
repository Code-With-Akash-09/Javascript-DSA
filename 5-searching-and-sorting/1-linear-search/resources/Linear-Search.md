# Linear Search

## What is Linear Search?

Linear Search is a simple searching algorithm used to find a specific element in an array.

It checks each element **one by one** from the beginning until:

- The target value is found
- Or the array ends

If the element exists, return its **index**. Otherwise return **-1**.

---

# Examples

## Example 1

**Input**

```
arr = [2, 4, 7, 10]
target = 10
```

**Output**

```
3
```

**Explanation**

```
10 is found at index 3
```

---

## Example 2

**Input**

```
arr = [6, 8, 0, 3]
target = 5
```

**Output**

```
-1
```

**Explanation**

```
5 does not exist in the array
```

---

# Approach

1. Start from the first element
2. Compare current element with target
3. If match found:
   ```
   return index
   ```
4. Continue until end of array
5. If target isn't found:
   ```
   return -1
   ```

---

# Time Complexity

```
O(n)
```

### Why?

In the worst case:

- Entire array is traversed
- Every element checked once

Example:

```
Target not present
```

Must scan all `n` elements.

---

# Space Complexity

```
O(1)
```

Constant extra space used.

---

# Dry Run

### Input

```
arr = [4, 5, 1, 3, 9]
target = 5
```

### Iteration Steps

```
i = 0

arr[0] = 4

4 == 5 ?

No
```

---

```
i = 1

arr[1] = 5

5 == 5 ?

Yes
```

Return:

```
1
```

Loop stops.

---

### Output

```
Element found at index 1
```

---

# Visualisation

![Linear Search Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function linearSearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {

            return i;

        }

    }

    return -1;
}

let arr = [4, 5, 1, 3, 9];

console.log(
    "Element found at index",
    linearSearch(arr, 5)
);
```

---

## Python

```python id="python-linear-search"
def linearSearch(arr, target):

    for i in range(len(arr)):

        if arr[i] == target:
            return i

    return -1


arr = [4,5,1,3,9]

print(
    "Element found at index",
    linearSearch(arr,5)
)
```

---

## Java

```java id="java-linear-search"
class Main {

    static int linearSearch(int[] arr, int target) {

        for(int i = 0; i < arr.length; i++) {

            if(arr[i] == target)
                return i;

        }

        return -1;
    }

    public static void main(String[] args) {

        int[] arr = {4,5,1,3,9};

        int result = linearSearch(arr,5);

        System.out.println(
            "Element found at index " + result
        );
    }
}
```

---

## C++

```cpp id="cpp-linear-search"
#include <iostream>
using namespace std;

int linearSearch(int arr[], int size, int target) {

    for(int i=0;i<size;i++) {

        if(arr[i]==target)
            return i;

    }

    return -1;
}

int main() {

    int arr[] = {4,5,1,3,9};

    int result =
    linearSearch(arr,5,5);

    cout
    << "Element found at index "
    << result;

    return 0;
}
```

---

## C

```c id="c-linear-search"
#include <stdio.h>

int linearSearch(
int arr[],
int size,
int target
) {

    for(int i=0;i<size;i++) {

        if(arr[i]==target)
            return i;

    }

    return -1;
}

int main() {

    int arr[]={4,5,1,3,9};

    int result=
    linearSearch(arr,5,5);

    printf(
    "Element found at index %d",
    result
    );

    return 0;
}
```

---

## C#

```csharp id="cs-linear-search"
using System;

class Program {

    static int LinearSearch(
    int[] arr,
    int target
    ) {

        for(int i=0;i<arr.Length;i++) {

            if(arr[i]==target)
                return i;

        }

        return -1;
    }

    static void Main() {

        int[] arr={4,5,1,3,9};

        int result=
        LinearSearch(arr,5);

        Console.WriteLine(
        "Element found at index "
        + result
        );
    }
}
```

---

# Summary

- Simple searching algorithm
- Works on sorted and unsorted arrays
- Checks elements one by one
- Easy to understand and implement

```
Time Complexity: O(n)
Space Complexity: O(1)
```

### Best Case

```
O(1)
```

Target found at first index.

### Worst Case

```
O(n)
```

Target at end or not present.