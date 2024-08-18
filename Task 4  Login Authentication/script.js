function toggleForm() {
    document.getElementById('register').classList.toggle('hidden');
    document.getElementById('login').classList.toggle('hidden');
}

function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Registration successful!');
        toggleForm();
    } else {
        alert('Please fill in all fields');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        document.querySelector('.container').classList.add('hidden');
        document.getElementById('secured').classList.remove('hidden');
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    document.getElementById('secured').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
}
