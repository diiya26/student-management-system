class Student {
    constructor(id, name, age, course) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.course = course;
    }
}

const students = [
    new Student(1, "Nishit", 22, "MCA"),
    new Student(2, "Rahul", 21, "BCA"),
    new Student(3, "Priya", 23, "MCA"),
    new Student(4, "Amit", 22, "B.Tech"),
    new Student(5, "Sneha", 20, "BSc")
];

console.log("Student Details using Destructuring:");
students.forEach(student => {
    const { id, name, age, course } = student;
    console.log(`ID: ${id}, Name: ${name}, Age: ${age}, Course: ${course}`);
});

const printStudentNames = () => {
    console.log("\nStudent Names:");
    students.forEach(student => console.log(student.name));
};

printStudentNames();

const loadStudents = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(students);
        }, 3000);
    });
};

async function displayStudents() {
    console.log("\nLoading student data...");
    const data = await loadStudents();

    console.log("\nStudent Data Loaded Successfully!");
    data.forEach(student => {
        console.log(student);
    });
}

displayStudents();