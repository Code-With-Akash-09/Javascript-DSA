
// Star Pattern


// Example 1

let n1 = 4

for (let i = 0; i < n1; i++) {
    let row = "";
    for (let j = 0; j < n1; j++) {
        row = row + "*"
    }
    console.log(row);
}

// The Output will be this

// ****
// ****
// ****
// ****





// Example 2

let n2 = 4;

for (let i = 0; i < n2; i++) {
    let row = "";
    for (let j = 0; j < (i + 1); j++) {
        row = row + "*"
    }
    console.log(row);
}

// The Output will be this

// *
// **
// ***
// ****





// Example 3

let n3 = 5;

for (let i = 0; i < n3; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + (j + 1)
    }
    console.log(row);
}

// The Output will be this

// 1
// 12
// 123
// 1234
// 12345





// Example 4

let n4 = 5;

for (let i = 0; i < n4; i++) {
    let row = "";
    for (let j = 0; j < (i + 1); j++) {
        row = row + (i + 1)
    }
    console.log(row);
}

// The Output will be this

// 1
// 22
// 333
// 4444
// 55555





// Example 5

let n5 = 5

for (let i = 0; i < n5; i++) {
    let row = "";
    for (let j = 0; j < n5 - i; j++) {
        row = row + (j + 1)
    }
    console.log(row);
}

// The output will be this

// 12345
// 1234
// 123
// 12
// 1





// Example 6

let n6 = 5

for (let i = 0; i < n6; i++) {
    let row = "";
    for (let j = 0; j < n6 - i; j++) {
        row = row + "*"
    }
    console.log(row);
}

// The output will be this

// *****
// ****
// ***
// **
// *




// Example 7


let n7 = 5;

for (let i = 0; i < n7; i++) {
    let row = "";

    // this loop will add empty spaces
    for (let j = 0; j < n7 - (i + 1); j++) {
        row = row + " "
    }

    // this loop will add stars
    for (let k = 0; k < i + 1; k++) {
        row = row + "*"
    }
    console.log(row);
}

// The output will be this

//     *
//    **
//   ***
//  ****
// *****







// Example 8


let n8 = 5


//  This solution also return the same pattern but the corn is this we add arthematic calculation that why this solution little slower

for (let i = 0; i < n8; i++) {
    let row = ""

    for (let j = 0; j < i + 1; j++) {
        if (j % 2) row = row + "0"
        else row = row + "1"
    }
    console.log(row);
}


// This solution also return the same pattern also effective because we are just using tanery operation to toggle the value so it's faster

for (let i = 0; i < n8; i++) {
    let row = ""
    let toggle = 1

    for (let j = 0; j < i + 1; j++) {
        row = row + toggle

        if (toggle == 1) toggle = 0
        else toggle = 1
    }
    console.log(row);
}


// The output will be this

// 1
// 10
// 101
// 1010
// 10101
// 101010





// Example 9

let n9 = 5
let toggle = 1

for (let i = 0; i < n9; i++) {
    let row = ""

    for (let j = 0; j < i + 1; j++) {
        row = row + toggle

        if (toggle == 1) toggle = 0
        else toggle = 1
    }
    console.log(row);
}

// The output will be this

// 1
// 01
// 010
// 1010
// 10101