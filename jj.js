function signup() {
    // Get input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simple client-side validation
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Simulate user registration (replace with server-side logic)
    alert('Registration successful!\nUsername: ' + username + '\nEmail: ' + email);
    // Redirect to login page or perform additional actions
}