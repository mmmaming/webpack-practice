/**
 * Created on 2018/3/1.
 */

// function getComponent() {
//     return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//       var element = document.createElement('div');
//             element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//             return element;
//           }).catch(error => 'An error occurred while loading the component');
// }
// getComponent().then(component => {
//   document.body.appendChild(component);
// })


// import _ from 'lodash';
//
//   function component() {
//     var element = document.createElement('div');
//       var button = document.createElement('button');
//       var br = document.createElement('br');
//
//       button.innerHTML = 'Click me and look at the console!';
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//       element.appendChild(br);
//       element.appendChild(button);
//               // Note that because a network request is involved, some indication
//               // of loading would need to be shown in a production-level site/app.
//                   button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
//         var print = module.default;
//                 print();
//       });
//
//     return element;
//   }
//
//   document.body.appendChild(component());
// import { file, parse } from './global.js';

// import _ from 'lodash';
// import 'babel-polyfill';
function component() {
  var element = document.createElement('div');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  // this.alert('Hmmm, this probably isn\'t a great idea...')
  return element;
}

document.body.appendChild(component());

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
      console.log('We retrieved some data! AND we\'re confident it will work on a variety of browser distributions.')
      console.log(json)
    })
  .catch(error => console.error('Something went wrong when fetching this data: ', error))