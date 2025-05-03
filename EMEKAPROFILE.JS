
 
 
 document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        const username = document.getElementById("username").value;

        if (username.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        // Simulated backend response
        alert(`Hello, ${username}! Your name has been received.`);

        // Here’s where you’d typically send data to a real backend:
        // fetch('/submit', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username })
        // });
    });
});