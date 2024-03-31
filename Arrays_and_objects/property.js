const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

function displayStudentInformation(studentObj) {
    for (let key in studentObj) {
        if (studentObj.hasOwnProperty(key)) {
            console.log("Property:", key + ", value:", studentObj[key]);
        }
    }
}

displayStudentInformation(student);
