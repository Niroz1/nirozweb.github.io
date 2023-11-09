document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    fetch('/submit-form-endpoint', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Show a success message to the user
            alert('Message sent successfully!');
            // Optionally, clear the form fields
            event.target.reset();
        } else {
            alert('An error occurred. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
