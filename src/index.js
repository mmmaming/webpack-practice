/**
 * Created on 2018/3/1.
 */
import { cube } from './math.js';

console.log(process.env.NODE_ENV)


function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());