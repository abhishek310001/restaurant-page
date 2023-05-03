const createMenuPage = () => {
    const content = document.querySelector('#content');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const heading = document.createElement('h1');
    heading.classList.add('menu-heading');
    heading.textContent = "MENU";

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    const menuItem2 = document.createElement('li');
    const menuItem3 = document.createElement('li');
    const menuItem4 = document.createElement('li');
    const menuItem5 = document.createElement('li');
    const menuItem6 = document.createElement('li');

    menuItem1.textContent = "Burgers";
    menuItem2.textContent = "HotDogs";
    menuItem3.textContent = "Sandwiches";
    menuItem4.textContent = "Fries";
    menuItem5.textContent = "Milkshake";
    menuItem6.textContent = "Drinks";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem5);
    menuList.appendChild(menuItem6);

    mainContent.appendChild(heading);
    mainContent.appendChild(menuList);
    content.appendChild(mainContent);
}

export default createMenuPage;
