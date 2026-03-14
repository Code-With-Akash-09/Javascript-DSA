// Palindrome session

function isPalindrome(n) {

    if (n < 0) {
        return false
    }

    let nCopy = n
    let rev = 0;

    while (n > 0) {
        let rem = n % 10
        rev = (10 * rev) + rem
        n = Math.floor(n / 10)
    }

    if (rev === nCopy) {
        return true
    } else {
        return false
    }
}


const result = isPalindrome(2432)
console.log(result);
