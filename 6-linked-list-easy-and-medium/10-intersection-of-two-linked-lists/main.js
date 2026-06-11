// Intersection of two Linked Lists

const getIntersectionNode = (headA, headB) => {
    if (!headA || !headB) return null;

    const node = new Set()
    let currA = headA
    let currB = headB

    while (currA !== null) {
        node.add(currA)
        currA = currA.next
    }

    while (currB !== null) {
        if (node.has(currB)) {
            return currB
        }
        currB = currB.next
    }
    return null
};