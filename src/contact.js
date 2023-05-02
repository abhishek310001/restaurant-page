const createContactPage = () => {
    const content = document.querySelector('#content');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Enter name';
    nameInput.setAttribute('required', '');
    form.appendChild(nameInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter address';
    addressInput.setAttribute('required', '');
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.placeholder = 'Enter phone number';
    phoneInput.setAttribute('required', '');
    form.appendChild(phoneInput);
    
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.value = 'Submit';
    submitBtn.innerHTML = 'Submit';
    form.appendChild(submitBtn);

    mainContent.appendChild(form);
    content.appendChild(mainContent);
}

export default createContactPage;
