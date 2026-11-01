
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "students.json");

let students = [];

// Load students from JSON file
function loadStudents() {
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf8");

        if (data.trim() !== "") {
            students = JSON.parse(data);
        }
    }
}

// Save students to JSON file
function saveStudents() {
    fs.writeFileSync(filePath, JSON.stringify(students, null, 4));
}

// 1. ADD STUDENT
function addStudent(rl, callback) {
    console.log("\n----- Add Student -----");

    rl.question("Enter student name: ", function(name) {
        rl.question("Enter roll number: ", function(rollno) {

            let found = students.some(function(student) {
                return student.rollno === Number(rollno);
            });

            if (found) {
                console.log("Roll number already exists!");
                callback();
                return;
            }

            rl.question("Enter age: ", function(age) {
                rl.question("Enter department: ", function(department) {
                    rl.question("Enter email: ", function(email) {

                        let student = {
                            name: name,
                            rollno: Number(rollno),
                            age: Number(age),
                            department: department,
                            email: email
                        };

                        students.push(student);
                        saveStudents();

                        console.log("\nStudent added successfully!");
                        console.log(student);

                        callback();
                    });
                });
            });
        });
    });
}

// 2. VIEW ALL STUDENTS
function viewStudents(rl, callback) {
    console.log("\n----- All Students -----");

    if (students.length === 0) {
        console.log("No students found!");
    } else {
        for (let i = 0; i < students.length; i++) {
            console.log("\nStudent " + (i + 1));
            console.log("Name: " + students[i].name);
            console.log("Roll Number: " + students[i].rollno);
            console.log("Age: " + students[i].age);
            console.log("Department: " + students[i].department);
            console.log("Email: " + students[i].email);
        }
    }

    callback();
}

// 3. SEARCH STUDENT
function searchStudent(rl, callback) {
    console.log("\n----- Search Student -----");

    rl.question("Enter roll number to search: ", function(rollno) {

        let found = students.find(function(student) {
            return student.rollno === Number(rollno);
        });

        if (found) {
            console.log("\nStudent found!");
            console.log(found);
        } else {
            console.log("Student not found!");
        }

        callback();
    });
}

// 4. UPDATE STUDENT
function updateStudent(rl, callback) {
    console.log("\n----- Update Student -----");

    rl.question("Enter roll number to update: ", function(rollno) {

        let student = students.find(function(s) {
            return s.rollno === Number(rollno);
        });

        if (!student) {
            console.log("Student not found!");
            callback();
            return;
        }

        console.log("Press Enter to keep the existing value.");

        rl.question("Enter new name (" + student.name + "): ", function(name) {
            rl.question("Enter new age (" + student.age + "): ", function(age) {
                rl.question("Enter new department (" + student.department + "): ", function(department) {
                    rl.question("Enter new email (" + student.email + "): ", function(email) {

                        if (name.trim() !== "") {
                            student.name = name;
                        }

                        if (age.trim() !== "") {
                            student.age = Number(age);
                        }

                        if (department.trim() !== "") {
                            student.department = department;
                        }

                        if (email.trim() !== "") {
                            student.email = email;
                        }

                        saveStudents();

                        console.log("\nStudent updated successfully!");
                        console.log(student);

                        callback();
                    });
                });
            });
        });
    });
}

// 5. DELETE STUDENT
function deleteStudent(rl, callback) {
    console.log("\n----- Delete Student -----");

    rl.question("Enter roll number to delete: ", function(rollno) {

        let index = students.findIndex(function(student) {
            return student.rollno === Number(rollno);
        });

        if (index === -1) {
            console.log("Student not found!");
            callback();
            return;
        }

        rl.question("Are you sure you want to delete? (yes/no): ", function(answer) {

            if (answer.toLowerCase() === "yes") {
                students.splice(index, 1);
                saveStudents();

                console.log("Student deleted successfully!");
            } else {
                console.log("Delete cancelled.");
            }

            callback();
        });
    });
}

// Load saved students when application starts
loadStudents();

// Export all functions
module.exports = {
    addStudent,
    viewStudents,
    searchStudent,
    updateStudent,
    deleteStudent
};
