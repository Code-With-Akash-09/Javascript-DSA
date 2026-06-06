# Palindrome Linked List

## Problem Statement

Given the head of a singly linked list, determine whether the linked list is a palindrome.

Return:

```text
true
```

if the linked list reads the same forward and backward.

Return:

```text
false
```

otherwise.

---

## Examples

### Example 1

#### Input

```text
head = [1,2,2,1]
```

#### Output

```text
true
```

#### Explanation

Forward:

```text
1 → 2 → 2 → 1
```

Backward:

```text
1 → 2 → 2 → 1
```

Both are identical, so it is a palindrome.

---

### Example 2

#### Input

```text
head = [1,2]
```

#### Output

```text
false
```

#### Explanation

Forward:

```text
1 → 2
```

Backward:

```text
2 → 1
```

They are different.

---

## Constraints

```text
1 <= Number of Nodes <= 10⁵

0 <= Node.val <= 9
```

---

# Approach 1 (Using Array)

### Idea

Linked Lists do not support backward traversal.

To compare values from both ends:

1. Traverse the linked list.
2. Store all node values in an array.
3. Use two pointers:

   * Left pointer from the beginning.
   * Right pointer from the end.
4. Compare values until both pointers meet.

If all values match:

```text
Palindrome
```

Otherwise:

```text
Not Palindrome
```

---

# Algorithm

### Step 1

Create an empty array:

```text
arr = []
```

---

### Step 2

Traverse the linked list and store values:

```text
1 → 2 → 2 → 1
```

becomes:

```text
[1, 2, 2, 1]
```

---

### Step 3

Initialize:

```text
left = 0

right = arr.length - 1
```

---

### Step 4

Compare:

```text
arr[left]

arr[right]
```

---

### Step 5

If values are equal:

```text
left++

right--
```

Continue.

---

### Step 6

If any mismatch occurs:

```text
return false
```

---

### Step 7

If all comparisons succeed:

```text
return true
```

---

# Visualisation

## Example 1

Input:

```text
1 → 2 → 2 → 1
```

Stored Array:

```text
[1, 2, 2, 1]
```

Pointers:

```text
left             right
 ↓                 ↓
[1, 2, 2, 1]
```

Compare:

```text
1 == 1
```

Move:

```text
left++

right--
```

---

Now:

```text
    left right
      ↓   ↓
[1, 2, 2, 1]
```

Compare:

```text
2 == 2
```

Move again.

Pointers cross.

Return:

```text
true
```

---

# Visualisation

## Example 2

Input:

```text
1 → 2
```

Stored Array:

```text
[1, 2]
```

Compare:

```text
1 != 2
```

Return:

```text
false
```

---

# Dry Run

Input:

```text
head = [1,2,3,2,1]
```

### Convert to Array

```text
arr = [1,2,3,2,1]
```

---

### Comparison 1

```text
left = 0

right = 4

1 == 1
```

Move:

```text
left = 1

right = 3
```

---

### Comparison 2

```text
2 == 2
```

Move:

```text
left = 2

right = 2
```

Stop.

Return:

```text
true
```

---

# Time Complexity

```text
O(n)
```

### Reason

1. One traversal to build the array:

```text
O(n)
```

2. One traversal to compare elements:

```text
O(n)
```

Total:

```text
O(n)
```

---

# Space Complexity

```text
O(n)
```

### Reason

An additional array stores all node values.

---

# Code Implementations

## JavaScript

```javascript
var isPalindrome = function(head) {

    let arr = [];

    let curr = head;

    while (curr !== null) {

        arr.push(curr.val);

        curr = curr.next;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {

        if (arr[left] !== arr[right]) {

            return false;
        }

        left++;
        right--;
    }

    return true;
};
```

---

## Python

```python
class Solution:

    def isPalindrome(self, head):

        arr = []

        curr = head

        while curr:

            arr.append(curr.val)

            curr = curr.next

        left = 0
        right = len(arr) - 1

        while left < right:

            if arr[left] != arr[right]:

                return False

            left += 1
            right -= 1

        return True
```

---

## Java

```java
import java.util.ArrayList;

class Solution {

    public boolean isPalindrome(ListNode head) {

        ArrayList<Integer> arr =
            new ArrayList<>();

        ListNode curr = head;

        while(curr != null) {

            arr.add(curr.val);

            curr = curr.next;
        }

        int left = 0;
        int right = arr.size() - 1;

        while(left < right) {

            if(!arr.get(left).equals(arr.get(right))) {

                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
```

---

## C++

```cpp
class Solution {
public:

    bool isPalindrome(ListNode* head) {

        vector<int> arr;

        ListNode* curr = head;

        while(curr) {

            arr.push_back(curr->val);

            curr = curr->next;
        }

        int left = 0;
        int right = arr.size() - 1;

        while(left < right) {

            if(arr[left] != arr[right]) {

                return false;
            }

            left++;
            right--;
        }

        return true;
    }
};
```

---

## C

```c
bool isPalindrome(struct ListNode* head) {

    int arr[100000];
    int size = 0;

    struct ListNode* curr = head;

    while(curr) {

        arr[size++] = curr->val;

        curr = curr->next;
    }

    int left = 0;
    int right = size - 1;

    while(left < right) {

        if(arr[left] != arr[right]) {

            return false;
        }

        left++;
        right--;
    }

    return true;
}
```

---

## C#

```csharp
using System.Collections.Generic;

public class Solution {

    public bool IsPalindrome(ListNode head) {

        List<int> arr =
            new List<int>();

        ListNode curr = head;

        while(curr != null) {

            arr.Add(curr.val);

            curr = curr.next;
        }

        int left = 0;
        int right = arr.Count - 1;

        while(left < right) {

            if(arr[left] != arr[right]) {

                return false;
            }

            left++;
            right--;
        }

        return true;
    }
}
```

---

# Optimal Approach (Interview Follow-Up)

Instead of using an array:

1. Find the middle of the linked list.
2. Reverse the second half.
3. Compare both halves.
4. Restore the list if needed.

Complexities:

```text
Time Complexity  : O(n)

Space Complexity : O(1)
```

This is the preferred interview solution.

---

# Summary

### Key Idea

Convert the linked list into an array and compare values from both ends.

```text
left → start

right → end
```

If every pair matches:

```text
Palindrome
```

Otherwise:

```text
Not Palindrome
```

### Complexity

```text
Time Complexity  : O(n)

Space Complexity : O(n)
```

This is the simplest and most intuitive solution for checking whether a linked list is a palindrome.
