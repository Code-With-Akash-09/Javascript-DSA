// Bubble Sort

const arr = [5, 4, 9, 1, 0]

const bubbleSort = (arr) => {
    const n = arr.length

    for (let i = 0; i < n - 1; i++) {
        
        let isSwapped = false

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped) break
    }
    return arr
}

console.log(bubbleSort(arr)) // [ 0, 1, 4, 5, 9 ]