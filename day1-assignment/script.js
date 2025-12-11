console.log("this is my first java script!!!");
let state="delhi";
let name1="kusuma";
const pi=3.14;
const country="india";
console.log(state,name1,country);
let name = "Aditi"; // String
let age = 21;       // Number
let isStudent = true; // Boolean
let value = null;   // Null             // Undefined
console.log(typeof name);
console.log(typeof age);
console.log(isStudent,value);
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.33
console.log(a % b); // 1
let x = 5;
x += 3; // 8
x *= 2; // 16
console.log(x);
if(age>=18){
    console.log("adult");
}else{
    console.log("not adult");
}
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Example
checkNumber(5);
function max(a, b, c) {
    return Math.max(a, b, c);
}

// Example
console.log(max(10, 5, 8));
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Example
multiplicationTable(7);
/*function calculator() {
    let choice = prompt(
`Choose an option:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Check Even or Odd`
    );

    choice = Number(choice);

    if (choice >= 1 && choice <= 4) {
        let a = Number(prompt("Enter first number:"));
        let b = Number(prompt("Enter second number:"));

        switch (choice) {
            case 1: console.log("Result:", a + b); break;
            case 2: console.log("Result:", a - b); break;
            case 3: console.log("Result:", a * b); break;
            case 4: console.log("Result:", a / b); break;
        }
    }

    else if (choice === 5) {
        let n = Number(prompt("Enter a number:"));
        if (n % 2 === 0) {
            console.log(`${n} is Even`);
        } else {
            console.log(`${n} is Odd`);
        }
    }

    else {
        console.log("Invalid Choice");
    }
}

// Run the calculator
calculator();*/
let newnum=20;
if(newnum>0){
    console.log("positive number");
}else if(newnum<0){
    console.log("negative number");
}else{
    console.log("zero or invalid input");
}

let temp=25;
if(temp>30){
    console.log("hot weather");
} else if(temp>=15 && temp<=30){
    console.log("moderate weather");
}else if(temp<15){
    console.log("cold weather");
}else{
    console.log("invalid input");
}

let monthno=4;
switch(monthno){
    case 1:
        console.log("january"); 
        break;
    case 2:
        console.log("february");        
        break;
    case 3: 
        console.log("march");        
        break;
    case 4:
        console.log("april");        
        break;
    case 5:
        console.log("may");        
        break;
    case 6: 
        console.log("june");        
        break;
    case 7:
        console.log("july");        
        break;
    case 8:
        console.log("august");        
        break;
    case 9: 
        console.log("september");        
        break;
    case 10:
        console.log("october");
        break;
    case 11:
        console.log("november");
        break;
    case 12:
        console.log("december");
        break;
    default:
        console.log("invalid month number");
}

let n=10;
for(let i=1;i<=n;i++){
    console.log(i);
}

let n1=0;
while(n1>=0&&n1<=20){
    if(n1%2==0){
        console.log(n1);
    }
    n1+=2;
}
let arrays=["axe","ball","cat","dog","elephant"];
for(let array of arrays){
    console.log(array);
}

for(let n=1;n<=10;n++){
    if(n==5){
        continue;
    }
    console.log(n);
}

/*function numberGuessingGame() {
    const target = Math.floor(Math.random() * 10) + 1;
    let guess = 0;

    while (guess !== target) {
        guess = Number(prompt("Guess a number between 1 and 10:"));

        if (guess > target) {
            console.log("Too high! Try again.");
        } 
        else if (guess < target) {
            console.log("Too low! Try again.");
        } 
        else {
            console.log("You win! The number was " + target);
        }
    }
}

numberGuessingGame();*/

// =====================================================
// 1) MULTIPLICATION TABLE (1–10) FOR A GIVEN NUMBER
// =====================================================

/*function multiplicationTable(num) {
    console.log(`\nMultiplication Table of ${num}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// Example Run
multiplicationTable(7);


// =====================================================
// 2) CHECK IF A NUMBER IS PRIME
// =====================================================

function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Example Run
let primeTest = 29;
console.log(`\nIs ${primeTest} prime? →`, isPrime(primeTest) ? "Yes" : "No");


// =====================================================
// 3) SUM OF NUMBERS FROM 1–100 USING LOOP
// =====================================================

let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log("\nSum of numbers from 1 to 100 =", total);


// =====================================================
// 4) NUMBER GUESSING GAME — MAX 5 ATTEMPTS
// =====================================================

// Works in browser or Node (if using prompt-sync)
let promptSync;
try {
    promptSync = require("prompt-sync")();
} catch (e) {
    // Browser environment fallback
}

function guessingGame() {
    const target = Math.floor(Math.random() * 10) + 1;
    let attempts = 5;
    let guess;

    console.log("\nNumber Guessing Game (1–10)");
    console.log("You have 5 attempts!");

    while (attempts > 0) {
        guess = Number(
            promptSync
                ? promptSync("Enter your guess: ")
                : prompt("Enter your guess:")
        );

        if (guess === target) {
            console.log(" You win! The number was", target);
            return;
        } else if (guess > target) {
            console.log("Too high!");
        } else {
            console.log("Too low!");
        }

        attempts--;
        console.log("Attempts left:", attempts);
    }

    console.log("You failed! The correct number was", target);
}

// Example Run
// guessingGame(); // Uncomment to play*/


/*function greet(){
    console.log("hello student");
}
greet();
greet();
greet();*/

function sqrt(n2){
    return n2*n2;
}
console.log(sqrt(5));

function iseven(n3){
    if(n3%2==0){
        return true;
    }
}

const iseven1=function(n4){
    if(n4%2==0){
        return true;
    }
}

const iseven3 = (n5)=>{
    if(n5%2==0){
        return true;
    }
}

/*const function1 = ()=>{
    let aa=5;
}
console.log(aa);*/

/*const function1 = ()=>{
    var aa=5;
}
console.log(aa);*/

/*const task5day3 =(ab,bc,operation) =>{
    if(operation=="+"){
        return ab+bc;
    }else if(operation=="-"){
        return ab-bc;
    }else if(operation=="*"){
        return ab*bc;
    }else{
        return 0;
    }
};
console.log(task5day3(5,3,"+"));
console.log(task5day3(5,3,"-"));
console.log(task5day3(5,3,"*"));

// // Tasks array
let tasks = [];

// Function to add a task
function addTask(task) {
    tasks.push({ 
        name: task, 
        completed: false 
    });
    console.log(`Task added: ${task}`);
}

// Function to show all tasks
function showTasks() {
    console.log("Your Tasks:");
    tasks.forEach((task, index) => {
        const status = task.completed ? "✔ Completed" : " Pending";
        console.log(`${index}: ${task.name} - ${status}`);
    });
}

// Function to delete a task
function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        console.log(`Task deleted: ${tasks[index].name}`);
        tasks.splice(index, 1);
    } else {
        console.log("Invalid index!");
    }
}

// NEW: Function to mark a task as completed
function markCompleted(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        console.log(`Task marked as completed: ${tasks[index].name}`);
    } else {
        console.log("Invalid index!");
    }
}

// Example usage
addTask("Study JavaScript");
addTask("Go for a walk");
addTask("Complete assignment");

showTasks();

markCompleted(1);  // Mark task 1 as completed

showTasks();
*/


/*1. Factorial function
function factorial(n) {
    if (n < 0) return "Not valid";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 2. Reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 3. Check if string is palindrome
function isPalindrome(str) {
    const reversed = reverseString(str);
    return str === reversed;
}

// Test outputs
console.log(factorial(5));          // 120
console.log(reverseString("hello")); // "olleh"
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("hello"));  // false
*/
