function CopyValueFromInputOneToInputTwo() {
    console.log("Mouse is hovering over the button");

    const input1 = document.getElementById("inputText1");
    const input2 = document.getElementById("inputText2");

    if (input1 && input2) {
      // Show all useful properties
      console.log("ID:", input1.id);
      console.log("Type:", input1.type);
      console.log("Placeholder:", input1.placeholder);
      console.log("Disabled:", input1.disabled);
      console.log("ReadOnly:", input1.readOnly);
      console.log("Value in Input 1:", input1.value);

      // Copy value to second input
      input2.value = input1.value;
    }
  }