class employee{
    constructor(name,salary){
        this.name = name;
        this.salary = salary
    }
    showSalary(){
        console.log(`${this.name} earns ${this.salary}`);
    }
}
const emp = new employee("Riya",50000);
emp.showSalary();