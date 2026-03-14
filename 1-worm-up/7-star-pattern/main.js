// Star Pattern



// Example 1

console.log("Square Pattern");


let n = 4

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
        row = row + "* "
    }
    console.log(row);
}

// Ouput 

// * * * * 
// * * * * 
// * * * * 
// * * * * 




console.log("Left Angle Triangle Pattern");

let n1 = 4

for (let i = 0; i < n1; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + "* "
    }
    console.log(row);
}

// Output

// * 
// * * 
// * * * 
// * * * * 




console.log("Left Angle Triangle number Pattern");

let n2 = 5

for (let i = 0; i < n2; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1) + " "
    }
    console.log(row);
}

// Output

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 




console.log("Left Angle Triangle number Pattern");

let n3 = 5

for (let i = 0; i < n3; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1) + " "
    }
    console.log(row);
}

// Output

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5 





console.log("Reverse Left Angle Triangle number Pattern");

let n4 = 5;

for (let i = 0; i < n4; i++) {
    let row = ""
    for (let j = 0; j < n4 - i; j++) {
        row = row + (j + 1) + " "
    }
    console.log(row);
}

// Output

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1 





console.log("Reverse Left Angle Triangle star Pattern");

let n5 = 5;

for (let i = 0; i < n5; i++) {
    let row = ""
    for (let j = 0; j < n5 - i; j++) {
        row = row + "* "
    }
    console.log(row);
}

// Output

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 




console.log("right Angle Triangle Pattern");

let n6 = 5;

for (let i = 0; i < n6; i++) {
    let row = ""
    for (let j = 0; j < n6 - (i + 1); j++) {
        row = row + "  "
    }
    for (let k = 0; k < i + 1; k++) {
        row = row + "* "
    }
    console.log(row);
}

// Output

//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * * 





console.log("left Angle Triangle 1 0 Pattern");

let n7 = 5

for (let i = 0; i < n7; i++) {
    let row = ""
    let toggle = 1
    for (let j = 0; j <= i; j++) {
        row = row + toggle + " "

        if (toggle == 1) {
            toggle = 0
        } else {
            toggle = 1
        }
    }
    console.log(row);
}

// Output

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1 





console.log("left Angle Triangle 1 0 Pattern");

let n8 = 50000
let toggle = 1

for (let i = 0; i < n8; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row = row + toggle + " "

        if (toggle == 1) {
            toggle = 0
        } else {
            toggle = 1
        }
    }
    console.log(row);
}

// Output

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1 