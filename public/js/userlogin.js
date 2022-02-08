const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value;
    const password = document.querySelector('#password-login').value;

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
            alert("Logged in!");
        } else {
            alert(response.statusText);
        }
    }
};

const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#useremail').value.trim();

    if (username && password && email) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/user')
            alert("You're signed up!")
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.signup-form').addEventListener('submit', signupHandler);