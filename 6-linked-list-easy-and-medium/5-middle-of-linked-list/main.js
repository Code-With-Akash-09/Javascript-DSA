// Middle of the Linked List

const middleNode = (head) => {
    let slow = head
    let fast = head

    while (slow !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}