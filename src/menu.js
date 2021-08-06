import dishes from '../menu.json';
import menuTemplate from "./templates/menu.hbs";

const source = document.querySelector('#menu-template').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = menuTemplate(menuData);

const renderList = document.querySelector('.js-menu');
const rend = templ(dishes);

renderList.insertAdjacentHTML('beforeend', rend);