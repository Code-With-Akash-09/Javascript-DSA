// Sum of all elements in an array


const sum = (n) => {
    if (n === 0) return arr[0]

    return arr[n] + sum(n - 1)
}

const arr = [5, 4, 3, 0, 1]

const result = sum(arr.length - 1);
console.log(result);
