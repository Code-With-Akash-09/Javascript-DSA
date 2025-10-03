// Sum of all odd numbers in an array

const arr = [5, 2, 0, 3, 6, 7]

const sumOdd = (n) => {
    isOdd = n % 2 !== 0;
    if (n == 0) {
        return isOdd ? arr[n] : 0;
    }
    return ((isOdd ? arr[n] : 0) + sumOdd(n - 1));
}

const result = sumOdd(arr.length - 1);
console.log(result);