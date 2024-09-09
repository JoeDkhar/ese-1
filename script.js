document.addEventListener('DOMContentLoaded', () => {
    const catImage = document.getElementById('cat-image');
    const fetchCatButton = document.getElementById('fetch-cat');
    const signupForm = document.getElementById('signup-form');

    fetchCatButton.addEventListener('click', fetchCatImage);

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Sign up successful!');
        }
    });

    function fetchCatImage() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                catImage.src = data[0].url;
            })
            .catch(error => console.error('Error fetching cat image:', error));
    }

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!name || !email || !password) {
            alert('All fields are required.');
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }
});