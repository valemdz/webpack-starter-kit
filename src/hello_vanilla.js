import style from './style.css';
import sass from './scss/main.scss';
import { suma } from './suma';
import logo from './img/react.png';

import data from './datos.json';

import { HelloWorld } from './components/App';

const d = document;
var app = d.getElementById('app');
var h1 = d.createElement('h1');
var img = d.createElement('img');

var p = d.createElement('p');
var nav = d.createElement('nav');

let hello = new HelloWorld('Valeria Torres');

let menu = '';

data.links.forEach(link => {
    console.log(link);
    menu += `<a href=${link[1]} >${link[0]}</a>`
});

nav.classList.add('Menu');
nav.innerHTML = menu;

p.textContent = hello.greet();

img.src = logo;
h1.textContent = 'WebPack con Java Script';

app.appendChild(h1);
app.appendChild(p);
app.appendChild(nav);
app.appendChild(img);