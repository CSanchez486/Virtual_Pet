const postHandler = async (event) => {
    event.preventDefault();

    const animal = document.querySelector('').value.trim();
    const post = document.querySelector('').value.trim();
    const picture = document.querySelector('').value;

    if (post) {
        const response = await fetch('', {
            method: 'POST',
            body: JSON.stringify({ animal, post, picture }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('').addEventListener('submit', postHandler);