// A1.js - Scenario 1.1: Student Records
// Run in mongosh: load("A1.js")

use("college");

db.students.drop();

db.students.insertOne({
    rollNo: 101,
    name: "Arun",
    dept: "CSE",
    marks: 78,
    city: "Chennai"
});

db.students.insertMany([
    { rollNo: 102, name: "Bala", dept: "ECE", marks: 81, city: "Bengaluru" },
    { rollNo: 103, name: "Karthik", dept: "CSE", marks: 62, city: "Chennai" },
    { rollNo: 104, name: "Priya", dept: "ECE", marks: 91, city: "Mumbai" },
    { rollNo: 105, name: "Suresh", dept: "CSE", marks: 88, city: "Trichy" }
]);

print("\nAll students:");
db.students.find().forEach(printjson);

print("\nCSE students:");
db.students.find({ dept: "CSE" }).forEach(printjson);

print("\nUpdate marks of roll number 103:");
printjson(db.students.updateOne(
    { rollNo: 103 },
    { $set: { marks: 68 } }
));

print("\nAdd semester 3 to every CSE student:");
printjson(db.students.updateMany(
    { dept: "CSE" },
    { $set: { semester: 3 } }
));

print("\nDelete student with roll number 104:");
printjson(db.students.deleteOne({ rollNo: 104 }));

print("\nTotal remaining students:");
print(db.students.countDocuments());
