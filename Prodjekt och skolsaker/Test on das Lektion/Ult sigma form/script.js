// Select the form and output elements
const form = document.getElementById("userForm");
const output = document.getElementById("output");

// Listen for the form's submit event
form.addEventListener("submit", function(event) {
  // Prevent the default form submission (reloading the page)
  event.preventDefault();

  // Create an object to store the form data
  const formData = new FormData(form);

  // Create an HTML string to format the data
  let htmlOutput = "<ul>";

  // Iterate through the form data
  formData.forEach((value, key) => {
    htmlOutput += `<li><strong>${key}:</strong> ${value}</li>`;
  });

  htmlOutput += "</ul>";

  // Display the formatted data in the output element
  output.innerHTML = htmlOutput;
});
