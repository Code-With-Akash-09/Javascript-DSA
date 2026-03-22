# Merge Sorted Arrays (In-place)

## Problem Statement

You are given two integer arrays:

- `nums1` (size = m + n)
- `nums2` (size = n)

Both arrays are sorted in **non-decreasing order**.

Merge `nums2` into `nums1` such that the final array is also sorted.

- The first **m elements of nums1 are valid**
- The last **n elements are 0 (placeholders)**
- Store the result inside **nums1 (in-place)**

---

# Examples

## Example 1

**Input**

```
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
```

**Output**

```
[1,2,2,3,5,6]
```

---

## Example 2

**Input**

```
nums1 = [1], m = 1
nums2 = [], n = 0
```

**Output**

```
[1]
```

---

## Example 3

**Input**

```
nums1 = [0], m = 0
nums2 = [1], n = 1
```

**Output**

```
[1]
```

---

# Approach 1: Brute Force (Concatenate + Sort)

## Steps

1. Copy elements of `nums2` into `nums1`
2. Sort the entire array

---

## Time Complexity

```
O((m+n) log (m+n))
```

---

## Space Complexity

```
O(1)
```

---

## Dry Run

```
nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
```

Step 1: Copy

```
nums1 = [1,2,3,2,5,6]
```

Step 2: Sort

```
[1,2,2,3,5,6]
```

---

## Code (JavaScript)

```javascript
var merge = function(nums1, m, nums2, n) {

    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m];
    }

    nums1.sort((a, b) => a - b);
};
```

---

# Approach 2: Two Pointer (Using Extra Space)

## Steps

1. Copy first `m` elements into `nums1Copy`
2. Use two pointers:
   - `p1` for nums1Copy
   - `p2` for nums2
3. Compare and place smaller element

---

## Time Complexity

```
O(m + n)
```

---

## Space Complexity

```
O(m)
```

---

## Dry Run

```
nums1Copy = [1,2,3]
nums2 = [2,5,6]
```

Steps:

```
1 < 2 → nums1[0] = 1
2 == 2 → nums1[1] = 2
2 < 5 → nums1[2] = 2
3 < 5 → nums1[3] = 3
Remaining → 5,6
```

Result:

```
[1,2,2,3,5,6]
```

---

## Code (JavaScript)

```javascript
var merge = function(nums1, m, nums2, n) {

    let nums1Copy = nums1.slice(0, m);

    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < m + n; i++) {

        if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {

            nums1[i] = nums1Copy[p1];
            p1++;

        } else {

            nums1[i] = nums2[p2];
            p2++;

        }

    }
};
```

---

# Approach 3: Optimal (Two Pointer from End)

## Idea

- Start filling from the **end of nums1**
- Compare last elements of both arrays
- Place the **larger element at the end**

---

## Steps

1. `p1 = m - 1`
2. `p2 = n - 1`
3. `i = m + n - 1`
4. Compare and place elements from back

---

## Time Complexity

```
O(m + n)
```

---

## Space Complexity

```
O(1)
```

---

## Dry Run

```
nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
```

Steps:

```
Compare 3 & 6 → place 6
Compare 3 & 5 → place 5
Compare 3 & 2 → place 3
Compare 2 & 2 → place 2
Compare 1 & 2 → place 2
Remaining → 1
```

Result:

```
[1,2,2,3,5,6]
```

---

# Visualisation

![Merge Sorted Array Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
var merge = function(nums1, m, nums2, n) {

    let p1 = m - 1;
    let p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {

        if (p2 < 0) break;

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {

            nums1[i] = nums1[p1];
            p1--;

        } else {

            nums1[i] = nums2[p2];
            p2--;

        }

    }
};
```

---

## Python

```python id="python-merge-arrays"
def merge(nums1, m, nums2, n):

    p1 = m - 1
    p2 = n - 1
    i = m + n - 1

    while p2 >= 0:

        if p1 >= 0 and nums1[p1] > nums2[p2]:

            nums1[i] = nums1[p1]
            p1 -= 1

        else:

            nums1[i] = nums2[p2]
            p2 -= 1

        i -= 1
```

---

## Java

```java id="java-merge-arrays"
class Solution {

    public void merge(int[] nums1, int m, int[] nums2, int n) {

        int p1 = m - 1;
        int p2 = n - 1;

        for(int i = m + n - 1; i >= 0; i--) {

            if(p2 < 0) break;

            if(p1 >= 0 && nums1[p1] > nums2[p2]) {

                nums1[i] = nums1[p1--];

            } else {

                nums1[i] = nums2[p2--];

            }

        }
    }
}
```

---

## C++

```cpp id="cpp-merge-arrays"
class Solution {

public:

    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {

        int p1 = m - 1;
        int p2 = n - 1;

        for(int i = m + n - 1; i >= 0; i--) {

            if(p2 < 0) break;

            if(p1 >= 0 && nums1[p1] > nums2[p2]) {

                nums1[i] = nums1[p1--];

            } else {

                nums1[i] = nums2[p2--];

            }

        }
    }
};
```

---

## C

```c id="c-merge-arrays"
void merge(int* nums1, int m, int* nums2, int n) {

    int p1 = m - 1;
    int p2 = n - 1;

    for(int i = m + n - 1; i >= 0; i--) {

        if(p2 < 0) break;

        if(p1 >= 0 && nums1[p1] > nums2[p2]) {

            nums1[i] = nums1[p1];
            p1--;

        } else {

            nums1[i] = nums2[p2];
            p2--;

        }

    }
}
```

---

## C#

```csharp id="cs-merge-arrays"
public class Solution {

    public void Merge(int[] nums1, int m, int[] nums2, int n) {

        int p1 = m - 1;
        int p2 = n - 1;

        for(int i = m + n - 1; i >= 0; i--) {

            if(p2 < 0) break;

            if(p1 >= 0 && nums1[p1] > nums2[p2]) {

                nums1[i] = nums1[p1--];

            } else {

                nums1[i] = nums2[p2--];

            }

        }
    }
}
```

---

# Summary

- **Approach 1:** Simple but slow → O(n log n)
- **Approach 2:** Faster but uses extra space → O(m)
- **Approach 3 (Optimal):**
  - Most efficient
  - No extra space
  - Preferred in interviews

```
Time Complexity: O(m + n)
Space Complexity: O(1)
```