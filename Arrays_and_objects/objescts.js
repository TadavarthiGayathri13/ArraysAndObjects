const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 22, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 20, grade: "B" },
    { id: 3, firstName: "Mike", lastName: "Johnson", age: 24, grade: "C" },
    { id: 4, firstName: "Emma", lastName: "Davis", age: 23, grade: "B" },
    { id: 5, firstName: "Chris", lastName: "Williams", age: 21, grade: "A" }
];

// a. Add a student
function addStudent(newStudent) {
    students.push(newStudent);
}

// b. Update student information
function updateStudentInfo(studentId, updatedInfo) {
    const studentIndex = students.findIndex(function(student) {
        return student.id === studentId;
    });
    if (studentIndex !== -1) {
        for (const key in updatedInfo) {
            students[studentIndex][key] = updatedInfo[key];
        }
    }
}

// c. Delete the student
function deleteStudent(studentId) {
    const indexToDelete = students.findIndex(function(student) {
        return student.id === studentId;
    });
    if (indexToDelete !== -1) {
        students.splice(indexToDelete, 1);
    }
}

// d. List all students
function listAllStudents() {
    students.forEach(function(student) {
        console.log("ID: " + student.id + ", Name: " + student.firstName + " " + student.lastName + ", Age: " + student.age + ", Grade: " + student.grade);
    });
}

// e. Find students by grade
function findStudentsByGrade(grade) {
    const gradeStudents = [];
    students.forEach(function(student) {
        if (student.grade === grade) {
            gradeStudents.push(student);
        }
    });
    return gradeStudents;
}

// f. Calculate average age
function calculateAverageAge() {
    let totalAge = 0;
    students.forEach(function(student) {
        totalAge += student.age;
    });
    return totalAge / students.length;
}

addStudent({ id: 6, firstName: "Sarah", lastName: "Taylor", age: 25, grade: "C" });
updateStudentInfo(2, { age: 21 });
deleteStudent(3);
console.log("All Students:");
listAllStudents();
console.log("Students with Grade A:", findStudentsByGrade("A"));
console.log("Average Age of Students:", calculateAverageAge());
