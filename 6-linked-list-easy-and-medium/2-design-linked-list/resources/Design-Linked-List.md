# Implement a Singly Linked List

## Problem Statement

Design and implement a simple **Singly Linked List** using basic building blocks such as nodes and references (or pointers).

The goal is to:

1. Define a node containing:
   - A value
   - A pointer/reference to the next node

2. Create individual nodes

3. Connect nodes together to form a linked list

4. Traverse the linked list and print all values

This helps in understanding how data is stored and accessed sequentially using references or pointers.

---

# Example

### Input

Create three nodes:

```text
10 → 20 → 30
```

### Output

```text
10
20
30
```

---

# Approach

### Step 1

Create a Node structure/class containing:

```text
value
next
```

---

### Step 2

Create individual nodes:

```text
node1 = 10
node2 = 20
node3 = 30
```

---

### Step 3

Link nodes together:

```text
node1.next → node2

node2.next → node3
```

---

### Step 4

Set:

```text
head = node1
```

---

### Step 5

Traverse the list:

```text
current = head
```

Continue until:

```text
current == null
```

---

### Step 6

Print every node value.

---

# Explanation

Each node stores:

```text
Data
+
Reference to next node
```

Example:

```text
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

Traversal:

```text
Head
 ↓
10 → 20 → 30 → null
```

---

# Visualisation

![Singly Linked List Visualization](IMAGE_URL_HERE)

---

# Time Complexity

### Traversal

```text
O(n)
```

Must visit every node once.

---

# Space Complexity

```text
O(n)
```

One node is stored for each element.

---

# Dry Run

### Create Nodes

```text
node1 = 10
node2 = 20
node3 = 30
```

---

### Link Nodes

```text
node1.next = node2

node2.next = node3
```

Structure:

```text
10 → 20 → 30 → null
```

---

### Traversal

```text
current = node1

print 10

current = node2

print 20

current = node3

print 30

current = null

stop
```

---

### Output

```text
10
20
30
```

---

# Code Implementations

## JavaScript

```javascript
class Node {

    constructor(val) {

        this.val = val;

        this.next = null;
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);

node1.next = node2;
node2.next = node3;

let current = node1;

while (current !== null) {

    console.log(current.val);

    current = current.next;
}
```

---

## Python

```python
class Node:

    def __init__(self, val):

        self.val = val

        self.next = None


node1 = Node(10)
node2 = Node(20)
node3 = Node(30)

node1.next = node2
node2.next = node3

current = node1

while current:

    print(current.val)

    current = current.next
```

---

## Java

```java
class Node {

    int val;

    Node next;

    Node(int val) {

        this.val = val;

        this.next = null;
    }
}

public class Main {

    public static void main(String[] args) {

        Node node1 = new Node(10);
        Node node2 = new Node(20);
        Node node3 = new Node(30);

        node1.next = node2;
        node2.next = node3;

        Node current = node1;

        while(current != null) {

            System.out.println(current.val);

            current = current.next;
        }
    }
}
```

---

## C++

```cpp
#include <iostream>
using namespace std;

struct Node {

    int val;

    Node* next;

    Node(int v) : val(v), next(nullptr) {}
};

int main() {

    Node* node1 = new Node(10);
    Node* node2 = new Node(20);
    Node* node3 = new Node(30);

    node1->next = node2;
    node2->next = node3;

    Node* current = node1;

    while(current != nullptr) {

        cout << current->val << endl;

        current = current->next;
    }

    return 0;
}
```

---

## C

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {

    int val;

    struct Node* next;
};

int main() {

    struct Node* node1 =
        malloc(sizeof(struct Node));

    struct Node* node2 =
        malloc(sizeof(struct Node));

    struct Node* node3 =
        malloc(sizeof(struct Node));

    node1->val = 10;
    node2->val = 20;
    node3->val = 30;

    node1->next = node2;
    node2->next = node3;
    node3->next = NULL;

    struct Node* current = node1;

    while(current != NULL) {

        printf("%d\n", current->val);

        current = current->next;
    }

    return 0;
}
```

---

## C#

```csharp
using System;

class Node {

    public int Val;

    public Node Next;

    public Node(int val) {

        Val = val;

        Next = null;
    }
}

class Program {

    static void Main() {

        Node node1 = new Node(10);
        Node node2 = new Node(20);
        Node node3 = new Node(30);

        node1.Next = node2;
        node2.Next = node3;

        Node current = node1;

        while(current != null) {

            Console.WriteLine(current.Val);

            current = current.Next;
        }
    }
}
```

---

# Summary

A Singly Linked List consists of nodes connected through references.

Each node stores:

```text
Value
+
Next Pointer
```

Structure:

```text
10 → 20 → 30 → null
```

### Complexity

```text
Traversal : O(n)

Insertion at Head : O(1)

Deletion at Head : O(1)

Space : O(n)
```

This is the foundation for:

- Linked Lists
- Stacks
- Queues
- Hash Tables
- Graphs
- LRU Cache