

class Employee {
    public EmpCode: number;
    public EmpName: string;
    public Salarty: number;



    constructor(code: number, name: string, salary: number = 1100000) {
        this.EmpCode = code;
        this.EmpName = name;
        this.Salarty = salary;
    }

    public GetSalary(empCode: number): number {
        
        return this.Salarty ; // Assume a fixed salary for demonstration
    }

  
} ;

const emp1 = new Employee(1, "Nader Chargui");
console.log(`Employee Name: ${emp1.EmpName}, Salary: ${emp1.GetSalary(emp1.EmpCode)}`);


const emp2 = new Employee(2, "John Doe", 60000);
console.log(`Employee Name: ${emp2.EmpName}, Salary: ${emp2.GetSalary(emp2.EmpCode)}`);

class Person {
    // private property (cannot be accessed outside the class)
    private x: number;

    // public properties
    public FirstName: string;
    public LastName: string;

    constructor(firstName: string = "", lastName: string = "") {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.x = 0; // default value for private property
    }

    // public method
    public FullName(): string {
        return this.FirstName + " " + this.LastName;
    }
}

// Creating an instance of the Person class
const Person1 = new Person();
Person1.FirstName = "Nader";
Person1.LastName = "Chargui";

console.log(Person1.FullName());

// Example of another variable
let S1: string;
