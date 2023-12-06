function respondToInvitation(response) {
    var responseMessage = document.getElementById('response-message');
    var timeInput = document.getElementById('time-input');

    if (response === 'yes') {
        responseMessage.textContent = 'Great! Looking forward to it. ☕';
        timeInput.style.display = 'block';
    } else if (response === 'no') {
        responseMessage.textContent = 'Maybe next time. 😔';
        timeInput.style.display = 'none';
    }

    if (response === 'yes') {
        validateAndSendEmail();
    }
}

function validateAndSendEmail() {
    var timeInput = document.getElementById('coffee-time').value;
    
    if (timeInput.trim() !== "") {
        // Simulate sending an email (for educational purposes only)
        sendEmail(timeInput);
    }
}

function sendEmail(coffeeTime) {
    emailjs.init("y9J6etPPp_RmmWuxU");
    var templateParams = {
        to_email: "barbara.gendron@hotmail.fr", // Replace with your email address
        coffee_time: coffeeTime
    };

    emailjs.send("service_wippjn8", "template_5v2s2ba", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.error("Email sending failed:", error);
        });
}
