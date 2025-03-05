
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = new Date(startDate);
    }

    getDetails = () => `ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}, Gender: ${this.gender}, Start Date: ${this.startDate.toDateString()}`;
}

const emp1 = new EmployeePayroll(101, "Shristy Mishra", 50000, "Female", "2003-03-15");
const emp2 = new EmployeePayroll(102, "Arjun Chauhan", 40000, "Male", "2003-11-05");

console.log(emp1.getDetails());
console.log(emp2.getDetails());
