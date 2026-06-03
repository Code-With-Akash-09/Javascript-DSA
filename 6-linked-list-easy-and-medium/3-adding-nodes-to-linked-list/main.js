// Adding Nodes to Linked List

const addAtHead = (val) => {
    let newNode = new Node(val)
    newnode.next = this.head
    this.head = newNode
    this.size++
}


const addAtTail = (val) => {
    let newNode = new Node(val)

    if (this.head == null) {
        this.head = newNode
    } else {
        let current = this.head

        while (current.next != null) {
            current = current.next
        }

        current.next = newNode
    }
    this.size++
}


const AddAtIndex = (index, val) => {
    let newNode = new Node(val)

    if (index === 0) {
        this.addAtHead(val)
        return
    } else if (index === this.size) {
        this.addAtTail(val)
        return
    } else {
        let current = this.head
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }
    this.size++
}