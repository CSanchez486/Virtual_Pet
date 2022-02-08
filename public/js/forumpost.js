const postHandler = async (event) => {
    event.preventDefault();

    const post = document.querySelector('#question').value;

    if (post) {
        const response = await fetch('/api/forum', {
            method: 'POST',
            body: JSON.stringify({ post }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/featured')
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.postquestion').addEventListener('submit', postHandler);