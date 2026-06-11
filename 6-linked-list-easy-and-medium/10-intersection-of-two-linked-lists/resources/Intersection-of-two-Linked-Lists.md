# Intersection of Two Linked Lists

## Problem Statement

Given the heads of two singly linked lists:

```text id="b2xk4j"
headA

headB
```

return the node where the two linked lists intersect.

If the linked lists do not intersect, return:

```text id="4x4lq7"
null
```

The intersection is based on **node reference**, not node value.

---

## Examples

### Example 1

#### Input

```text id="j5z4qx"
intersectVal = 8

listA = [4,1,8,4,5]

listB = [5,6,1,8,4,5]

skipA = 2

skipB = 3
```

#### Visualization

```text id="i7ctol"
List A:

4 → 1
       \
        8 → 4 → 5
       /
5 → 6 → 1

List B
```

#### Output

```text id="zefpmk"
Intersected at '8'
```

---

### Example 2

#### Input

```text id="fhn7lj"
intersectVal = 2

listA = [1,9,1,2,4]

listB = [3,2,4]

skipA = 3

skipB = 1
```

#### Visualization

```text id="fc6b2d"
1 → 9 → 1
           \
            2 → 4
           /
3 --------
```

#### Output

```text id="owwhvq"
Intersected at '2'
```

---

### Example 3

#### Input

```text id="jvly6y"
intersectVal = 0

listA = [2,6,4]

listB = [1,5]
```

#### Visualization

```text id="k6z9hm"
2 → 6 → 4

1 → 5
```

#### Output

```text id="w4s8vc"
No intersection
```

---

## Constraints

```text id="3vclad"
0 <= Number of Nodes <= 10⁴

-10⁵ <= Node.val <= 10⁵
```

Additional Conditions:

```text id="t5ks1x"
Lists are acyclic

List structure must remain unchanged
```

---

# Approach (Using Hash Set)

### Idea

Store every node from:

```text id="5jzb2j"
headB
```

inside a Set.

Then traverse:

```text id="dw3f7m"
headA
```

If any node already exists in the Set:

```text id="hjqjlwm"
Intersection Found
```

Return that node.

Otherwise:

```text id="j7c8uw"
return null
```

---

# Algorithm

### Step 1

Create a Set:

```text id="pvpwuz"
visitedNodes = {}
```

---

### Step 2

Traverse List B.

Store every node:

```text id="4i2e06"
Set = {all nodes of B}
```

---

### Step 3

Traverse List A.

For each node:

Check:

```text id="z9p5pb"
Does Set contain this node?
```

---

### Step 4

If yes:

```text id="vc43e8"
return current node
```

---

### Step 5

If traversal finishes:

```text id="5dylk4"
return null
```

---

# Why This Works

Intersection means:

```text id="kzjlwm"
Same memory address

Same node object
```

not simply equal values.

A Set allows us to quickly check:

```text id="w8fwj8"
Has this node appeared before?
```

in:

```text id="g6l8vg"
O(1)
```

time.

---

# Visualisation

## Example

### List A

```text id="3i42c3"
4 → 1
       \
        8 → 4 → 5
```

### List B

```text id="mxrduz"
5 → 6 → 1
       \
        8 → 4 → 5
```

---

### Step 1

Store List B nodes:

```text id="u50s6g"
Set = {
  5,
  6,
  1,
  8,
  4,
  5
}
```

(Node references stored internally)

---

### Step 2

Traverse List A

Current:

```text id="5cfj6h"
4
```

Not found.

---

Current:

```text id="c5mbfw"
1
```

Not found.

---

Current:

```text id="4r5f1g"
8
```

Found in Set.

Return:

```text id="awzq8z"
Node 8
```

---

# Dry Run

Input:

```text id="7vaydt"
A: 1 → 2 → 3 → 7 → 8

B: 5 → 6 ↘
           7 → 8
```

---

### Build Set

```text id="4l8k0r"
Set = {5,6,7,8}
```

---

### Traverse A

Current:

```text id="3m7tyt"
1
```

Not found.

---

Current:

```text id="3hb9t5"
2
```

Not found.

---

Current:

```text id="t5l33r"
3
```

Not found.

---

Current:

```text id="7l3yvy"
7
```

Found in Set.

Return:

```text id="43im6j"
Node 7
```

---

# Time Complexity

```text id="wgcr7i"
O(n + m)
```

Where:

```text id="1e8gl7"
n = length of List A

m = length of List B
```

Reason:

* Traverse List B once → O(m)
* Traverse List A once → O(n)

Total:

```text id="l4ubkn"
O(n + m)
```

---

# Space Complexity

```text id="7y8m8k"
O(m)
```

The Set stores every node from List B.

---

# Code Implementations

## JavaScript

```javascript id="zv0p8y"
var getIntersectionNode = function(headA, headB) {

    let set = new Set();

    while (headB) {

        set.add(headB);

        headB = headB.next;
    }

    while (headA) {

        if (set.has(headA)) {

            return headA;
        }

        headA = headA.next;
    }

    return null;
};
```

---

## Python

```python id="lhn7ha"
class Solution:

    def getIntersectionNode(self, headA, headB):

        visited = set()

        while headB:

            visited.add(headB)

            headB = headB.next

        while headA:

            if headA in visited:

                return headA

            headA = headA.next

        return None
```

---

## Java

```java id="xjlwm7"
import java.util.HashSet;

public class Solution {

    public ListNode getIntersectionNode(
        ListNode headA,
        ListNode headB
    ) {

        HashSet<ListNode> set =
            new HashSet<>();

        while(headB != null) {

            set.add(headB);

            headB = headB.next;
        }

        while(headA != null) {

            if(set.contains(headA)) {

                return headA;
            }

            headA = headA.next;
        }

        return null;
    }
}
```

---

## C++

```cpp id="5ybobk"
#include <unordered_set>

class Solution {
public:

    ListNode* getIntersectionNode(
        ListNode* headA,
        ListNode* headB
    ) {

        std::unordered_set<ListNode*> set;

        while(headB) {

            set.insert(headB);

            headB = headB->next;
        }

        while(headA) {

            if(set.count(headA)) {

                return headA;
            }

            headA = headA->next;
        }

        return nullptr;
    }
};
```

---

## C

```c id="f0z2l8"
struct ListNode* getIntersectionNode(
    struct ListNode* headA,
    struct ListNode* headB
) {

    /*
      Hash table implementation required.

      Store all nodes of List B.

      Traverse List A.

      Return matching node.
    */

    return NULL;
}
```

---

## C#

```csharp id="vzbjlwm"
using System.Collections.Generic;

public class Solution {

    public ListNode GetIntersectionNode(
        ListNode headA,
        ListNode headB
    ) {

        HashSet<ListNode> set =
            new HashSet<ListNode>();

        while(headB != null) {

            set.Add(headB);

            headB = headB.next;
        }

        while(headA != null) {

            if(set.Contains(headA)) {

                return headA;
            }

            headA = headA.next;
        }

        return null;
    }
}
```

---

# Optimal Approach (Interview Follow-Up)

Instead of using a Set:

Use two pointers.

### Idea

Traverse both lists simultaneously.

When a pointer reaches the end:

```text id="qr7tku"
Switch to the other list
```

Eventually:

```text id="bgbsvs"
Both pointers travel equal distance
```

and meet at the intersection node.

### Complexity

```text id="70eqdz"
Time Complexity  : O(n + m)

Space Complexity : O(1)
```

This is the most commonly expected interview solution.

---

# Summary

Use a Hash Set to store all nodes from one list.

### Key Idea

```text id="0lzw6l"
Store List B nodes

Traverse List A

First matching node
=
Intersection
```

### Complexity

```text id="jyz5uh"
Time Complexity  : O(n + m)

Space Complexity : O(m)
```

This approach is simple, easy to understand, and a good stepping stone toward the optimal two-pointer solution.
