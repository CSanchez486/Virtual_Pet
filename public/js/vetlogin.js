const loginHandler = async (event) => {
    event.preventDefault();
    const first_name = document.querySelector('#vetfirstname').value;
    const last_name = document.querySelector('#vetlastname').value;
    const dea = document.querySelector('#vetdea').value;

    if (first_name && last_name && dea) {
        const response = await fetch('/api/vet/login', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, dea }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/featured');
            alert("Logged in!")
        } else {
            console.log(response);
            alert(response.statusText);
        }
    }
};

const signupHandler = async (event) => {
    event.preventDefault();

    const firstname = document.querySelector('#vetfirstsign').value.trim();
    const lastname = document.querySelector('#vetlastnsign').value.trim();
    const dea = document.querySelector('#vetdeasign').value.trim();

    if (firstname && lastname && dea) {
        const response = await fetch('/api/vet/', {
            method: 'POST',
            body: JSON.stringify({ firstname, lastname, dea }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/vet')
            alert("You're signed up!");
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginHandler);
document.querySelector('.signup-form').addEventListener('submit', signupHandler);