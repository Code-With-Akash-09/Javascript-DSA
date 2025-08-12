// Print  n to --- 0 using recursion


const printNtoZero = (n) => {
    if (n < 0) return
    console.log(n);
    printNtoZero(--n)

};

printNtoZero(10);


// Output of above code

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0





// Print  1 to n  using recursion

let n = 10;

function printOnetoN(x) {
    if (x > n) return;
    console.log(x);
    x++
    printOnetoN(x);
}

printOnetoN(1)