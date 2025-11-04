class clsTeacher{

    private _fullName: string = "";

    private _subject: string = "" ;
    private _salary: number = 0 ;
    private _age: number = 0 ;
    private _address: string = "" ;
    private _phoneNumber: string = "" ;
    private _email: string = "" ;
    private _employeeID: string = "" ;


    public get fullName(): string {
        return this._fullName;
    }
    public set fullName(value: string) {
        this._fullName = value;
    }

    public get subject(): string {
        return this._subject;       
    }

    public set subject(value: string) {
        this._subject = value;
    }


    public get salary(): number {
        return this._salary;
    }

    public set salary(value: number) {
        this._salary = value;
    }

    public get age(): number {
        return this._age;   
    }
    public set age(value: number) {
        this._age = value;
    }

    public get address(): string {
        return this._address;       
    }
    public set address(value: string) {
        this._address = value;
    }
    public get phoneNumber(): string {
        return this._phoneNumber;
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get employeeID(): string {
        return this._employeeID;
    }
    public set employeeID(value: string) {
        this._employeeID = value;
    }


    public displayInfo(): void {
        console.log(`Teacher Info:
        Full Name: ${this.fullName}
        Subject: ${this.subject}
        Salary: ${this.salary}
        Age: ${this.age}
        Address: ${this.address}
        Phone Number: ${this.phoneNumber}
        Email: ${this.email}
        Employee ID: ${this.employeeID}`);
    }


   
} ;


    const teacher = new clsTeacher();
    teacher.fullName = "John Doe";
    teacher.subject = "Mathematics";
    teacher.salary = 50000;
    teacher.age = 35;

    teacher.address = "456 Elm St";
    teacher.phoneNumber = "123-456-7890";

    teacher.email = "t@gmail.com" ;
    teacher.employeeID = "EMP12345" ;
    teacher.displayInfo();
  //   console.log("Teacher Info:", teacher);