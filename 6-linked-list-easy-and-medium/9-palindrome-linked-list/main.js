// Palindrome Linked List

const isPalindrome1 = function (head) {
    const array = new Array();
    let current = head;

    while (current) {
        array.push(current.val);
        current = current.next;
    }

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        if (array[left] !== array[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const isPalindrome2 = function (head) {
    // find the middle of the linked list

    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }


    // reverse the second half of the linked list

    let prev = null
    let curr = slow

    while (curr) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    // check is palindrome

    let firstList = head
    let secondList = prev

    while (secondList) {
        if (firstList.val !== secondList.val) {
            return false
        }
        firstList = firstList.next
        secondList = secondList.next
    }
    return true
}  