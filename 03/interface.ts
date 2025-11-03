import readlineSync from "readline-sync";


interface StInfo {
    firstName: string;
    lastName: string;
    address?: string; // optional
    city?: string; 
    ages?:number[]   // optional
  }
  


  const arr1 : number[]  = [1,2,3,4,50,400]  ;;
  const arr2 : number[]  = []  ;;

  arr2.push(1)
    arr2.push(2)
    arr2.push(3)
    arr2.push(4)
    arr2.push(50)
    arr2.push(400)
    console.log(arr2);



  // 2️⃣ Create a function to fill an array of StInfo
  function fillInfoArray(): StInfo[] {
  
    const infos: StInfo[] = [];

    for(let i=0;i<3;i++){
      const firstName = readlineSync.question("Enter please your first name: ");
        const lastName = readlineSync.question("Enter please your last name: ");
        const address = readlineSync.question("Enter please your address: ");
        const city = readlineSync.question("Enter please your city: ");
        // const ages : number[] = [];

        // for(let j=0;j<3;j++){
        //   const age = parseInt(readlineSync.question(`Enter please age ${j+1} : `));
        //   ages.push(age);
        // }
        infos.push({ firstName, lastName ,address,city});

        console.log("################################\n\n")


    }

   
  
//   infos.push({ firstName: "ahmed", lastName: "Doe", address: "tunis", city: "New York" });
//     infos.push({ firstName: "sami", lastName: "Smith" ,address:"sfax",city:"ordan "});
  
    return infos;
  }





  const infos  =  fillInfoArray()


   function printInfo(info : StInfo[]) :void
   {

    for(const inf of info){
     
        console.log(`First Name : ${inf.firstName} `);
        console.log(`Last Name : ${inf.lastName} `);
        console.log(`Address : ${inf.address} `);
        console.log(`City : ${inf.city} `);
        console.log("################################\n\n")
    }
   }























































  
//   // 3️⃣ Function to print all elements
//   function printInfoArray(arr: StInfo[]): void {
//     for (const info of arr) {
//       console.log();
//     }
//   }
  
//   // 4️⃣ Run the example
//   const infos = fillInfoArray();
//   printInfoArray(infos);
  