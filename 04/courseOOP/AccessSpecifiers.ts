
class clsDepartment {

    public deptName: string = "Computer Science";
    public deptCode: string = "CS101";
    public location: string = "Building A";



    public PrintDeptInfo(): void 
    {
        console.log("Department Name: " + this.deptName);
        console.log("Department Code: " + this.deptCode);
        console.log("Location: " + this.location);
    }



} ;


  const department = new clsDepartment();


    department.deptName = "Mathematics";
    department.deptCode = "MATH201";
    department.location = "Building B";
    console.log("Department Info:",department);



class clsStudent {
  public name: string = "";
  public Address: string = "123 Main St" ;
    private age: number = 0;
    protected var1: number = 100;
    protected grade: string = "A";


    // constructor(name: string, age: number, grade: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.grade = grade;
    // }


    private PrintAge(): void 
    {
        console.log("Age: " + this.age);
    }

    protected fn1(): number 
        {
           return 10 ;
        }

    public PrintName(): void 
        {
            console.log("Name: " + this.name);
        }
    
        public fn3(): number 
        {
           return this.fn1() + this.var1 ; 
      
           
        }

        public Display(): string 
        {
           return  this.Address ;
        }
 
          

} ;




const student = new clsStudent();

student.name = "John Doe";
student.Address = "456 Elm St  Tunis";


console.log("Address: " + student.Display()  , student.fn3() , "object  ",student); // Accessible
console.log("Student Name: " + student.name); // Accessible

