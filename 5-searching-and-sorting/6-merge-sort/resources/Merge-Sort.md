# Merge Sort

## What is Merge Sort?

Merge Sort is a popular **Divide and Conquer** sorting algorithm.

It works by:

1. Dividing the array into smaller halves
2. Recursively sorting each half
3. Merging the sorted halves back together

Merge Sort is a **stable sorting algorithm** and guarantees:

```text
O(n log n)
```

performance in:

- Best Case
- Average Case
- Worst Case

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

## Step 1: Divide

Split array into two halves.

Example:

```text
[4,5,1,3,9]

↓

[4,5]
[1,3,9]
```

---

## Step 2: Conquer

Recursively sort both halves.

```text
[4,5] → [4,5]

[1,3,9]

↓

[1]
[3,9]

↓

[3]
[9]
```

---

## Step 3: Combine

Merge sorted arrays into one sorted result.

Example:

```text
[4,5]

and

[1,3,9]
```

becomes

```text
[1,3,4,5,9]
```

---

# Key Concept: Merge Step

Merge Sort's most important operation is:

```text
Merge
```

Use two pointers:

```text
i → left array

j → right array
```

Compare:

```text
left[i]

right[j]
```

Insert smaller value into result.

Continue until both arrays are exhausted.

---

# Time Complexity

### Best Case

```text
O(n log n)
```

---

### Average Case

```text
O(n log n)
```

---

### Worst Case

```text
O(n log n)
```

Reason:

```text
log n
```

levels of division

×

```text
O(n)
```

merge work at every level

---

# Space Complexity

```text
O(n)
```

Extra arrays are used during merging.

---

# Dry Run

### Input

```text
nums = [4, 5, 1, 3, 9]
```

---

### Step 1

```text
sortArray([4,5,1,3,9])

mid = 2

left  = [4,5]

right = [1,3,9]
```

---

### Step 2

```text
sortArray([4,5])

↓

[4]
[5]
```

Merge:

```text
[4,5]
```

---

### Step 3

```text
sortArray([1,3,9])

↓

[1]

[3,9]
```

---

### Step 4

```text
sortArray([3,9])

↓

[3]
[9]
```

Merge:

```text
[3,9]
```

Then:

```text
merge([1],[3,9])

↓

[1,3,9]
```

---

### Step 5

Merge:

```text
[4,5]

and

[1,3,9]
```

Comparisons:

```text
4 vs 1

Take 1

[1]
```

```text
4 vs 3

Take 3

[1,3]
```

```text
4 vs 9

Take 4

[1,3,4]
```

```text
5 vs 9

Take 5

[1,3,4,5]
```

Remaining:

```text
9
```

Result:

```text
[1,3,4,5,9]
```

---

# Final Output

```text
[1,3,4,5,9]
```

---

# Visualisation

![Merge Sort Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function merge(left, right) {

    let result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {

            result.push(left[i]);
            i++;

        } else {

            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {

        result.push(left[i]);
        i++;
    }

    while (j < right.length) {

        result.push(right[j]);
        j++;
    }

    return result;
}

function mergeSort(nums) {

    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);

    let left = mergeSort(nums.slice(0, mid));

    let right = mergeSort(nums.slice(mid));

    return merge(left, right);
}

console.log(
    mergeSort([4, 5, 1, 3, 9])
);
```

---

## Python

```python
def merge(left, right):

    result = []

    i = 0
    j = 0

    while i < len(left) and j < len(right):

        if left[i] < right[j]:

            result.append(left[i])
            i += 1

        else:

            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result


def mergeSort(nums):

    if len(nums) <= 1:
        return nums

    mid = len(nums) // 2

    left = mergeSort(nums[:mid])

    right = mergeSort(nums[mid:])

    return merge(left, right)


print(
    mergeSort([4, 5, 1, 3, 9])
)
```

---

## Java

```java
import java.util.*;

class Solution {

    public int[] mergeSort(int[] nums) {

        if(nums.length <= 1)
            return nums;

        int mid = nums.length / 2;

        int[] left =
            Arrays.copyOfRange(nums, 0, mid);

        int[] right =
            Arrays.copyOfRange(nums, mid, nums.length);

        left = mergeSort(left);
        right = mergeSort(right);

        return merge(left, right);
    }

    private int[] merge(int[] left, int[] right) {

        int[] result =
            new int[left.length + right.length];

        int i = 0, j = 0, k = 0;

        while(i < left.length && j < right.length) {

            if(left[i] < right[j])
                result[k++] = left[i++];

            else
                result[k++] = right[j++];
        }

        while(i < left.length)
            result[k++] = left[i++];

        while(j < right.length)
            result[k++] = right[j++];

        return result;
    }
}
```

---

## C++

```cpp
#include <vector>
using namespace std;

class Solution {
public:

    vector<int> sortArray(vector<int>& nums) {

        if (nums.size() <= 1)
            return nums;

        int mid = nums.size() / 2;

        vector<int> left(
            nums.begin(),
            nums.begin() + mid
        );

        vector<int> right(
            nums.begin() + mid,
            nums.end()
        );

        return merge(
            sortArray(left),
            sortArray(right)
        );
    }

    vector<int> merge(
        const vector<int>& left,
        const vector<int>& right
    ) {

        vector<int> result;

        int i = 0;
        int j = 0;

        while (
            i < left.size() &&
            j < right.size()
        ) {

            if (left[i] < right[j])
                result.push_back(left[i++]);

            else
                result.push_back(right[j++]);
        }

        while (i < left.size())
            result.push_back(left[i++]);

        while (j < right.size())
            result.push_back(right[j++]);

        return result;
    }
};
```

---

## C

```c
#include <stdio.h>

void merge(
    int arr[],
    int left,
    int mid,
    int right
) {

    int n1 = mid - left + 1;
    int n2 = right - mid;

    int L[n1], R[n2];

    for(int i=0;i<n1;i++)
        L[i]=arr[left+i];

    for(int i=0;i<n2;i++)
        R[i]=arr[mid+1+i];

    int i=0,j=0,k=left;

    while(i<n1 && j<n2){

        if(L[i] <= R[j])
            arr[k++] = L[i++];

        else
            arr[k++] = R[j++];
    }

    while(i<n1)
        arr[k++] = L[i++];

    while(j<n2)
        arr[k++] = R[j++];
}
```

---

## C#

```csharp
using System;
using System.Linq;

class Solution {

    public int[] MergeSort(int[] nums) {

        if(nums.Length <= 1)
            return nums;

        int mid = nums.Length / 2;

        int[] left =
            nums.Take(mid).ToArray();

        int[] right =
            nums.Skip(mid).ToArray();

        return Merge(
            MergeSort(left),
            MergeSort(right)
        );
    }

    private int[] Merge(
        int[] left,
        int[] right
    ) {

        int[] result =
            new int[left.Length + right.Length];

        int i=0,j=0,k=0;

        while(
            i<left.Length &&
            j<right.Length
        ){

            if(left[i] < right[j])
                result[k++] = left[i++];

            else
                result[k++] = right[j++];
        }

        while(i<left.Length)
            result[k++] = left[i++];

        while(j<right.Length)
            result[k++] = right[j++];

        return result;
    }
}
```

---

# Summary

- Divide and Conquer algorithm
- Stable sorting algorithm
- Consistent performance in all cases
- Preferred for large datasets

```text
Best Case: O(n log n)

Average Case: O(n log n)

Worst Case: O(n log n)

Space Complexity: O(n)
```