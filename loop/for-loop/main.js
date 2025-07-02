// for loop 

//  In For we have 3 parts where 1st is initialization, 2nd is condition and 3rd is increment or decrement
//  Initialization is the part where we define the starting value of the loop
//  Condition is the part where we define the condition for the loop to run
//  Increment or decrement is the part where we define the value by which the loop will increment or decrement



// For Loop Example 1

// for (let i = 0; i < 5; i++) {
//     console.log("Hello World");
// }

//  In the above example we have initialized the variable i with 0 and incremented it by 1 each time the loop runs
//  when i is equal to 0 the loop will run and check if the condition is 1 is less then 5 if yes then it will print "Hello World" then i is incremented by 1 and the loop will check the initilzation where now i is 2 then it will check the condition and if 1 is now 2 then i is less then 5 if yes then it will print "Hello World" and again it will increment i by 1 then the i will be 3 now this will continue until i becaomes 5 when i is equal to 5 then it will check the condition i less then 5 now over i is 5 it's not les then 5 so it will break the loop and the program will not print anything. 

// The output of the above example is

// Hello World
// Hello World
// Hello World
// Hello World
// Hello World




// For Loop Example 2

// for (let i = 3; i < 5; i++) {
//     console.log("Hellow World");
// }

// in the above example we have initiale value of i is 3 , the condition of i is less than 5 and the i will increment by 1 each time the loop when run it start i which is 3 is less than 5 in over condition it will be yes and print "Hello world" then i will be incrementd by 1 now the over initial value became 4 then it check over i is less than 5 by over condition it will be yes and print "Hello Word" and again i will be incremented by 1 and the over initial value became 5 then it will check over the condition and it will be break the loop and the program will not print anything.

// The output of the above example is

//Hello World   
//Hello World




// For Loop Example 3

// for (let i = 2; i < 9; i = i + 2) {
//     console.log("Hello World");
// }

//  in the above example we have initial value of i is 2 it means that over initial value of i is start form the 2 , then the condition of i is should be less than 9 and the i will be incremented by 2 each time the loop when run it start with i is 2 then it check the condition the over is    which is 2 is less than 9 in over condition it will be yes and print "Hello World" then i will be incrementd by 2 now the over initial value became 4 then it check over i which is 4 now is less than 9 in over condition it will be yes and print "Hello World" and again i will be incremented by 2 and the over initial value became 6 then it will check over the condition where now i is 6 and it't less than 9 in over condition it will be yes and print "Hello World" and again i will be incremented by 2 and the over initial value became 8 then it will check over the condition where now i is 8 and it's less than 9 in over condition it will be no and break the loop and the program will not print anything.

//The output of the above example is

//Hello World
//Hello World
//Hello World
//Hello World





// For Loop Example 4

// for (i = 5; i > 0; i--) {
//     console.log("Hello World");
// }

// The output of the above example is

//Hello World
//Hello World
//Hello World
//Hello World
//Hello World




// For Loop Example 5

// for (let i = 5; i < 4; i++) {
//     console.log("Hello World 5");
// }

// The output of the above example is

// It will not print anything because the condition of i is less than 4 and the i is 5 so it will not print anything.




// For Loop Example 6

// for (let i = 1; i > 0; i++) {
//     console.log("Hello World 6");
// }

// The output of the above example is

// it will print endless "Hello World 6" because the condition of i is greater than 0 and so the i is incrementd by 1 and this condition will be true all the time and the program print "Hello World 6" endlessly. 

//  This condition is called infinite loop





// For Loop Example 7

// const great = () => {
//     console.log("Namaste");
// }

// for (let i = 0; i < 3; i++) {
//     great();
// }

// In above code we have defined a function called great and we have called it inside the for loop. the function only return the great message
// Now the for loop will run it has the initial value of i is 0 and the condition of i is less than 3 and the i will incrementd by 1 each time the loop when run it will print the "Namaste" this will be printed 3 time and the program will not print anything when i will be 3 then it will check the condition and it will be break the loop and the program will not print anything.

// The output of the above example is

//Namaste
//Namaste
//Namaste




// For Loop Example 8

// let arr = [10, 6, 2, 0, 8, 3]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// The output of the above example is

//10
//6
//2
//0
//8
//3
