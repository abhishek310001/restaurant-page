const createContactPage = () => {
    const content = document.querySelector('#content');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter heading';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter address';
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.placeholder = 'Enter phone number';
    form.appendChild(phoneInput);
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    form.appendChild(submitBtn);

    mainContent.appendChild(form);
    content.appendChild(mainContent);
}

export default createContactPage;
