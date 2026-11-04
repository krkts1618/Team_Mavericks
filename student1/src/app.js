require("dotenv").config();

const { addStudent, readStudent,findstudent,update,deleteStudent } = require("./student");

let student = {
    id: "STU001",
    name: "Gowri",
    age: 20,
    department: "CSE"
};

addStudent(student);
console.log(readStudent());
console.log("Finding Student:");
findstudent("STU001");
update("STU001", 21);