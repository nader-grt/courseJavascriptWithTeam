function changeTabOrder() {
    const username = document.getElementById("username");
    const message = document.getElementById("message");
    const email = document.getElementById("email");
    const submitBtn = document.getElementById("submitBtn");
  
    // Change tab order dynamically using JavaScript
    username.tabIndex = 3;
    message.tabIndex = 1;
    email.tabIndex = 4;
    submitBtn.tabIndex = 2;
  
    alert("Tab order has been changed!\nNow press TAB to see the new order.");
  }
  