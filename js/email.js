
    (function() {
        emailjs.init("XaqzcE5nbwaTxunef"); // Replace with your EmailJS user ID

        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload

            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                address: document.getElementById("address").value,
                message: document.getElementById("message").value
            };

            emailjs.send("service_55kngma", "template_lqb8qz7", formData)
                .then(response => {
                    alert("Email sent successfully!");
                    document.getElementById("contact-form").reset(); // Reset form after submission
                })
                .catch(error => {
                    console.error("Email sending failed:", error);
                    alert("Failed to send email.");
                });
        });
    })();
