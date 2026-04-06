# Single Number

## Problem Statement

Given a non-empty array of integers `nums`, every element appears **twice except for one**.  
Find that single element.

> You must solve it in **O(n) time** and **O(1) space**.

---

# Examples

## Example 1

**Input**

```
nums = [2, 2, 1]
```

**Output**

```
1
```

---

## Example 2

**Input**

```
nums = [4, 1, 2, 1, 2]
```

**Output**

```
4
```

---

## Example 3

**Input**

```
nums = [1]
```

**Output**

```
1
```

---

# Constraints

```
1 ≤ nums.length ≤ 3 × 10^4
-3 × 10^4 ≤ nums[i] ≤ 3 × 10^4
Each element appears twice except one
```

---

# Approach 1 (Brute Force - Hash Map)

## Steps

1. Create a hash map to store frequencies
2. Traverse array and count occurrences
3. Traverse again to find element with count = 1

---

## Time Complexity

```
O(n)
```

- One pass for counting  
- One pass for checking  

---

## Space Complexity

```
O(n)
```

- Hash map stores elements  

---

## Dry Run

### Input

```
nums = [4, 1, 2, 1, 2]
```

### Step 1: Build Hash Map

```
{4:1, 1:2, 2:2}
```

### Step 2: Find Unique

```
4 → count = 1 → return 4
```

### Output

```
4
```

---

## Code (JavaScript)

```javascript
var singleNumber = function(nums) {

    let hash = {};

    for (let i = 0; i < nums.length; i++) {

        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }

    }

    for (let i = 0; i < nums.length; i++) {

        if (hash[nums[i]] === 1) {
            return nums[i];
        }

    }
};
```

---

# Approach 2 (Optimal - XOR Trick)

## Key Idea

```
a ^ a = 0
a ^ 0 = a
```

- Duplicate numbers cancel out
- Remaining number is the answer

---

## Steps

1. Initialize `xor = 0`
2. Traverse array:
   ```
   xor = xor ^ nums[i]
   ```
3. Return `xor`

---

## Time Complexity

```
O(n)
```

---

## Space Complexity

```
O(1)
```

---

## Dry Run

### Input

```
nums = [4, 1, 2, 1, 2]
```

### Steps

```
xor = 0

0 ^ 4 = 4
4 ^ 1 = 5
5 ^ 2 = 7
7 ^ 1 = 6
6 ^ 2 = 4
```

### Output

```
4
```

---

# Code Implementations

## JavaScript

```javascript
var singleNumber = function(nums) {

    let xor = 0;

    for (let i = 0; i < nums.length; i++) {

        xor = xor ^ nums[i];

    }

    return xor;
};
```

---

## Python

```python id="python-single-number"
def singleNumber(nums):

    xor = 0

    for num in nums:
        xor ^= num

    return xor
```

---

## Java

```java id="java-single-number"
class Solution {

    public int singleNumber(int[] nums) {

        int xor = 0;

        for(int num : nums) {
            xor ^= num;
        }

        return xor;
    }
}
```

---

## C++

```cpp id="cpp-single-number"
class Solution {

public:

    int singleNumber(vector<int>& nums) {

        int xor = 0;

        for(int num : nums) {
            xor ^= num;
        }

        return xor;
    }

};
```

---

## C

```c id="c-single-number"
int singleNumber(int* nums, int numsSize) {

    int xor = 0;

    for(int i = 0; i < numsSize; i++) {
        xor ^= nums[i];
    }

    return xor;
}
```

---

## C#

```csharp id="cs-single-number"
public class Solution {

    public int SingleNumber(int[] nums) {

        int xor = 0;

        foreach(int num in nums) {
            xor ^= num;
        }

        return xor;
    }
}
```

---

# Summary

- **Brute Force:** Hash map → easy but uses extra space  
- **Optimal:** XOR trick → best for interviews  

```
Time Complexity: O(n)
Space Complexity: O(1)
```

- Most important concept: **XOR cancellation**