// Delete Nodes in a Linked List

const get = (index) => {
    if (index < 0 || index >= this.size) return -1

    let current = this.head
    for (let i = 0; i < index; i++) {
        current = current.next
    }
    return current.val
}


const deleteAtIndex = (index) => {
    if (index < 0 || index >= this.size) return

    if (index === 0) {
        this.head = this.head.next
    } else {
        let current = this.head

        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }

        current.next = current.next.next
    }

    this.size--
}