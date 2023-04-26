

const createRestaurantPage = () => {
    const content = document.querySelector("#content");
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const image = document.createElement('img');
    image.src = 'https://images.unsplash.com/photo-1559069919-c3ccb589630d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80';
    image.alt = 'Five Guys Restaurant Photo';
    image.height = '500';
    mainContent.appendChild(image);

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Five Guys Restaurant';
    mainContent.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'This is a best place for great food and time to spend with your special ones.';
    mainContent.appendChild(description);
    content.appendChild(mainContent);
}

export default createRestaurantPage;
