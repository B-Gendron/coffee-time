function respondToInvitation(response) {
    var responseMessage = document.getElementById('response-message');
    var timeInput = document.getElementById('time-input');

    if (response === 'yes') {
        responseMessage.setAttribute('style', 'white-space: pre;');
        responseMessage.textContent = "Bon, il est 22h et j'ai la flemme d'écrire en anglais. J'aurais aimé prendre le temps de créer une boîte de dialogue pour dire ce qui va suivre,\r\n";
        responseMessage.textContent += "mais il est toujours 22h et j'ai toujours la flemme donc : quand tu cliques sur 'Validate', je reçois un mail avec l'horaire.\r\n";
        responseMessage.textContent += "Boom, c'est trop fort l'info (en vrai merci ChatGPT, mais c'est trop fort quand même).\r\n";
        responseMessage.textContent += "À +,\r\n";
        responseMessage.textContent += "Vivent les GAN.";
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
        sendAnEmail(timeInput);
    }
}

function sendAnEmail(coffeeTime) {
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
