 
const readline = require("readline");

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let students=[];

function AddStudent() {
    console.log("\n1.Add");

    rl.question("Choose: ",(choice)=>{

        switch(choice) {

            case "1":
                rl.question("Enter name: ",(name)=>{
                    rl.question("Enter roll: ",(roll)=>{

                        students.push({ name, roll });

                        console.log("Student Added!");
                        AddStudent();
                        rl.close();
                    });
                });
                break;

            case "2":
                console.log("2. View Students");

                console.log(students);
                AddStudent();
                rl.close();
                break;

            case "3":
                console.log("3. Search Student");

                rl.question("Enter roll: ",(roll)=>{

                    let student = students.find(s=>s.roll ===roll);

                    console.log(student || "Not Found");

                    AddStudent();
                    rl.close();
                });
                break;

            case "4":
                console.log("4. Delete Student");
                rl.question("Enter roll: ",(roll)=>{

                    students = students.filter(s=>s.roll!==roll);

                    console.log("Student Deleted!");

                    AddStudent();
                    rl.close();
                });
                break;

            case "5":
                console.log("Exiting...");
                rl.close();
                break;

            default:
                console.log("Invalid Choice!");
                AddStudent();
                rl.close();
        }
    });
}

AddStudent();
