
const readline = require("readline");

const {
    addStudent,
    viewStudents,
    searchStudent,
    updateStudent,
    deleteStudent
} = require("./student");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n===== Student Management System =====");
    console.log("1. Add Student");
    console.log("2. View All Students");
    console.log("3. Search Student");
    console.log("4. Update Student");
    console.log("5. Delete Student");
    console.log("6. Exit");

    rl.question("Enter your choice: ", function(input) {

        let choice = Number(input);

        switch (choice) {

            case 1:
                addStudent(rl, showMenu);
                break;

            case 2:
                viewStudents(rl, showMenu);
                break;

            case 3:
                searchStudent(rl, showMenu);
                break;

            case 4:
                updateStudent(rl, showMenu);
                break;

            case 5:
                deleteStudent(rl, showMenu);
                break;

            case 6:
                console.log("Thank you for using Student Management System!");
                rl.close();
                break;

            default:
                console.log("Invalid choice! Please enter 1 to 6.");
                showMenu();
        }
    });
}

showMenu();
