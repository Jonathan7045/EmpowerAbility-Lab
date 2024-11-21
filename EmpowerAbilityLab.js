document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('open-modal');
    const modal = document.getElementById('community-modal');
    const closeModalButton = document.getElementById('close-modal');
    const inviteSpeakerCheckbox = document.getElementById('invite-speaker');
    const eventDetails = document.getElementById('event-details');
    const form = document.getElementById('schedule-form');
    const formMessage = document.getElementById('form-message');

    openModalButton.addEventListener('click', () => {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        modal.focus();
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    });

    inviteSpeakerCheckbox.addEventListener('change', () => {
        if (inviteSpeakerCheckbox.checked) {
            eventDetails.hidden = false;
        } else {
            eventDetails.hidden = true;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('email').value;
        if (!emailInput) {
            formMessage.textContent = 'Error: Email is required!';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Thank you for scheduling a call!';
            formMessage.style.color = 'green';
        }
    });
});
