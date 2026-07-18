class student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

const student1 = new student("Nishit",20);
const student2 = new student("Diya",25);
const student3 = new student("Harsh",21);

const students = [student1,student2,student3];

students.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
});