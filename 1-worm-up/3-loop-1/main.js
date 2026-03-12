// Loops



// 1. For loop

for (let i = 0; i < 20; i++) {
    console.log("Hello world")
}

// Explaination for above code
// in for we have 3 parts, 1st is initalization, 2nd is condition and 3rd is changes, 
// for loop start to run first time when i == 0 it check whether the i < 20 less than 20 if yes then it will run the code of inside the loop the the i will be incremented by 1 every time this will continue unitl i is equal to 20, then the loop will stop because i we need to be less than 20.



// Task print the all element of an array

const arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}



// Task print the all even number of an given array

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 === 0) {
        console.log("Even:", arr1[i])
    }
}




// 2. While loop

// Task print the hello world 10 times till the i is equal to 10

let i = 0

while (i < 5) {
    console.log("While loop Hello world")
    i++
}