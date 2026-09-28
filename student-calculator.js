// Simple Student Grade Calculator

let name = prompt("Enter your name:");
let grade1 = Number(prompt("Enter your first grade:"));
let grade2 = Number(prompt("Enter your second grade:"));
let grade3 = Number(prompt("Enter your third grade:"));

let average = (grade1 + grade2 + grade3) / 3;

console.log("Student: " + name);
console.log("Average: " + average.toFixed(2));

if (average >= 75) {
    console.log("Result: PASSED");
} else {
    console.log("Result: FAILED");
}
