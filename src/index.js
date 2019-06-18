import style from './style.css';
import sass from './scss/main.scss';
import { suma } from './suma';
import  logo  from './img/react.png';

import data from './datos.json';

const d = document;
var app = d.getElementById('app');
var h1 = d.createElement('h1');
var img = d.createElement('img');
img.src = logo;
h1.textContent = 'Trabajando con WebPack';

app.appendChild(h1);
app.appendChild(img);

const profesor = 'VALERIA';
console.log('Ejemplo de webpack sin configuracion');
console.log(`Hola ${profesor}`);
console.log( data );

console.log(suma(9, 9));