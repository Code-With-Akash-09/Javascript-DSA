# Reverse Linked List

## Problem Statement

Given the head of a singly linked list, reverse the linked list and return the new head of the reversed list.

---

## Examples

### Example 1

#### Input

```text
head = [1,2,3,4,5]
```

#### Output

```text
[5,4,3,2,1]
```

---

### Example 2

#### Input

```text
head = [1,2]
```

#### Output

```text
[2,1]
```

---

### Example 3

#### Input

```text
head = []
```

#### Output

```text
[]
```

---

## Constraints

```text
0 <= Number of Nodes <= 5000

-5000 <= Node.val <= 5000
```

---

# Approach

Use three pointers:

```text
prev
curr
temp
```

### Step 1

Initialize:

```text
prev = null
curr = head
```

---

### Step 2

Store the next node before changing links:

```text
temp = curr.next
```

---

### Step 3

Reverse the link:

```text
curr.next = prev
```

---

### Step 4

Move pointers forward:

```text
prev = curr

curr = temp
```

---

### Step 5

Repeat until:

```text
curr == null
```

---

### Step 6

Return:

```text
prev
```

because it becomes the new head of the reversed linked list.

---

# Visualisation

## Original Linked List

```text
head
 ↓
1 → 2 → 3 → 4 → 5 → null
```

---

## Iteration 1

Current:

```text
curr = 1
prev = null
```

Reverse:

```text
1 → null
```

State:

```text
prev = 1
curr = 2
```

---

## Iteration 2

Reverse:

```text
2 → 1 → null
```

State:

```text
prev = 2
curr = 3
```

---

## Iteration 3

Reverse:

```text
3 → 2 → 1 → null
```

State:

```text
prev = 3
curr = 4
```

---

## Iteration 4

Reverse:

```text
4 → 3 → 2 → 1 → null
```

State:

```text
prev = 4
curr = 5
```

---

## Iteration 5

Reverse:

```text
5 → 4 → 3 → 2 → 1 → null
```

State:

```text
prev = 5
curr = null
```

---

## Final Reversed List

```text
head
 ↓
5 → 4 → 3 → 2 → 1 → null
```

---

## Dry Run

### Input

```text
1 → 2 → 3 → null
```

Initial:

```text
prev = null
curr = 1
```

---

### Iteration 1

```text
temp = 2

1.next = null

prev = 1

curr = 2
```

List:

```text
1 → null
```

---

### Iteration 2

```text
temp = 3

2.next = 1

prev = 2

curr = 3
```

List:

```text
2 → 1 → null
```

---

### Iteration 3

```text
temp = null

3.next = 2

prev = 3

curr = null
```

List:

```text
3 → 2 → 1 → null
```

---

### Return

```text
prev
```

Output:

```text
3 → 2 → 1 → null
```

---

## Time Complexity

```text
O(n)
```

Each node is visited exactly once.

---

## Space Complexity

```text
O(1)
```

Only a constant number of pointers are used.

---

## Why This Works

At every step:

```text
curr.next
```

is reversed to point to:

```text
prev
```

Gradually:

```text
1 → 2 → 3 → 4 → 5
```

becomes:

```text
5 → 4 → 3 → 2 → 1
```

without using extra memory.

---

## Code Implementations

### JavaScript

```javascript
var reverseList = function(head) {

    let prev = null;
    let curr = head;

    while (curr) {

        let temp = curr.next;

        curr.next = prev;

        prev = curr;

        curr = temp;
    }

    return prev;
};
```

---

### Python

```python
class Solution:

    def reverseList(self, head):

        prev = None
        curr = head

        while curr:

            temp = curr.next

            curr.next = prev

            prev = curr

            curr = temp

        return prev
```

---

### Java

```java
class Solution {

    public ListNode reverseList(ListNode head) {

        ListNode prev = null;
        ListNode curr = head;

        while(curr != null) {

            ListNode temp = curr.next;

            curr.next = prev;

            prev = curr;

            curr = temp;
        }

        return prev;
    }
}
```

---

### C++

```cpp
class Solution {
public:

    ListNode* reverseList(ListNode* head) {

        ListNode* prev = nullptr;
        ListNode* curr = head;

        while(curr) {

            ListNode* temp = curr->next;

            curr->next = prev;

            prev = curr;

            curr = temp;
        }

        return prev;
    }
};
```

---

### C

```c
struct ListNode* reverseList(struct ListNode* head) {

    struct ListNode* prev = NULL;
    struct ListNode* curr = head;

    while(curr) {

        struct ListNode* temp = curr->next;

        curr->next = prev;

        prev = curr;

        curr = temp;
    }

    return prev;
}
```

---

### C#

```csharp
public class Solution {

    public ListNode ReverseList(ListNode head) {

        ListNode prev = null;
        ListNode curr = head;

        while(curr != null) {

            ListNode temp = curr.next;

            curr.next = prev;

            prev = curr;

            curr = temp;
        }

        return prev;
    }
}
```

---

## Summary

To reverse a linked list:

1. Store next node.
2. Reverse current node's pointer.
3. Move pointers forward.
4. Continue until the end.

### Pointer Movement

```text
prev ← curr → next
```

becomes

```text
prev ← curr
```

and moves forward.

### Complexity

```text
Time Complexity  : O(n)

Space Complexity : O(1)
```

This is one of the most important linked list interview problems and demonstrates in-place pointer manipulation.
