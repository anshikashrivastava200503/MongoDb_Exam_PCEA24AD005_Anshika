// A2.js - Scenario 1.2: Employee Directory
// Run in mongosh: load("A2.js")

use("hr");

db.employees.drop();

db.employees.insertMany([
    { empId: 1, name: "Asha",   dept: "HR",      salary: 40000, city: "Hyderabad" },
    { empId: 2, name: "Bala",   dept: "IT",      salary: 65000, city: "Bengaluru" },
    { empId: 3, name: "Charan", dept: "IT",      salary: 58000, city: "Chennai" },
    { empId: 4, name: "Deepa",  dept: "Finance", salary: 50000, city: "Mumbai" },
    { empId: 5, name: "Elan",   dept: "IT",      salary: 72000, city: "Chennai" },
    { empId: 6, name: "Farah",  dept: "HR",      salary: 45000, city: "Delhi" },
    { empId: 7, name: "Gopal",  dept: "Finance", salary: 61000, city: "Chennai" },
    { empId: 8, name: "Kiran",  dept: "HR",      salary: 42000, city: "Bengaluru" }
]);

print("\nSalary greater than 60000 ($gt):");
db.employees.find({ salary: { $gt: 60000 } }).forEach(printjson);

print("\nSalary between 45000 and 60000 ($gte, $lte):");
db.employees.find({
    salary: { $gte: 45000, $lte: 60000 }
}).forEach(printjson);

print("\nEmployees in IT or Finance ($in):");
db.employees.find({
    dept: { $in: ["IT", "Finance"] }
}).forEach(printjson);

print("\nChennai employees earning more than 50000 ($and):");
db.employees.find({
    $and: [{ city: "Chennai" }, { salary: { $gt: 50000 } }]
}).forEach(printjson);

print("\nEmployees in HR or earning more than 70000 ($or):");
db.employees.find({
    $or: [{ dept: "HR" }, { salary: { $gt: 70000 } }]
}).forEach(printjson);

print("\nEmployees not in Chennai or Bengaluru ($nin):");
db.employees.find({
    city: { $nin: ["Chennai", "Bengaluru"] }
}).forEach(printjson);

print("\nNames starting with A, B or C ($regex):");
db.employees.find({
    name: { $regex: "^[ABC]" }
}).forEach(printjson);

print("\nNames and salaries, highest first; skip 2 and show next 3:");
db.employees.find(
    {},
    { _id: 0, name: 1, salary: 1 }
).sort({ salary: -1 }).skip(2).limit(3).forEach(printjson);
