# Detect Linked List Cycle Using Hash Table

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

A cycle exists if a node can be reached again by continuously following the `next` pointer.

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

# Approach (Hash Table / Set)

Use a Set to store visited nodes.

### Steps

1. Create an empty Set.

```text
seenNodes = {}
```

2. Start traversing from the head.

3. For each node:

   * If the node already exists in the Set:

   ```text
   Cycle Found
   ```

   Return:

   ```text
   true
   ```

4. Otherwise:

   Add the node into the Set.

5. Continue traversal.

6. If traversal reaches:

```text
null
```

Return:

```text
false
```

because no cycle exists.

---

# Why This Works

A linked list without a cycle visits every node exactly once.

If we ever encounter the same node again:

```text
Node already visited
```

then we must be looping around a cycle.

---

# Visualisation

## Example

Input:

```text
3 → 2 → 0 → -4
    ↑       ↓
    └───────┘
```

---

### Iteration 1

Current:

```text
3
```

Set:

```text
{3}
```

Move:

```text
2
```

---

### Iteration 2

Current:

```text
2
```

Set:

```text
{3, 2}
```

Move:

```text
0
```

---

### Iteration 3

Current:

```text
0
```

Set:

```text
{3, 2, 0}
```

Move:

```text
-4
```

---

### Iteration 4

Current:

```text
-4
```

Set:

```text
{3, 2, 0, -4}
```

Move:

```text
2
```

---

### Iteration 5

Current:

```text
2
```

Check:

```text
Already in Set
```

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
          ↑  ↓
          └──┘
```

Initial:

```text
Set = {}
```

---

Visit 1

```text
Set = {1}
```

---

Visit 2

```text
Set = {1,2}
```

---

Visit 3

```text
Set = {1,2,3}
```

---

Visit 4

```text
Set = {1,2,3,4}
```

---

Move back to 3

Check:

```text
3 already exists in Set
```

Return:

```text
true
```

---

# Time Complexity

```text
O(n)
```

Each node is visited at most once.

Set lookup is:

```text
O(1)
```

on average.

---

# Space Complexity

```text
O(n)
```

In the worst case:

```text
No cycle exists
```

and all nodes are stored inside the Set.

---

# Code Implementations

### JavaScript

```javascript
var hasCycle = function(head) {

    let seenNodes = new Set();

    let curr = head;

    while (curr !== null) {

        if (seenNodes.has(curr)) {

            return true;
        }

        seenNodes.add(curr);

        curr = curr.next;
    }

    return false;
};
```

---

### Python

```python
class Solution:

    def hasCycle(self, head):

        seenNodes = set()

        curr = head

        while curr:

            if curr in seenNodes:

                return True

            seenNodes.add(curr)

            curr = curr.next

        return False
```

---

### Java

```java
import java.util.HashSet;

class Solution {

    public boolean hasCycle(ListNode head) {

        HashSet<ListNode> seenNodes =
            new HashSet<>();

        ListNode curr = head;

        while(curr != null) {

            if(seenNodes.contains(curr)) {

                return true;
            }

            seenNodes.add(curr);

            curr = curr.next;
        }

        return false;
    }
}
```

---

### C++

```cpp
#include <unordered_set>

class Solution {
public:

    bool hasCycle(ListNode* head) {

        std::unordered_set<ListNode*> seenNodes;

        ListNode* curr = head;

        while(curr) {

            if(seenNodes.count(curr)) {

                return true;
            }

            seenNodes.insert(curr);

            curr = curr->next;
        }

        return false;
    }
};
```

---

### C

```c
bool hasCycle(struct ListNode* head) {

    // In C, a hash table implementation
    // is required to store visited nodes.

    // Pseudocode:

    /*
    Create HashSet

    While(curr != NULL)

        If curr exists in HashSet
            return true

        Insert curr

        curr = curr->next

    return false
    */

    return false;
}
```

---

### C#

```csharp
using System.Collections.Generic;

public class Solution {

    public bool HasCycle(ListNode head) {

        HashSet<ListNode> seenNodes =
            new HashSet<ListNode>();

        ListNode curr = head;

        while(curr != null) {

            if(seenNodes.Contains(curr)) {

                return true;
            }

            seenNodes.Add(curr);

            curr = curr.next;
        }

        return false;
    }
}
```

---

# Alternative Optimal Approach

Instead of using extra memory:

Use:

```text
Slow Pointer
Fast Pointer
```

(Floyd's Cycle Detection Algorithm)

If:

```text
slow == fast
```

then a cycle exists.

Complexities:

```text
Time  : O(n)

Space : O(1)
```

which is more optimal than the Hash Table approach.

---

# Summary

Use a Hash Table (Set) to track visited nodes.

### Key Idea

```text
If a node appears again,
a cycle exists.
```

### Algorithm

```text
Traverse

Check Set

If already visited:
    return true

Else:
    insert node

Continue
```

### Complexity

```text
Time Complexity  : O(n)

Space Complexity : O(n)
```

This approach is simple, intuitive, and often used as the first solution before learning Floyd's Cycle Detection Algorithm.
