//  Example 1

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Output of the above code will be

// i: 0, j: 0
// i: 0, j: 1
// i: 0, j: 2
// i: 1, j: 0
// i: 1, j: 1
// i: 1, j: 2
// i: 2, j: 0
// i: 2, j: 1
// i: 2, j: 2


// Explanation for the above code
// In the above code we have two nested loops, the outer loop runs 3 times and the inner loop also runs 3 times.
// when the outer loop runs the i value will be 0 then it check i which is 0 is greater than 3, in over condition it is not so it will enter the inner loop. again same happen j value is 0 then it check j which is 0 is greater than 3, in over condition it is not so it will enter the inner loop. then it will print i: 0, j:0.
// Now the inner loop will end when value of j is 3, so it will go back to the outer loop and increment i by 1.
// This process will continue until the outer loops condition is met to i:3.






// Example 2

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Output of the above code will be

// i: 1, j: 0
// i: 2, j: 0
// i: 2, j: 1





// Example 3

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Output of the above code will be

// i: 0, j: 0
// i: 1, j: 0
// i: 1, j: 1
// i: 2, j: 0
// i: 2, j: 1
// i: 2, j: 2
// i: 3, j: 0
// i: 3, j: 1
// i: 3, j: 2
// i: 3, j: 3
// i: 4, j: 0
// i: 4, j: 1
// i: 4, j: 2
// i: 4, j: 3
// i: 4, j: 4






// Example 4

for (let i = 0; i < 3; i++) {
    for (let j = i; j > 0; j--) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Output of the above code will be

// i: 1, j: 1
// i: 2, j: 2
// i: 2, j: 1






// Example 5

for (let i = 0; i < 3; i++) {
    for (let j = i; j >= 0; j--) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Output of the above code will be

// i: 0, j: 0
// i: 1, j: 1
// i: 1, j: 0
// i: 2, j: 2
// i: 2, j: 1
// i: 2, j: 0





// Example 6

for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Output of the above code will be

// i: 5, j: 0
// i: 5, j: 1
// i: 5, j: 2
// i: 5, j: 3
// i: 5, j: 4
// i: 4, j: 0
// i: 4, j: 1
// i: 4, j: 2
// i: 4, j: 3
// i: 3, j: 0
// i: 3, j: 1
// i: 3, j: 2
// i: 2, j: 0
// i: 2, j: 1
// i: 1, j: 0