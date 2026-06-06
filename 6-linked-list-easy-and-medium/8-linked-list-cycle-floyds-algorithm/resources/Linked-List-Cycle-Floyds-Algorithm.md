# Linked List Cycle Using Floyd's Cycle Detection

## Problem Statement

Given the head of a linked list, determine whether the linked list contains a cycle.

Return:

```text
true
```

if there is a cycle.

Return:

```text
false
```

if there is no cycle.

A cycle exists if some node in the linked list can be reached again by continuously following the `next` pointer.

---

## Examples

### Example 1

#### Input

```text
head = [3,2,0,-4]

pos = 1
```

Visualization:

```text
3 → 2 → 0 → -4
    ↑       ↓
    └───────┘
```

#### Output

```text
true
```

---

### Example 2

#### Input

```text
head = [1,2]

pos = 0
```

Visualization:

```text
1 → 2
↑   ↓
└───┘
```

#### Output

```text
true
```

---

### Example 3

#### Input

```text
head = [1]

pos = -1
```

Visualization:

```text
1 → null
```

#### Output

```text
false
```

---

## Constraints

```text
0 <= Number of Nodes <= 10⁴

-10⁵ <= Node.val <= 10⁵

pos is either:
-1
or a valid node index
```

---

# Approach (Floyd's Cycle Detection Algorithm)

This algorithm is also known as:

```text
Tortoise and Hare Algorithm
```

Use two pointers:

```text
slow
fast
```

### Movement

```text
slow → moves 1 step

fast → moves 2 steps
```

---

## Key Observation

If a cycle exists:

```text
fast
```

will eventually catch:

```text
slow
```

inside the cycle.

If there is no cycle:

```text
fast
```

will reach:

```text
null
```

first.

---

# Algorithm

### Step 1

Initialize:

```text
slow = head

fast = head.next
```

---

### Step 2

While:

```text
slow != fast
```

continue moving pointers.

---

### Step 3

Move pointers:

```text
slow = slow.next

fast = fast.next.next
```

---

### Step 4

If:

```text
fast == null

or

fast.next == null
```

Return:

```text
false
```

because the list ends.

---

### Step 5

If:

```text
slow == fast
```

Return:

```text
true
```

because a cycle exists.

---

# Why This Works

Imagine a race track.

```text
slow = tortoise

fast = hare
```

The hare moves faster.

If there is a loop:

```text
fast
```

must eventually lap:

```text
slow
```

and meet it.

If there is no loop:

```text
fast
```

simply reaches the end.

---

# Visualisation

## Example

```text
3 → 2 → 0 → -4
    ↑       ↓
    └───────┘
```

---

### Initial State

```text
slow = 3

fast = 2
```

---

### Iteration 1

```text
slow = 2

fast = -4
```

---

### Iteration 2

```text
slow = 0

fast = 0
```

Pointers meet.

Cycle detected.

Return:

```text
true
```

---

# Dry Run

Input:

```text
1 → 2 → 3 → 4
      ↑     ↓
      └─────┘
```

---

### Initial

```text
slow = 1

fast = 2
```

---

### Iteration 1

```text
slow = 2

fast = 4
```

---

### Iteration 2

```text
slow = 3

fast = 3
```

Pointers meet.

Return:

```text
true
```

---

# Dry Run (No Cycle)

Input:

```text
1 → 2 → 3 → null
```

---

### Initial

```text
slow = 1

fast = 2
```

---

### Iteration 1

```text
slow = 2

fast = null
```

Stop.

Return:

```text
false
```

---

# Time Complexity

```text
O(n)
```

Each pointer traverses the list at most a constant number of times.

---

# Space Complexity

```text
O(1)
```

Only two pointers are used.

No extra memory is required.

---

# Comparison with Hash Table Approach

| Approach          | Time | Space |
| ----------------- | ---- | ----- |
| Hash Table        | O(n) | O(n)  |
| Floyd's Algorithm | O(n) | O(1)  |

---

# Code Implementations

## JavaScript

```javascript
var hasCycle = function(head) {

    if (!head) return false;

    let slow = head;

    let fast = head.next;

    while (slow !== fast) {

        if (!fast || !fast.next) {

            return false;
        }

        slow = slow.next;

        fast = fast.next.next;
    }

    return true;
};
```

---

## Python

```python
class Solution:

    def hasCycle(self, head):

        if not head:

            return False

        slow = head

        fast = head.next

        while slow != fast:

            if not fast or not fast.next:

                return False

            slow = slow.next

            fast = fast.next.next

        return True
```

---

## Java

```java
class Solution {

    public boolean hasCycle(ListNode head) {

        if(head == null)
            return false;

        ListNode slow = head;

        ListNode fast = head.next;

        while(slow != fast) {

            if(fast == null || fast.next == null)
                return false;

            slow = slow.next;

            fast = fast.next.next;
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

    bool hasCycle(ListNode* head) {

        if(!head)
            return false;

        ListNode* slow = head;

        ListNode* fast = head->next;

        while(slow != fast) {

            if(!fast || !fast->next)
                return false;

            slow = slow->next;

            fast = fast->next->next;
        }

        return true;
    }
};
```

---

## C

```c
bool hasCycle(struct ListNode* head) {

    if(head == NULL)
        return false;

    struct ListNode* slow = head;

    struct ListNode* fast = head->next;

    while(slow != fast) {

        if(fast == NULL || fast->next == NULL)
            return false;

        slow = slow->next;

        fast = fast->next->next;
    }

    return true;
}
```

---

## C#

```csharp
public class Solution {

    public bool HasCycle(ListNode head) {

        if(head == null)
            return false;

        ListNode slow = head;

        ListNode fast = head.next;

        while(slow != fast) {

            if(fast == null || fast.next == null)
                return false;

            slow = slow.next;

            fast = fast.next.next;
        }

        return true;
    }
}
```

---

# Use Cases

The Slow and Fast Pointer technique is widely used in:

* Cycle Detection
* Finding the Middle Node
* Detecting Circular Structures
* Finding Start of Cycle
* Palindrome Linked List Problems
* Happy Number Problems

---

# Summary

Floyd's Cycle Detection Algorithm uses two pointers moving at different speeds.

### Key Idea

```text
slow → 1 step

fast → 2 steps
```

If a cycle exists:

```text
slow == fast
```

at some point.

Otherwise:

```text
fast reaches null
```

### Complexity

```text
Time Complexity  : O(n)

Space Complexity : O(1)
```

This is the optimal solution for detecting cycles in a linked list and is one of the most frequently asked linked list interview questions.
