# Insertion Sort

## What is Insertion Sort?

Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array one element at a time.

It works by taking each element from the input array and inserting it into its correct position in the already sorted part of the array.

Starting from the second element:

- Compare current element with previous elements
- Shift larger elements one position ahead
- Insert current element at the correct position

This process continues until the entire array becomes sorted.

Insertion Sort is efficient for:

- Small datasets
- Nearly sorted arrays

It also works in-place without using extra memory.

---

# Example

### Input

```text
[4, 5, 1, 3, 9]
```

### Output

```text
[1, 3, 4, 5, 9]
```

---

# Approach

1. Start from index:

```text
1
```

because the first element is already sorted.

2. Store current element:

```text
curr = arr[i]
```

3. Compare with previous elements.

4. While previous elements are greater:

```text
arr[prev] > curr
```

shift them right.

5. Insert current element at the correct position.

6. Repeat until array is sorted.

---

# Time Complexity

### Best Case

```text
O(n)
```

When array is already sorted.

---

### Average Case

```text
O(n²)
```

---

### Worst Case

```text
O(n²)
```

When array is reverse sorted.

Every element must shift to the beginning.

---

# Space Complexity

```text
O(1)
```

Insertion Sort is an in-place sorting algorithm.

---

# Dry Run

### Input

```text
arr = [4, 5, 1, 3, 9]
```

---

### Pass 1

```text
i = 1

curr = 5
prev = 0
```

```text
4 ≤ 5

No shifting
```

Array:

```text
[4,5,1,3,9]
```

---

### Pass 2

```text
i = 2

curr = 1
prev = 1
```

```text
5 > 1

Shift

[4,5,5,3,9]
```

```text
4 > 1

Shift

[4,4,5,3,9]
```

Insert:

```text
1
```

Array:

```text
[1,4,5,3,9]
```

---

### Pass 3

```text
i = 3

curr = 3
prev = 2
```

```text
5 > 3

Shift

[1,4,5,5,9]
```

```text
4 > 3

Shift

[1,4,4,5,9]
```

Insert:

```text
3
```

Array:

```text
[1,3,4,5,9]
```

---

### Pass 4

```text
i = 4

curr = 9
```

No shifting needed.

---

# Final Output

```text
[1,3,4,5,9]
```

---

# Visualisation

![Insertion Sort Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

        let curr = arr[i];

        let prev = i - 1;

        while (prev >= 0 && arr[prev] > curr) {

            arr[prev + 1] = arr[prev];

            prev--;
        }

        arr[prev + 1] = curr;
    }

    return arr;
}

let arr = [4, 5, 1, 3, 9];

console.log(insertionSort(arr));
```

---

## Python

```python
def insertionSort(arr):

    for i in range(1, len(arr)):

        curr = arr[i]

        prev = i - 1

        while prev >= 0 and arr[prev] > curr:

            arr[prev + 1] = arr[prev]

            prev -= 1

        arr[prev + 1] = curr

    return arr


arr = [4, 5, 1, 3, 9]

print(insertionSort(arr))
```

---

## Java

```java
class Main {

    static void insertionSort(int arr[]) {

        for(int i = 1; i < arr.length; i++) {

            int curr = arr[i];

            int prev = i - 1;

            while(prev >= 0 && arr[prev] > curr) {

                arr[prev + 1] = arr[prev];

                prev--;
            }

            arr[prev + 1] = curr;
        }
    }

    public static void main(String[] args) {

        int arr[] = {4, 5, 1, 3, 9};

        insertionSort(arr);

        for(int num : arr) {

            System.out.print(num + " ");
        }
    }
}
```

---

## C++

```cpp
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {

    for(int i = 1; i < n; i++) {

        int curr = arr[i];

        int prev = i - 1;

        while(prev >= 0 && arr[prev] > curr) {

            arr[prev + 1] = arr[prev];

            prev--;
        }

        arr[prev + 1] = curr;
    }
}

int main() {

    int arr[] = {4, 5, 1, 3, 9};

    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    for(int i = 0; i < n; i++) {

        cout << arr[i] << " ";
    }

    return 0;
}
```

---

## C

```c
#include <stdio.h>

void insertionSort(int arr[], int n) {

    for(int i = 1; i < n; i++) {

        int curr = arr[i];

        int prev = i - 1;

        while(prev >= 0 && arr[prev] > curr) {

            arr[prev + 1] = arr[prev];

            prev--;
        }

        arr[prev + 1] = curr;
    }
}

int main() {

    int arr[] = {4, 5, 1, 3, 9};

    int n = sizeof(arr) / sizeof(arr[0]);

    insertionSort(arr, n);

    for(int i = 0; i < n; i++) {

        printf("%d ", arr[i]);
    }

    return 0;
}
```

---

## C#

```csharp
using System;

class Program {

    static void InsertionSort(int[] arr) {

        for(int i = 1; i < arr.Length; i++) {

            int curr = arr[i];

            int prev = i - 1;

            while(prev >= 0 && arr[prev] > curr) {

                arr[prev + 1] = arr[prev];

                prev--;
            }

            arr[prev + 1] = curr;
        }
    }

    static void Main() {

        int[] arr = {4, 5, 1, 3, 9};

        InsertionSort(arr);

        foreach(int num in arr) {

            Console.Write(num + " ");
        }
    }
}
```

---

# Summary

- Builds sorted array gradually
- Efficient for small or nearly sorted arrays
- Stable sorting algorithm
- In-place sorting

```text
Best Case: O(n)

Average Case: O(n²)

Worst Case: O(n²)

Space Complexity: O(1)
```