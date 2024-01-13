function moveMailIcon() {
    const mailIcon = document.getElementById('mail-icon');
    const contactDiv = document.getElementById('contact-div');

    contactDiv.addEventListener('mouseover', () => {
        mailIcon.style.transitionDuration = '0.5s';
        mailIcon.style.translate = '2px -2px';
    });

    contactDiv.addEventListener('mouseleave', () => {
        mailIcon.style.transitionDuration = '0.5s';
        mailIcon.style.translate = '0 0';
    });
}

function renderContactForm() {
    const contactDiv = document.getElementById('contact-div');
    const contactMessage = document.getElementById('contact-message');
    const closeBtn = document.getElementById('close-btn');

    contactDiv.addEventListener('click', () => {
        if (contactMessage.classList.contains('closed')) {
            contactMessage.classList.remove('closed');
            contactMessage.classList.add('open');
        }
        else {
            contactMessage.classList.remove('open');
            contactMessage.classList.add('closed');
        }
    });

    closeBtn.addEventListener('click', () => {
        if (contactMessage.classList.contains('open')) {
            contactMessage.classList.remove('open');
            contactMessage.classList.add('closed');
        }
    });
}

moveMailIcon();
renderContactForm();