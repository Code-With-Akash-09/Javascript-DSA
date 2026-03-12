function printHelloWorld() {
    console.log("Hell World")
}

printHelloWorld()

function greet(name) {
    console.log("hellor." + name)
}

greet("Akash")



// Task create function which can add two numbers

function addTwoNumbers(num1, num2) {
    let add = num1 + num2
    console.log(add)
}
addTwoNumbers(5, 4)



// Task create function which can to multiply two numbers

function multiplyTwoNumbers(num1, num2) {
    let multiply = num1 * num2
    console.log(multiply)
}

multiplyTwoNumbers(5, 4)



// task create function which give the square of a number

function square(x) {
    let square = x * x
    return square
}

const result = square(5)
console.log(result);



// Task create function which accepts the age and tell whether th person is eligible for voting or not

function checkVotingEligibility(age) {
    if (age < 0) {
        return "Invalid age"
    }
    else if (age >= 18) {
        return "You are eligible for voting"
    } else {
        return "You are not eligible for voting"
    }
}

const resultAge = checkVotingEligibility(20)
console.log(resultAge)



// Task create function which which check whether the number is even or odd

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "The number is even"
    } else {
        return "The number is odd"
    }
}

const resultEvenOdd = checkEvenOdd(2)
console.log(resultEvenOdd)