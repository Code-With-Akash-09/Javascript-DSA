# Linked List

## What is a Linked List?

A Linked List is a linear data structure in which elements (called **nodes**) are connected using pointers.

Each node contains:

1. A value (actual data)
2. A reference (pointer) to the next node

In some linked lists (like Doubly Linked Lists), a node also stores a pointer to the previous node.

Unlike arrays, linked list elements are not stored in contiguous memory locations.

---

# Structure of a Node

A node generally contains:

```text
[value | next]
```

Where:

- `value` → stores data
- `next` → stores reference to the next node

---

# Types of Linked Lists

## 1. Singly Linked List

A Singly Linked List contains:

```text
value
next
```

Each node points only to the next node.

Traversal is possible in only one direction.

### Structure

```text
[value | next]
      ↓
[value | next]
      ↓
[value | next]
      ↓
     null
```

Example:

```text
10 → 20 → 30 → 40 → null
```

---

## 2. Doubly Linked List

A Doubly Linked List contains:

```text
prev
value
next
```

Each node stores:

- Previous node reference
- Current value
- Next node reference

Traversal is possible in both directions.

### Structure

```text
null ← [prev|10|next]
          ↕
      [prev|20|next]
          ↕
      [prev|30|next]
          ↕
          null
```

Example:

```text
null ← 10 ↔ 20 ↔ 30 ↔ 40 → null
```

---

# Key Terminologies

## Head

The first node of a linked list.

It acts as the entry point.

Example:

```text
Head
 ↓
10 → 20 → 30 → null
```

---

## Tail

The last node of the linked list.

Its next pointer contains:

```text
null
```

Example:

```text
10 → 20 → 30
           ↓
          Tail
```

---

## Linked List Representation

A linked list is usually represented using the head node.

Example:

```text
head → 10 → 20 → 30 → null
```

---

# Visualisation

## Singly Linked List

```text
Head
 ↓
┌─────┬─────┐
│ 10  │  •──┼──►
└─────┴─────┘

          ┌─────┬─────┐
          │ 20  │  •──┼──►
          └─────┴─────┘

                    ┌─────┬─────┐
                    │ 30  │ null│
                    └─────┴─────┘
```

---

## Doubly Linked List

```text
null ← [10] ↔ [20] ↔ [30] → null
```

---

# Array vs Linked List

| Feature | Array | Linked List |
|----------|--------|------------|
| Type | Linear data structure using indexes | Linear data structure using nodes and pointers |
| Memory Layout | Contiguous memory | Non-contiguous memory |
| Size | Fixed or expensive to resize | Dynamic |
| Data Stored | Values only | Value + pointer(s) |
| Access Time | O(1) | O(n) |
| Insertion | O(n) in middle | O(1) after node reference |
| Deletion | O(n) in middle | O(1) after node reference |
| Memory Usage | More efficient | Extra memory for pointers |
| Traversal | Fast indexing | Sequential traversal |

---

# Time Complexity Comparison

| Operation | Array | Linked List |
|------------|--------|-------------|
| Access by Index | O(1) | O(n) |
| Search | O(n) | O(n) |
| Insert at Beginning | O(n) | O(1) |
| Insert at End | O(1)* | O(1)** |
| Delete at Beginning | O(n) | O(1) |
| Delete at End | O(1)* | O(n) |
| Insert in Middle | O(n) | O(1)*** |
| Delete in Middle | O(n) | O(1)*** |

\* Amortized for dynamic arrays

\** If tail pointer exists

\*** If node reference is already available

---

# Use Cases: When to Use What?

| Use Case | Prefer |
|-----------|---------|
| Fast index access | Array |
| Frequent insertions/deletions | Linked List |
| Fixed-size data | Array |
| Dynamic size data | Linked List |
| Memory-efficient storage | Array |
| Frequent node manipulation | Linked List |

---

# When Should You Use an Array?

Use an Array when:

- Fast index-based access is required
- Data size is known beforehand
- Memory efficiency is important
- Random access is frequent

Example:

```text
Student marks
Monthly sales data
Game leaderboard
```

---

# When Should You Use a Linked List?

Use a Linked List when:

- Size changes frequently
- Frequent insertions/deletions occur
- Dynamic memory allocation is needed
- Continuous shifting of elements should be avoided

Example:

```text
Music playlist
Browser history
Undo/Redo feature
Navigation systems
```

---

# Advantages of Linked List

✅ Dynamic size

✅ Efficient insertion

✅ Efficient deletion

✅ No contiguous memory required

✅ Flexible memory usage

---

# Disadvantages of Linked List

❌ No direct indexing

❌ Extra memory for pointers

❌ Slower traversal

❌ More complex implementation

---

# Sample Node Implementation

## JavaScript

```javascript
class Node {

    constructor(value) {

        this.value = value;

        this.next = null;
    }
}
```

---

## Python

```python
class Node:

    def __init__(self, value):

        self.value = value

        self.next = None
```

---

## Java

```java
class Node {

    int value;

    Node next;

    Node(int value) {

        this.value = value;

        this.next = null;
    }
}
```

---

## C++

```cpp
class Node {

public:

    int value;

    Node* next;

    Node(int value) {

        this->value = value;

        this->next = nullptr;
    }
};
```

---

## C

```c
struct Node {

    int value;

    struct Node* next;
};
```

---

## C#

```csharp
class Node {

    public int Value;

    public Node Next;

    public Node(int value) {

        Value = value;

        Next = null;
    }
}
```

---

# Summary

Linked List is a dynamic linear data structure made up of nodes connected through pointers.

### Key Points

- Dynamic size
- Efficient insertion and deletion
- Sequential access
- No direct indexing
- Uses extra memory for pointers

### Complexity Overview

```text
Access      : O(n)

Search      : O(n)

Insert Head : O(1)

Delete Head : O(1)

Space       : O(n)
```