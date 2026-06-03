# Design Linked List

## Problem Statement

Design and implement a custom **Singly Linked List** class with the following operations:

### Operations

#### `get(index)`

Return the value of the node at the specified index (0-indexed).

If the index is invalid:

```text
return -1
```

#### `addAtHead(val)`

Insert a node at the beginning of the list.

#### `addAtTail(val)`

Append a node at the end of the list.

#### `addAtIndex(index, val)`

Insert a node before the index-th node in the list.

#### `deleteAtIndex(index)`

Delete the node at the given index.

---

## Approach

1. Use a custom `Node` class that stores:

   * `val`
   * `next`

2. Maintain:

   * `head` pointer to the first node.
   * `size` variable to track the number of nodes.

3. Validate indices before performing operations.

4. Traverse the linked list until the required position is reached.

5. Update pointers carefully during insertion and deletion.

---

## Visualisation

### Initial Empty List

```text
head → null
```

### addAtHead(10)

```text
head
 ↓
10 → null
```

### addAtTail(20)

```text
head
 ↓
10 → 20 → null
```

### addAtIndex(1, 15)

```text
head
 ↓
10 → 15 → 20 → null
```

### deleteAtIndex(1)

```text
head
 ↓
10 → 20 → null
```

---

## Example

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

## Time Complexity

| Operation              | Complexity |
| ---------------------- | ---------- |
| get(index)             | O(n)       |
| addAtHead(val)         | O(1)       |
| addAtTail(val)         | O(n)       |
| addAtIndex(index, val) | O(n)       |
| deleteAtIndex(index)   | O(n)       |

---

## Space Complexity

```text
O(n)
```

One node is stored for each element.

---

## Dry Run

### Initial State

```text
head = null
size = 0
```

### addAtHead(10)

```text
10 → null
```

```text
size = 1
```

### addAtTail(20)

```text
10 → 20 → null
```

```text
size = 2
```

### addAtTail(30)

```text
10 → 20 → 30 → null
```

```text
size = 3
```

### get(1)

```text
Traverse:

10 → 20

Return 20
```

### deleteAtIndex(1)

```text
Delete node 20

10 → 30 → null
```

```text
size = 2
```

### get(1)

```text
Return 30
```

---

## Code (C++)

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
        if (index < 0 || index >= size)
            return -1;

        Node* curr = head;

        for (int i = 0; i < index; i++)
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

        if (!head) {
            head = node;
        } else {
            Node* curr = head;

            while (curr->next)
                curr = curr->next;

            curr->next = node;
        }

        size++;
    }

    void addAtIndex(int index, int val) {
        if (index < 0 || index > size)
            return;

        if (index == 0)
            return addAtHead(val);

        if (index == size)
            return addAtTail(val);

        Node* node = new Node(val);

        Node* curr = head;

        for (int i = 0; i < index - 1; i++)
            curr = curr->next;

        node->next = curr->next;
        curr->next = node;

        size++;
    }

    void deleteAtIndex(int index) {
        if (index < 0 || index >= size)
            return;

        Node* temp;

        if (index == 0) {
            temp = head;
            head = head->next;
        } else {
            Node* curr = head;

            for (int i = 0; i < index - 1; i++)
                curr = curr->next;

            temp = curr->next;
            curr->next = temp->next;
        }

        delete temp;
        size--;
    }
};
```

---

## Summary

A custom Singly Linked List supports:

```text
get(index)

addAtHead(val)

addAtTail(val)

addAtIndex(index, val)

deleteAtIndex(index)
```

### Complexity Overview

```text
get             : O(n)

addAtHead       : O(1)

addAtTail       : O(n)

addAtIndex      : O(n)

deleteAtIndex   : O(n)

Space           : O(n)
```

This problem is one of the most common Linked List design questions asked in coding interviews and serves as the foundation for advanced linked list operations.
