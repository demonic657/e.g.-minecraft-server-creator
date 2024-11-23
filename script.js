// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('input[type="email"]');
    const serverNameInput = document.querySelector('input[type="text"]');
    const versionSelect = document.querySelector('select');
    const responseMessage = document.createElement('p');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get values from the form
        const email = emailInput.value;
        const serverName = serverNameInput.value;
        const version = versionSelect.value;

        // Display a success message
        responseMessage.textContent = `Server "${serverName}" for version ${version} has been created! We’ve sent a confirmation to ${email}.`;
        document.body.appendChild(responseMessage);
    });
});