# Binary Search

## What is Binary Search?

Binary Search is an efficient searching algorithm used to find a target value inside a **sorted array**.

Unlike Linear Search, Binary Search repeatedly divides the search space into half, greatly reducing the number of comparisons.

---

# Example

### Input

```text
nums = [1,3,5,7,9]
target = 7
```

### Output

```text
3
```

### Explanation

7 exists at index `3`.

---

# Requirement

Binary Search only works on:

✅ Sorted arrays

Valid:

```text
[1,3,5,7,9]
```

Invalid:

```text
[9,2,7,1]
```

---

# Approach

1. Set:

```javascript
left = 0
right = nums.length - 1
```

2. Repeat while:

```javascript
left <= right
```

3. Find middle:

```javascript
middle = Math.floor((left + right) / 2)
```

4. Compare values:

If:

```javascript
nums[middle] === target
```

Return index.

If:

```javascript
target < nums[middle]
```

Search left half:

```javascript
right = middle - 1
```

Else:

```javascript
left = middle + 1
```

5. If target is not found:

```javascript
return -1
```

---

# Time Complexity

### Best Case

```text
O(1)
```

Target found immediately.

### Worst Case

```text
O(log n)
```

Array size reduces by half each iteration.

---

# Space Complexity

```text
O(1)
```

No extra memory used.

---

# Dry Run

### Input

```text
nums = [-1,0,3,5,9,12]
target = 9
```

### Initial State

```text
left = 0
right = 5
```

### Iteration 1

```text
middle = (0 + 5) / 2

middle = 2
nums[2] = 3

9 > 3

left = 3
```

Current state:

```text
left = 3
right = 5
```

### Iteration 2

```text
middle = (3 + 5) / 2

middle = 4
nums[4] = 9

target found
return 4
```

---

### Output

```text
Target found at index 4
```

---

# Visualisation

![Binary Search Visualization](IMAGE_URL_HERE)

---

# Code Implementations

## JavaScript

```javascript
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            return middle;
        } 
        else if (target < nums[middle]) {
            right = middle - 1;
        } 
        else {
            left = middle + 1;
        }
    }

    return -1;
}

let nums = [-1, 0, 3, 5, 9, 12];

console.log(search(nums, 9));
```

## Python

```python
def search(nums, target):

    left = 0
    right = len(nums) - 1

    while left <= right:

        middle = (left + right) // 2

        if nums[middle] == target:
            return middle

        elif target < nums[middle]:
            right = middle - 1

        else:
            left = middle + 1

    return -1


nums = [-1,0,3,5,9,12]

print(search(nums,9))
```

## Java

```java
class Solution {

    public int search(int[] nums, int target) {

        int left = 0;
        int right = nums.length - 1;

        while(left <= right) {

            int middle = left + (right - left) / 2;

            if(nums[middle] == target) {
                return middle;
            }

            else if(target < nums[middle]) {
                right = middle - 1;
            }

            else {
                left = middle + 1;
            }
        }

        return -1;
    }
}
```

## C++

```cpp
class Solution {
public:

    int search(vector<int>& nums, int target) {

        int left = 0;
        int right = nums.size() - 1;

        while(left <= right) {

            int middle = left + (right - left) / 2;

            if(nums[middle] == target) {
                return middle;
            }

            else if(target < nums[middle]) {
                right = middle - 1;
            }

            else {
                left = middle + 1;
            }
        }

        return -1;
    }
};
```

## C

```c
int search(int nums[], int size, int target) {

    int left = 0;
    int right = size - 1;

    while(left <= right) {

        int middle = left + (right - left) / 2;

        if(nums[middle] == target)
            return middle;

        else if(target < nums[middle])
            right = middle - 1;

        else
            left = middle + 1;
    }

    return -1;
}
```

## C#

```csharp
public class Solution {

    public int Search(int[] nums, int target) {

        int left = 0;
        int right = nums.Length - 1;

        while(left <= right) {

            int middle = left + (right - left) / 2;

            if(nums[middle] == target)
                return middle;

            else if(target < nums[middle])
                right = middle - 1;

            else
                left = middle + 1;
        }

        return -1;
    }
}
```

---

# Summary

- Faster than Linear Search
- Works only on sorted arrays
- Reduces search space by half
- Common interview topic

```text
Best Case: O(1)
Worst Case: O(log n)
Space Complexity: O(1)
```