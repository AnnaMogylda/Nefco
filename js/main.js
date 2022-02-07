const hamburger = document.getElementById('hamburger');
const menuItems = document.querySelectorAll('#hamburger ul li');
const menu = document.querySelector('.menu-items');
const products = document.querySelector('#products');
const productItems = document.querySelector('#product_items');
const smartphones = document.querySelector('#smartphones');
const smartphonesList = document.querySelector('#smartphones_list');
const laptops = document.querySelector('#laptops');
const laptopsList = document.querySelector('#laptops_list');
const accessories = document.querySelector('#laptops');
const accessoriesList = document.querySelector('#accessories_list');

const fullMenuProducts = document.querySelector('#full_menu_products');
const fullMenuProductsLink = document.querySelector('#full_menu_products_link');
const fullMenuProductItems = document.querySelector('#full_menu_product_items');
const fullMenuPhones = document.querySelector('#full_menu_phones');
const fullMenuPhonesList = document.querySelector('#full_menu_phones_list');
const fullMenuLaptops = document.querySelector('#full_menu_laptops');
const fullMenuLaptopsList = document.querySelector('#full_menu_laptops_list');
const fullMenuAccessories = document.querySelector('#full_menu_accessories');
const fullMenuLaptopsAccessories = document.querySelector('#full_menu_accessories_list');


hamburger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (hamburger.getAttribute('aria-expanded') === 'false') {
        hamburger.setAttribute('aria-expanded', 'true');
        setBlockDisplayStyle(menu);
        menuItems.forEach(item => item.setAttribute('tabindex', '-1'));
    } else {
        hamburger.setAttribute('aria-expanded', 'false');
        setDiplayNoneStyle(menu);
        menuItems.forEach(item => item.setAttribute('tabindex', '0'));
    }
});

function setBlockDisplayStyle(item) {
    item.style.display = 'block';
}

function setStylesToList(item) {
    item.style.position = 'absolute';
    item.style.backgroundColor = '#046C3F';
    item.style.color = '#fff';
}

function setDiplayNoneStyle(item) {
    item.style.display = 'none';
}

document.addEventListener('click', (e) => {
    const isClickInsideElement = fullMenuProducts.contains(e.target);
    if (!isClickInsideElement) {
        setDiplayNoneStyle(fullMenuProductItems);
    }
});

products.addEventListener('click', (e) => {
    setBlockDisplayStyle(productItems);
});

smartphones.addEventListener('click', (e) => {
    setBlockDisplayStyle(smartphonesList);
});

laptops.addEventListener('click', (e) => {
    setBlockDisplayStyle(laptopsList);
});

accessories.addEventListener('click', (e) => {
    setBlockDisplayStyle(accessoriesList);
});

fullMenuProducts.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (fullMenuProductsLink.getAttribute('aria-expanded') === 'false') {
        fullMenuProductsLink.setAttribute('aria-expanded', 'true');
        setBlockDisplayStyle(fullMenuProductItems);
        setStylesToList(fullMenuProductItems);
    } else {
        fullMenuProductsLink.setAttribute('aria-expanded', 'false');
        setDiplayNoneStyle(fullMenuProductItems);
    }
});

fullMenuPhones.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDiplayNoneStyle(fullMenuLaptopsList);
    setDiplayNoneStyle(fullMenuLaptopsAccessories);

    setBlockDisplayStyle(fullMenuPhonesList);
    setStylesToList(fullMenuPhonesList);
});

fullMenuLaptops.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDiplayNoneStyle(fullMenuPhonesList);
    setDiplayNoneStyle(fullMenuLaptopsAccessories);

    setBlockDisplayStyle(fullMenuLaptopsList);
    setStylesToList(fullMenuLaptopsList);
});

fullMenuAccessories.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    setDiplayNoneStyle(fullMenuPhonesList);
    setDiplayNoneStyle(fullMenuLaptopsList);

    setBlockDisplayStyle(fullMenuLaptopsAccessories);
    setStylesToList(fullMenuLaptopsAccessories);
});


