const createRestaurantPage = () => {
    const content = document.querySelector("#content");
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const image = document.createElement('img');
    image.src = 'https://i.pinimg.com/originals/aa/39/a5/aa39a53db7365e1f12f12ac6c5547c6d.jpg';
    image.alt = 'Five Guys Restaurant Photo';
    image.height = '300';
    mainContent.appendChild(image);

    const container = document.createElement('div');
    container.classList.add('hero-container');

    const heading = document.createElement('h1');
    heading.classList.add('hero-heading');
    heading.textContent = 'Welcome to Five Guys Restaurant';
    container.appendChild(heading);

    const description1 = document.createElement('p');
    description1.textContent = 'This is a best place for great food and time to spend with your special ones.';
    container.appendChild(description1);
    
    const description2 = document.createElement('p');
    description2.textContent = 'Handcrafted BURGERS & FRIES since 1986';
    container.appendChild(description2);

    mainContent.appendChild(container);
    content.appendChild(mainContent);
}

export default createRestaurantPage;
