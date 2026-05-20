# Bubble Sort

## What is Bubble Sort?

Bubble Sort is a simple sorting algorithm that repeatedly traverses the array, compares adjacent elements, and swaps them if they are in the wrong order.

This process continues until the array becomes sorted.

After each pass, the **largest unsorted element "bubbles up"** to its correct position at the end of the array.

It is called **Bubble Sort** because larger elements gradually move toward the end while smaller elements move toward the beginning.

---

# Approach

1. Traverse the array multiple times.
2. Compare adjacent elements.
3. If:

```text
arr[j] > arr[j + 1]
```

swap them.

4. After every pass:
   - Largest element reaches its correct position.

5. Use:

```text
isSwapped
```

to check whether swapping happened.

6. If no swap occurs:

```text
break
```

Array is already sorted.

---

# Time Complexity

### Best Case

```text
O(n)
```

Array already sorted.

Optimization:

```text
isSwapped = false
```

causes early exit.

---

### Worst Case

```text
O(n²)
```

Array in reverse order.

---

# Space Complexity

```text
O(1)
```

Sorting is done in-place.

---

# Dry Run

### Input

```text
arr = [4,5,1,3,9]
```

### Pass 1

```text
j=0

4 < 5

No swap
```

```text
j=1

5 > 1

Swap

[4,1,5,3,9]
```

```text
j=2

5 > 3

Swap

[4,1,3,5,9]
```

```text
j=3

5 < 9

No swap
```

---

### Pass 2

```text
j=0

4 > 1

Swap

[1,4,3,5,9]
```

```text
j=1

4 > 3

Swap

[1,3,4,5,9]
```

```text
j=2

4 < 5

No swap
```

---

### Pass 3

```text
1 < 3

No swap
```

```text
3 < 4

No swap
```

No swaps happened:

```text
break
```

---

### Output

```text
[1,3,4,5,9]
```

---

# Visualisation

![Bubble Sort Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function bubbleSort(arr) {

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        let isSwapped = false;

        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSwapped = true;
            }
        }

        if (!isSwapped)
            break;
    }

    return arr;
}

let arr = [4,5,1,3,9];

console.log(bubbleSort(arr));
```

## Python

```python
def bubbleSort(arr):

    n = len(arr)

    for i in range(n-1):

        isSwapped = False

        for j in range(n-i-1):

            if arr[j] > arr[j+1]:

                arr[j], arr[j+1] = arr[j+1], arr[j]

                isSwapped = True

        if not isSwapped:
            break

    return arr


arr=[4,5,1,3,9]

print(bubbleSort(arr))
```

## Java

```java
class Main {

    static void bubbleSort(int arr[]) {

        int n = arr.length;

        for(int i=0;i<n-1;i++) {

            boolean isSwapped = false;

            for(int j=0;j<n-i-1;j++) {

                if(arr[j] > arr[j+1]) {

                    int temp=arr[j];

                    arr[j]=arr[j+1];

                    arr[j+1]=temp;

                    isSwapped=true;
                }
            }

            if(!isSwapped)
                break;
        }
    }

    public static void main(String[] args){

        int arr[]={4,5,1,3,9};

        bubbleSort(arr);

        for(int num:arr)
            System.out.print(num+" ");
    }
}
```

## C++

```cpp
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {

    for(int i=0;i<n-1;i++) {

        bool isSwapped=false;

        for(int j=0;j<n-i-1;j++) {

            if(arr[j]>arr[j+1]) {

                swap(arr[j],arr[j+1]);

                isSwapped=true;
            }
        }

        if(!isSwapped)
            break;
    }
}

int main() {

    int arr[]={4,5,1,3,9};

    int n=
    sizeof(arr)/sizeof(arr[0]);

    bubbleSort(arr,n);

    for(int i=0;i<n;i++)
        cout<<arr[i]<<" ";

    return 0;
}
```

## C

```c
#include <stdio.h>

void bubbleSort(int arr[], int n) {

    for(int i=0;i<n-1;i++) {

        int isSwapped=0;

        for(int j=0;j<n-i-1;j++) {

            if(arr[j]>arr[j+1]) {

                int temp=arr[j];

                arr[j]=arr[j+1];

                arr[j+1]=temp;

                isSwapped=1;
            }
        }

        if(!isSwapped)
            break;
    }
}

int main() {

    int arr[]={4,5,1,3,9};

    int n=
    sizeof(arr)/sizeof(arr[0]);

    bubbleSort(arr,n);

    for(int i=0;i<n;i++)
        printf("%d ",arr[i]);

    return 0;
}
```

## C#

```csharp
using System;

class Program {

    static void BubbleSort(int[] arr) {

        int n=arr.Length;

        for(int i=0;i<n-1;i++) {

            bool isSwapped=false;

            for(int j=0;j<n-i-1;j++) {

                if(arr[j]>arr[j+1]) {

                    int temp=arr[j];

                    arr[j]=arr[j+1];

                    arr[j+1]=temp;

                    isSwapped=true;
                }
            }

            if(!isSwapped)
                break;
        }
    }

    static void Main() {

        int[] arr={4,5,1,3,9};

        BubbleSort(arr);

        foreach(int num in arr)
            Console.Write(num+" ");
    }
}
```

---

# Summary

- Simple sorting algorithm
- Adjacent comparison based
- Largest element reaches correct position after each pass
- Supports optimization using `isSwapped`

```text
Best Case: O(n)

Worst Case: O(n²)

Space Complexity: O(1)
```