import createRestaurantPage  from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () => {
    const content = document.querySelector('#content');
    const tabs = document.createElement('div');

    tabs.classList.add('tabs');

    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');

    tab1.setAttribute('id', 'home-tab');
    tab2.setAttribute('id', 'menu-tab');
    tab3.setAttribute('id', 'contact-tab');

    tab1.classList.add('tab');
    tab2.classList.add('tab');
    tab3.classList.add('tab');

    tab1.textContent = "HOME";
    tab2.textContent = "MENU";
    tab3.textContent = "CONTACT";
    
    tabs.appendChild(tab1);
    tabs.appendChild(tab2);
    tabs.appendChild(tab3);
    content.appendChild(tabs);
    
    tab1.style.backgroundColor = '#d9a413';

    tab1.addEventListener('click', () => {
        clearContent();
        tab1.style.backgroundColor = '#d9a413';
        tab2.style.backgroundColor = '#D21033';
        tab3.style.backgroundColor = '#D21033';
        createRestaurantPage();
    });

    tab2.addEventListener('click', () => {
        clearContent();
        tab2.style.backgroundColor = '#d9a413';
        tab1.style.backgroundColor = '#D21033';
        tab3.style.backgroundColor = '#D21033';
        createMenuPage();
    });

    tab3.addEventListener('click', () => {
        clearContent();
        tab3.style.backgroundColor = '#d9a413';
        tab2.style.backgroundColor = '#D21033';
        tab1.style.backgroundColor = '#D21033';
        createContactPage();
    });
}

const clearContent = () => {
    const content = document.querySelector("#content");
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
        content.removeChild(mainContent);
    }
}

export default createTabs;
