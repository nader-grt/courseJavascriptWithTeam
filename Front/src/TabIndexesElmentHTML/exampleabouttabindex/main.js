const submitBtn = document.getElementById("submitBtn");

// Example: manually focus the first input when page loads
window.addEventListener("load", () => {
  document.getElementById("name").focus();
  console.log("Focus set to Name field.");
});

// Handle form submission
submitBtn.addEventListener("click", () => {
  alert("Form submitted!");
});
