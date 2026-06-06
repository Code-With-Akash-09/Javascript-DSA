// Linked list cycle using hash table 

const hasCycle = (head) => {
    let seedNode = new Set()
    let curr = head

    while (curr !== null) {
        if (seedNode.has(curr)) {
            return true
        }
        seedNode.add(curr)
        curr = curr.next
    }
    return false
}