function DisableInputOne() {
    console.log("button clicked to disable input one");
   let input1Value = document.getElementById("inputText1");

   input1Value.disabled = true;
}


function EnableInputOne() {
    console.log("button clicked to enable input one");
   let input1Value = document.getElementById("inputText1");

   input1Value.disabled = false;
}