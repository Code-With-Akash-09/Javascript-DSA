# Find the Middle Node of a Singly Linked List

## Problem Statement

Given the head of a singly linked list, find and return the **middle node** of the linked list.

If there are two middle nodes, return the **second middle node**.

---

## Approach (Slow & Fast Pointer)

Use two pointers:

* `slow`
* `fast`

### Steps

1. Initialize both pointers at the head.
2. Move:

   * `slow` → one step at a time
   * `fast` → two steps at a time
3. When `fast` reaches the end of the list:

   * `slow` will be positioned at the middle node.
4. Return `slow`.

This technique is commonly known as the **Tortoise and Hare Algorithm**.

---

## Visualisation

### Example 1

Input:

```text
1 → 2 → 3 → 4 → 5 → null
```

Initial:

```text
slow = 1
fast = 1
```

Iteration 1:

```text
slow = 2
fast = 3
```

Iteration 2:

```text
slow = 3
fast = 5
```

Iteration 3:

```text
fast.next = null
stop
```

Result:

```text
3 → 4 → 5 → null
```

---

### Example 2

Input:

```text
1 → 2 → 3 → 4 → 5 → 6 → null
```

Initial:

```text
slow = 1
fast = 1
```

Iteration 1:

```text
slow = 2
fast = 3
```

Iteration 2:

```text
slow = 3
fast = 5
```

Iteration 3:

```text
slow = 4
fast = null
```

Result:

```text
4 → 5 → 6 → null
```

---

## Examples

### Example 1

#### Input

```text
[1,2,3,4,5]
```

#### Output

```text
[3,4,5]
```

#### Explanation

The middle node is:

```text
3
```

---

### Example 2

#### Input

```text
[1,2,3,4,5,6]
```

#### Output

```text
[4,5,6]
```

#### Explanation

There are two middle nodes:

```text
3 and 4
```

Return the second middle node:

```text
4
```

---

## Constraints

```text
1 <= Number of Nodes <= 100

1 <= Node.val <= 100
```

---

## Dry Run

Input:

```text
1 → 2 → 3 → 4 → 5
```

Initial:

```text
slow = 1
fast = 1
```

### Iteration 1

```text
slow = 2
fast = 3
```

### Iteration 2

```text
slow = 3
fast = 5
```

### Iteration 3

```text
fast.next = null

Stop
```

Return:

```text
slow = 3
```

---

## Time Complexity

```text
O(n)
```

The linked list is traversed only once.

---

## Space Complexity

```text
O(1)
```

Only two pointers are used.

---

## Use Cases

The Slow and Fast Pointer technique is commonly used for:

* Finding the middle node
* Detecting cycles in a linked list
* Finding the start of a loop
* Checking whether a linked list is a palindrome
* Splitting linked lists for Merge Sort

---

## Code Implementations

### JavaScript

```javascript
var middleNode = function(head) {

    let slow = head;
    let fast = head;

    while (fast && fast.next) {

        slow = slow.next;

        fast = fast.next.next;
    }

    return slow;
};
```

---

### Python

```python
class Solution:

    def middleNode(self, head):

        slow = head
        fast = head

        while fast and fast.next:

            slow = slow.next

            fast = fast.next.next

        return slow
```

---

### Java

```java
class Solution {

    public ListNode middleNode(ListNode head) {

        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null) {

            slow = slow.next;

            fast = fast.next.next;
        }

        return slow;
    }
}
```

---

### C++

```cpp
class Solution {
public:

    ListNode* middleNode(ListNode* head) {

        ListNode* slow = head;
        ListNode* fast = head;

        while(fast && fast->next) {

            slow = slow->next;

            fast = fast->next->next;
        }

        return slow;
    }
};
```

---

### C

```c
struct ListNode* middleNode(struct ListNode* head) {

    struct ListNode* slow = head;
    struct ListNode* fast = head;

    while(fast && fast->next) {

        slow = slow->next;

        fast = fast->next->next;
    }

    return slow;
}
```

---

### C#

```csharp
public class Solution {

    public ListNode MiddleNode(ListNode head) {

        ListNode slow = head;
        ListNode fast = head;

        while(fast != null && fast.next != null) {

            slow = slow.next;

            fast = fast.next.next;
        }

        return slow;
    }
}
```

---

## Summary

The Slow and Fast Pointer technique helps find the middle node efficiently.

### Key Idea

```text
slow → moves 1 step

fast → moves 2 steps
```

When:

```text
fast reaches the end
```

Then:

```text
slow reaches the middle
```

### Complexity

```text
Time Complexity  : O(n)

Space Complexity : O(1)
```

This is one of the most important linked list patterns used in coding interviews.
