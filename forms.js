document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        alert('Sign-up successful!');
        // Handle sign-up logic here
    } else {
        alert('Please fill in all fields.');
    }
});
