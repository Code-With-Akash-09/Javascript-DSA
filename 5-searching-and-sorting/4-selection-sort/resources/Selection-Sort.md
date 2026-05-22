# Selection Sort

## What is Selection Sort?

Selection Sort is a simple comparison-based sorting algorithm.

It divides the array into two parts:

- Sorted subarray
- Unsorted subarray

Initially:

- Sorted part is empty
- Unsorted part contains the entire array

In every iteration:

- Find the minimum element from the unsorted part
- Place it at the correct position in the sorted part

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

1. Traverse array from:

```text
0 → n-2
```

2. Assume current index contains minimum element.

```text
min_idx = i
```

3. Traverse remaining unsorted part:

```text
j = i + 1 → n - 1
```

4. If smaller element found:

```text
arr[j] < arr[min_idx]
```

Update:

```text
min_idx = j
```

5. After inner loop:

Swap:

```text
arr[i]
↔
arr[min_idx]
```

6. Repeat until array becomes sorted.

---

# Time Complexity

### Best Case

```text
O(n²)
```

### Average Case

```text
O(n²)
```

### Worst Case

```text
O(n²)
```

Reason:

Approximately:

```text
n × (n - 1) / 2
```

comparisons are always performed.

---

# Space Complexity

```text
O(1)
```

Selection Sort is an in-place sorting algorithm.

---

# Dry Run

### Input

```text
arr = [4,5,1,3,9]
```

---

### Pass 1

```text
i = 0

min_idx = 0
```

```text
j = 1

5 > 4

No change
```

```text
j = 2

1 < 4

min_idx = 2
```

```text
j = 3

3 > 1

No change
```

```text
j = 4

9 > 1

No change
```

Swap:

```text
arr[0] ↔ arr[2]
```

Result:

```text
[1,5,4,3,9]
```

---

### Pass 2

```text
i = 1

min_idx = 1
```

```text
j = 2

4 < 5

min_idx = 2
```

```text
j = 3

3 < 4

min_idx = 3
```

```text
j = 4

9 > 3

No change
```

Swap:

```text
arr[1] ↔ arr[3]
```

Result:

```text
[1,3,4,5,9]
```

---

### Pass 3

```text
i = 2

min_idx = 2
```

Remaining elements already sorted.

No swap needed.

---

# Final Output

```text
[1,3,4,5,9]
```

---

# Visualisation

![Selection Sort Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function selectionSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let min_idx = i;

        for (let j = i + 1; j < n; j++) {

            if (arr[j] < arr[min_idx]) {

                min_idx = j;

            }
        }

        if (min_idx !== i) {

            let temp = arr[i];

            arr[i] = arr[min_idx];

            arr[min_idx] = temp;
        }
    }

    return arr;
}

let arr = [4, 5, 1, 3, 9];

console.log(selectionSort(arr));
```

---

## Python

```python
def selectionSort(arr):

    n = len(arr)

    for i in range(n - 1):

        min_idx = i

        for j in range(i + 1, n):

            if arr[j] < arr[min_idx]:

                min_idx = j

        if min_idx != i:

            arr[i], arr[min_idx] = arr[min_idx], arr[i]

    return arr


arr = [4, 5, 1, 3, 9]

print(selectionSort(arr))
```

---

## Java

```java
class Main {

    static void selectionSort(int arr[]) {

        int n = arr.length;

        for(int i = 0; i < n - 1; i++) {

            int min_idx = i;

            for(int j = i + 1; j < n; j++) {

                if(arr[j] < arr[min_idx]) {

                    min_idx = j;
                }
            }

            if(min_idx != i) {

                int temp = arr[i];

                arr[i] = arr[min_idx];

                arr[min_idx] = temp;
            }
        }
    }

    public static void main(String[] args) {

        int arr[] = {4,5,1,3,9};

        selectionSort(arr);

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

void selectionSort(int arr[], int n) {

    for (int i = 0; i < n - 1; i++) {

        int min_idx = i;

        for (int j = i + 1; j < n; j++) {

            if (arr[j] < arr[min_idx]) {

                min_idx = j;
            }
        }

        if (min_idx != i) {

            int temp = arr[i];

            arr[i] = arr[min_idx];

            arr[min_idx] = temp;
        }
    }
}

int main() {

    int arr[] = {4, 5, 1, 3, 9};

    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

    for (int i = 0; i < n; i++) {

        cout << arr[i] << " ";
    }

    return 0;
}
```

---

## C

```c
#include <stdio.h>

void selectionSort(int arr[], int n) {

    for(int i = 0; i < n - 1; i++) {

        int min_idx = i;

        for(int j = i + 1; j < n; j++) {

            if(arr[j] < arr[min_idx]) {

                min_idx = j;
            }
        }

        if(min_idx != i) {

            int temp = arr[i];

            arr[i] = arr[min_idx];

            arr[min_idx] = temp;
        }
    }
}

int main() {

    int arr[] = {4,5,1,3,9};

    int n = sizeof(arr) / sizeof(arr[0]);

    selectionSort(arr, n);

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

    static void SelectionSort(int[] arr) {

        int n = arr.Length;

        for(int i = 0; i < n - 1; i++) {

            int min_idx = i;

            for(int j = i + 1; j < n; j++) {

                if(arr[j] < arr[min_idx]) {

                    min_idx = j;
                }
            }

            if(min_idx != i) {

                int temp = arr[i];

                arr[i] = arr[min_idx];

                arr[min_idx] = temp;
            }
        }
    }

    static void Main() {

        int[] arr = {4,5,1,3,9};

        SelectionSort(arr);

        foreach(int num in arr) {

            Console.Write(num + " ");
        }
    }
}
```

---

# Summary

- Comparison-based sorting algorithm
- Finds minimum element in every pass
- Performs minimum swaps
- In-place sorting algorithm

```text
Best Case: O(n²)

Average Case: O(n²)

Worst Case: O(n²)

Space Complexity: O(1)
```