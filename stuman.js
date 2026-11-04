const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let students = [];
function StudentManagement() {
    console.log("\n1. Add Student");
    console.log("2. View Students");
    console.log("3. Search Student");
    console.log("4. Delete Student");
    console.log("5. Exit");
    rl.question("Choose: ", function(choice) {
        switch(choice) {
            case "1":
                rl.question("Enter name: ", function(name) {
                    rl.question("Enter roll: ", function(roll) {
                        let found = false;
                        for(let i = 0; i < students.length; i++) {
                            if(students[i].roll === roll) {
                                found = true;
                            }
                        }
                        if(found) {
                            console.log("Roll Already Exists!");
                            StudentManagement();
                        } else {
                            students.push({name: name, roll: roll});
                            console.log("Student Added!");
                            StudentManagement();
                        }
                    });
                });
                break;
            case "2":
                console.log(students);
                StudentManagement();
                break;
            case "3":
                rl.question("Enter roll: ", function(roll) {
                    let found = false;
                    for(let i = 0; i < students.length; i++) {
                        if(students[i].roll === roll) {
                            console.log(students[i]);
                            found = true;
                        }
                    }
                    if(!found) {
                        console.log("Not Found!");
                    }
                    StudentManagement();
                });
                break;
            case "4":
                rl.question("Enter roll: ", function(roll) {
                    let found = false;
                    for(let i = 0; i < students.length; i++) {
                        if(students[i].roll === roll) {
                            students.splice(i, 1);
                            found = true;
                            console.log("Student Deleted!");
                            break;
                        }
                    }
                    if(!found) {
                        console.log("Not Found!");
                    }
                    StudentManagement();
                });
                break;
            case "5":
                console.log("Exiting...");
                rl.close();
                break;
            default:
                console.log("Invalid Choice!");
                StudentManagement();
        }
    });
}
StudentManagement();
