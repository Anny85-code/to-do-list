import './style.css';
import { loadList, addToDo } from './app.js';

const input = document.querySelector('.input-field');
const addInput = document.querySelector('.fa-arrow-left');
const refresh = document.querySelector('.fa-refresh');

let LIST;
let id;
const data = localStorage.getItem('TODO');

if (data) {
  LIST = JSON.parse(data);
  id = LIST.length; // set the id to the last one in the list
  loadList(LIST); // load the list to the user interface
} else {
  // if data isn't empty
  LIST = [];
  id = 0;
}
refresh.addEventListener('click', () => {
  localStorage.reload();
});

const pushToDo = () => {
  const data = localStorage.getItem('TODO');

  if (data) {
    LIST = JSON.parse(data);
    id = LIST.length; // set the id to the last one in the list
    loadList(LIST); // load the list to the user interface
  } else {
    // if data isn't empty
    LIST = [];
    id = 0;
  }
  const toDo = input.value;

  // if the input isn't empty
  if (toDo) {
    addToDo(toDo, id, false, false);

    LIST.push({
      name: toDo,
      id,
      done: false,
      trash: false,
    });

    // add item to localstorage ( this code must be added where the LIST array is updated)
    localStorage.setItem('TODO', JSON.stringify(LIST));

    id += 1;
  }
  input.value = '';
};
addInput.addEventListener('click', pushToDo);

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    pushToDo();
  }
});
