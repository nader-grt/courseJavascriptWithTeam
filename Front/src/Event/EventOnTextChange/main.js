// function setupInputChangeListener() {
//     // Get references to both inputs
//     const input1 = document.getElementById("inputText1");
//     const input2 = document.getElementById("inputText2");
  
//     // Safety check (in case elements are missing)
//     if (!input1 || !input2) {
//       console.error("❌ One or both input elements not found!");
//       return;
//     }
  
//     // Add event listener for change event
//     input1.addEventListener("change", function () {
//       console.log("Input changed:", input1.value);
  
//       // Copy the text only after the user leaves the first input
//       input2.value = input1.value;
//     });
//   }
  
//   // Run the function after the page loads
//   window.onload = setupInputChangeListener;
  



  /**
   * 
   * 
   * function setupLiveInputCopy() {
  const input1 = document.getElementById("inputText1");
  const input2 = document.getElementById("inputText2");

  // Check if elements exist before adding event
  if (!input1 || !input2) return;

  input1.addEventListener("input", function () {
    console.log("User typed:", input1.value);
    input2.value = input1.value;
  });
}

// Call the function when the page is loaded
window.onload = setupLiveInputCopy;

   */



function setupLiveInputCopy3() {
    const input1 = document.getElementById("inputText1");
    const input2 = document.getElementById("inputText2");
  
    if (!input1 || !input2) return;
  
    input1.addEventListener("input", function () {
      // Copy text in real-time
      input2.value = input1.value;
  
      // Disable input2 when input1 has content
      if (input1.value.trim() !== "") {
        input2.disabled = true;
      } else {
        // Re-enable input2 if input1 is cleared
        input2.disabled = false;
        input2.value = "";
      }
    });
  }
  
  window.onload = setupLiveInputCopy3;
  