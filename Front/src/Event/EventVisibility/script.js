function hideInput() {
  const input1 = document.getElementById("inputText1");
const input2 = document.getElementById("inputText2");

input2.value = input1.value;
input1.style.visibility = "hidden";


// input1.addEventListener("input", function () {
//   if (input1.value.trim() !== "") {
//     input2.value = input1.value;
//     input1.style.visibility = "hidden"; // or display = "none"
//   }
// });
  }
  
  
  
  function showInput(){

    const input1 = document.getElementById("inputText1");
    const input2 = document.getElementById("inputText2");
  
   
    input1.value = input2.value;
    input1.style.visibility = "visible";
 
  }