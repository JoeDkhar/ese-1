document.addEventListener('DOMContentLoaded', () => {
    const catImage = document.getElementById('cat-image');
    const fetchCatButton = document.getElementById('fetch-cat');
   

    fetchCatButton.addEventListener('click', fetchCatImage);
    function fetchCatImage() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                catImage.src = data[0].url;
            })
            .catch(error => console.error('Error fetching cat image:', error));
    }
});

//q2

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert('Sign up successful!');
        }
    });

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

// q3

document.addEventListener('DOMContentLoaded', () => {
    const catDetailsContainer = document.getElementById('cat-details');

    fetch('https://joedkhar.github.io/ese-1/q3.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(cat => {
                const catCard = document.createElement('div');
                catCard.className = 'cat-card';

                catCard.innerHTML = `
                    <img src="${cat.url}" alt="${cat.name}">
                    <h2>${cat.name}</h2>
                    <p><strong>Temperament:</strong> ${cat.temperament}</p>
                    <p><strong>Origin:</strong> ${cat.origin}</p>
                    <p><strong>Description:</strong> ${cat.description}</p>
                    <p><strong>Life Span:</strong> ${cat.life_span} years</p>
                `;

                catDetailsContainer.appendChild(catCard);
            });
        })
        .catch(error => console.error('Error fetching cat details:', error));
});