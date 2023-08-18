$(document).ready(function () {
  // Handle login form submission
  $("#loginForm").submit(function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = $(this).serialize();

    // Send AJAX request to PHP login script
    $.ajax({
      url: "login.php",
      type: "POST",
      data: formData,
      dataType: "json",
      success: function (response) {
        if (response.success) {
          // Redirect to the success page
          window.location.href = "success-page.html";
        } else {
          // Display error message
          $("#errorMessage").text(response.message);
        }
      },
      error: function () {
        // Display a generic error message
        $("#errorMessage").text("An error occurred. Please try again.");
      },
    });
  });
});
