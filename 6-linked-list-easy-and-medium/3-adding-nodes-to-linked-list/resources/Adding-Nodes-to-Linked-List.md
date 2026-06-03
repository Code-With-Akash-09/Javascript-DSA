# Design Linked List

## Problem Statement

Design and implement a custom **Singly Linked List** class with the following operations:

### Operations

#### `get(index)`

Return the value of the node at the specified index.

If the index is invalid:

```text
return -1
```

---

#### `addAtHead(val)`

Insert a node at the beginning of the list.

---

#### `addAtTail(val)`

Insert a node at the end of the list.

---

#### `addAtIndex(index, val)`

Insert a node before the given index.

---

#### `deleteAtIndex(index)`

Delete the node at the specified index.

---

# Example

### Operations

```text
addAtHead(10)

addAtTail(20)

addAtTail(30)

get(1)

deleteAtIndex(1)

get(1)
```

### Output

```text
20

30
```

---

# Approach

### Step 1

Create a custom Node class containing:

```text
val
next
```

---

### Step 2

Maintain:

```text
head
```

Pointer to first node.

---

### Step 3

Maintain:

```text
size
```

Tracks number of nodes.

---

### Step 4

For each operation:

- Validate index
- Traverse linked list when necessary
- Update pointers accordingly

---

# Linked List Structure

Example:

```text
head
 ↓
10 → 20 → 30 → null
```

---

# Visualisation

## Initial List

```text
head
 ↓
10 → 20 → 30 → null
```

---

## addAtHead(5)

```text
head
 ↓
5 → 10 → 20 → 30 → null
```

---

## addAtTail(40)

```text
head
 ↓
10 → 20 → 30 → 40 → null
```

---

## addAtIndex(2, 15)

```text
head
 ↓
10 → 20 → 15 → 30 → null
```

---

## deleteAtIndex(1)

```text
head
 ↓
10 → 30 → 40 → null
```

---

# Time Complexity

| Operation | Complexity |
|------------|------------|
| get | O(n) |
| addAtHead | O(1) |
| addAtTail | O(n) |
| addAtIndex | O(n) |
| deleteAtIndex | O(n) |

---

# Space Complexity

```text
O(n)
```

One node per element.

---

# Dry Run

### Initial State

```text
head = null

size = 0
```

---

### addAtHead(10)

```text
10 → null
```

size:

```text
1
```

---

### addAtTail(20)

```text
10 → 20 → null
```

size:

```text
2
```

---

### addAtTail(30)

```text
10 → 20 → 30 → null
```

size:

```text
3
```

---

### get(1)

Traversal:

```text
10 → 20
```

Return:

```text
20
```

---

### deleteAtIndex(1)

Delete:

```text
20
```

Result:

```text
10 → 30 → null
```

---

### get(1)

Return:

```text
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

class MyLinkedList {

    constructor() {

        this.head = null;

        this.size = 0;
    }

    get(index) {

        if (
            index < 0 ||
            index >= this.size
        ) {
            return -1;
        }

        let curr = this.head;

        for (let i = 0; i < index; i++) {

            curr = curr.next;
        }

        return curr.val;
    }

    addAtHead(val) {

        const node = new Node(val);

        node.next = this.head;

        this.head = node;

        this.size++;
    }

    addAtTail(val) {

        const node = new Node(val);

        if (!this.head) {

            this.head = node;

        } else {

            let curr = this.head;

            while (curr.next) {

                curr = curr.next;
            }

            curr.next = node;
        }

        this.size++;
    }

    addAtIndex(index, val) {

        if (
            index < 0 ||
            index > this.size
        ) {
            return;
        }

        if (index === 0) {

            this.addAtHead(val);

            return;
        }

        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {

            curr = curr.next;
        }

        const node = new Node(val);

        node.next = curr.next;

        curr.next = node;

        this.size++;
    }

    deleteAtIndex(index) {

        if (
            index < 0 ||
            index >= this.size
        ) {
            return;
        }

        if (index === 0) {

            this.head = this.head.next;

            this.size--;

            return;
        }

        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {

            curr = curr.next;
        }

        curr.next = curr.next.next;

        this.size--;
    }
}
```

---

## Python

```python
class Node:

    def __init__(self, val):

        self.val = val

        self.next = None


class MyLinkedList:

    def __init__(self):

        self.head = None

        self.size = 0

    def get(self, index):

        if index < 0 or index >= self.size:

            return -1

        curr = self.head

        for _ in range(index):

            curr = curr.next

        return curr.val

    def addAtHead(self, val):

        node = Node(val)

        node.next = self.head

        self.head = node

        self.size += 1

    def addAtTail(self, val):

        node = Node(val)

        if not self.head:

            self.head = node

        else:

            curr = self.head

            while curr.next:

                curr = curr.next

            curr.next = node

        self.size += 1

    def addAtIndex(self, index, val):

        if index < 0 or index > self.size:

            return

        if index == 0:

            self.addAtHead(val)

            return

        curr = self.head

        for _ in range(index - 1):

            curr = curr.next

        node = Node(val)

        node.next = curr.next

        curr.next = node

        self.size += 1

    def deleteAtIndex(self, index):

        if index < 0 or index >= self.size:

            return

        if index == 0:

            self.head = self.head.next

            self.size -= 1

            return

        curr = self.head

        for _ in range(index - 1):

            curr = curr.next

        curr.next = curr.next.next

        self.size -= 1
```

---

## Java

```java
class MyLinkedList {

    class Node {

        int val;

        Node next;

        Node(int val) {

            this.val = val;
        }
    }

    private Node head;

    private int size;

    public MyLinkedList() {

        head = null;

        size = 0;
    }

    public int get(int index) {

        if(index < 0 || index >= size)
            return -1;

        Node curr = head;

        for(int i=0;i<index;i++)
            curr = curr.next;

        return curr.val;
    }

    public void addAtHead(int val) {

        Node node = new Node(val);

        node.next = head;

        head = node;

        size++;
    }

    public void addAtTail(int val) {

        Node node = new Node(val);

        if(head == null) {

            head = node;

        } else {

            Node curr = head;

            while(curr.next != null)
                curr = curr.next;

            curr.next = node;
        }

        size++;
    }
}
```

---

## C++

```cpp
class MyLinkedList {

private:

    struct Node {

        int val;

        Node* next;

        Node(int x)
            : val(x), next(nullptr) {}
    };

    Node* head;

    int size;

public:

    MyLinkedList()
        : head(nullptr), size(0) {}

    int get(int index) {

        if(index < 0 || index >= size)
            return -1;

        Node* curr = head;

        for(int i=0;i<index;i++)
            curr = curr->next;

        return curr->val;
    }

    void addAtHead(int val) {

        Node* node = new Node(val);

        node->next = head;

        head = node;

        size++;
    }

    void addAtTail(int val) {

        Node* node = new Node(val);

        if(!head) {

            head = node;

        } else {

            Node* curr = head;

            while(curr->next)
                curr = curr->next;

            curr->next = node;
        }

        size++;
    }
};
```

---

## C

```c
struct Node {

    int val;

    struct Node* next;
};

struct MyLinkedList {

    struct Node* head;

    int size;
};
```

---

## C#

```csharp
public class MyLinkedList {

    private class Node {

        public int Val;

        public Node Next;

        public Node(int val) {

            Val = val;
        }
    }

    private Node head;

    private int size;

    public MyLinkedList() {

        head = null;

        size = 0;
    }

    public int Get(int index) {

        if(index < 0 || index >= size)
            return -1;

        Node curr = head;

        for(int i=0;i<index;i++)
            curr = curr.Next;

        return curr.Val;
    }
}
```

---

# Summary

This implementation provides a custom Singly Linked List supporting:

```text
get(index)

addAtHead(val)

addAtTail(val)

addAtIndex(index, val)

deleteAtIndex(index)
```

### Complexity

```text
get             : O(n)

addAtHead       : O(1)

addAtTail       : O(n)

addAtIndex      : O(n)

deleteAtIndex   : O(n)

Space           : O(n)
```

This is one of the most commonly asked Linked List design questions in coding interviews and forms the foundation for advanced linked list problems.