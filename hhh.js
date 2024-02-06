function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example: Check if username and password match some predefined values
    if (username === 'demo' && password === 'password') {
        alert('Login successful!');
        // Redirect to the dashboard or perform additional actions
    } else {
        alert('Invalid username or password. Please try again.');
    }
}