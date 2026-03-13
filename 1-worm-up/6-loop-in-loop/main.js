// Loop within loop


// Example 1

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i=" + i + "," + "j=" + j)
    }
}

// Output:-

// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 1, j = 1
// i = 1, j = 2
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2




// Example 2

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log(i, j)
    }
}

// Output:-

// 1 0
// 2 0
// 2 1




// Example 3

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("i=" + i + "," + "j=" + j)
    }
}

// Output:-

// i = 0, j = 0
// i = 1, j = 0
// i = 1, j = 1
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
// i = 3, j = 0
// i = 3, j = 1
// i = 3, j = 2
// i = 3, j = 3
// i = 4, j = 0
// i = 4, j = 1
// i = 4, j = 2
// i = 4, j = 3
// i = 4, j = 4




// Example 4

for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(i, j)
    }
}

// Output:-

// 5 0
// 5 1
// 5 2
// 5 3
// 5 4
// 4 0
// 4 1
// 4 2
// 4 3
// 3 0
// 3 1
// 3 2
// 2 0
// 2 1
// 1 0