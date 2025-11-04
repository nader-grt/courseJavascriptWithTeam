

class ClsPerson {

    public firstName : string = "" ;
    public lastName :string  = "" ;
    public Address  : string  = "Tunis" ;

    // constructor(firstName:string , lastName:string , Address:string)
    // {
    //   this.firstName = firstName ;
    //   this.lastName  = lastName ;
    //   this.Address   = Address ;

    // }

    public  getFullName():string {

        return `${this.firstName  + " " + this.lastName  + " from " + this.Address }` ; ;
    }

    public Print():void {
      

        //console.log(`Person Name : ${this.getFullName() } `) ;


      }

};


//const person1   = new ClsPerson("Nader","Chargui","Ariana Tunisia") ;

const person2   = new ClsPerson() ;
person2.firstName  = "Nader" ;
person2.lastName   = "Chargui" ;

 
   let fullName :string  = person2.getFullName() ;

console.log(fullName)