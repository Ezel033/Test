const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    // In a real scenario, perform server-side validation and store user data securely
    const { username, email, password } = req.body;

    // For simplicity, just return a success message
    res.json({ message: 'Sign-up successful!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});