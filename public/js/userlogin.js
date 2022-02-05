const loginHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const signupHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();
    const firstname = document.querySelector('').value.trim();
    const lastname = document.querySelector('').value.trim();
    const email = document.querySelector('').value.trim();
    const phonenumber = document.querySelector('').value.trim();

    if (username && password && firstname && lastname && email && phonenumber) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, password, firstname, lastname, email, phonenumber }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('').addEventListener('submit', loginHandler);
document.querySelector('').addEventListener('submit', signupHandler);