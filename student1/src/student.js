const fs=require("fs");
const filepath=process.env.STUDENT_DATA_FILE;
function readStudent(){
    const data=fs.readFileSync(filepath,"utf8");
    return JSON.parse(data);
}
function addStudent(student)
{
    const students=readStudent();
    if(students.some(s=>s.id===student.id))
    {
        console.log("student id already exit");
        return;
    }
    students.push(student);
    fs.writeFileSync(filepath,JSON.stringify(students,null,2));
    console.log("student added successfully");
}
function findstudent(id){
    const students=readStudent();
    const result=students.find(s=>s.id===id);
    if(result){
        console.log(result);
    }
    else{
        console.log("Students not found");
    }
}
function update(id,age)
{
const students=readStudent();
const result=students.find(s=>s.id===id);
if(result){
result.age=age;
fs.writeFileSync(filepath, JSON.stringify(students, null, 2));
  console.log("Student updated successfully");
}
else{
    console.log("student not found");
}
}
function deleteStudent(id)
{
    const students = readStudent();
    const remaining = students.filter(s => s.id !== id);
    if (remaining.length === students.length) {
        console.log("Student not found");
        return;
    }
    fs.writeFileSync(filepath, JSON.stringify(remaining, null, 2));
    console.log("Student deleted successfully");
}
module.exports={readStudent,addStudent,findstudent,update,deleteStudent};