import createRestaurantPage from './restaurant';
import createTabs from './tab';

const pageLoad = () => {
    createTabs();
    createRestaurantPage();
}

export default pageLoad;
