// Linear Search 

const arr = [4, 9, 1, 0, 2]
const target = 0  

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) { 
            return i
        }  
    }
    return -1
}

console.log(linearSearch(arr, target))