// Reverse a string


let arr = ['a', 'k', 'a', 's', 'h', "l"];

const reverseString = (s) => {

    let length = s.length
    let halfLen = Math.floor(length / 2)

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = temp
    }
    return s
}

let result = reverseString(arr)
console.log(result);
