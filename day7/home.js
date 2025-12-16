//task 1.1
let x="john";
let y=19;
console.log(`i am ${x} and i am ${y} years old`);

//task 1.2
const add = (a,b)=>a+b;
console.log(add(5,7));

//task 2.1
let colors=["red","green","blue","brown","white"];

//task 2.2
colors.push("pink");
colors.shift();
colors.forEach(color=>console.log(color));

//task 3.1 , 3.2
let book={
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    pages:180,
    details: function(){
      console.log(book.title);
      console.log(book.author);
      console.log(book.pages);
    }
};
book.details();

//task 4.1 , 4.2,4.3
let num = [50,70,40,90,30];
let nums = num.filter(n=> n>=50);
console.log(nums);
let incrnums=num.map(n=>n+5);
console.log(incrnums);
let total = num.reduce((acc,cur)=> acc+cur,0);
console.log(total);

//task 5.1 , 5.2, 5.3
let employees=[
    {name:"alice",salary:50000},
    {name:"bob",salary:60000},
    {name:"charlie",salary:55000}
];
let incsalary=employees.map(emp=>({newsalary:emp.salary+emp.salary*0.1}));
console.log(incsalary);
employees.forEach(emp=>console.log(`Name: ${emp.name}, Salary: ${emp.salary}`));

//task 6
// -------------------------------------------
// 1. Create an array of student objects
// -------------------------------------------
let students = [
    { name: "Akhil", age: 20, marks: 75 },
    { name: "Manas", age: 21, marks: 85 },
    { name: "Riya", age: 19, marks: 92 },
];

// -------------------------------------------
// 2. Show all students using forEach
// -------------------------------------------
console.log("All Students:");
students.forEach(s => {
    console.log(`${s.name} - Age: ${s.age}, Marks: ${s.marks}`);
});

// -------------------------------------------
// 3. Add a new student to the list
// -------------------------------------------
students.push({ name: "Tarun", age: 22, marks: 78 });
console.log("\nAfter Adding New Student:");
console.log(students);

// -------------------------------------------
// 4. Use filter() to find students with marks ≥ 80
// -------------------------------------------
let toppers = students.filter(s => s.marks >= 80);
console.log("\nStudents with marks ≥ 80:");
console.log(toppers);

// -------------------------------------------
// 5. Use reduce() to calculate class average
// -------------------------------------------
let totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
let average = totalMarks / students.length;

console.log(`\nClass Average Marks: ${average}`);


//assignment
// =====================================================
// 1) Return only even numbers using filter()
// =====================================================

let numbers = [10, 15, 22, 33, 48, 55, 60];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Even Numbers:", evenNumbers);


// =====================================================
// 2) Laptop object with details() method
// =====================================================

let Laptop = {
    brand: "Lenovo",
    ram: "16GB",
    price: 55000,

    details() {
        return `Brand: ${this.brand}, RAM: ${this.ram}, Price: ₹${this.price}`;
    }
};

console.log("\nLaptop Details:", Laptop.details());


// =====================================================
// 3) Highest, Lowest, Average from marks array
// =====================================================

function analyzeMarks(marks) {
    let highest = Math.max(...marks);
    let lowest = Math.min(...marks);

    let average = marks.reduce((sum, m) => sum + m, 0) / marks.length;

    console.log("\nHighest Marks:", highest);
    console.log("Lowest Marks:", lowest);
    console.log("Average Marks:", average);
}

analyzeMarks([78, 92, 85, 66, 99, 74]);


// =====================================================
// 4) Extend Student Records App: addStudent()
// =====================================================

// For browser → uses prompt()
// For Node.js → optional prompt-sync

let promptSync;
try {
    promptSync = require("prompt-sync")();
} catch (e) {}

let student = [
    { name: "Akhil", age: 20, marks: 75 },
    { name: "Manas", age: 21, marks: 85 }
];

function addStudent() {
    let p = promptSync || prompt; // auto choose method

    let name = p("Enter student name: ");
    let age = Number(p("Enter age: "));
    let marks = Number(p("Enter marks: "));

    student.push({ name, age, marks });

    console.log("\nStudent added successfully!");
    console.log(students);
}

// Uncomment to run
// addStudent();
