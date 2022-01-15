import { clearAll, completeToDo } from './interact.js';

const list = document.querySelector('.task-content');
const clear = document.querySelector('.clear');

let LIST = [];

const addToDo = (toDo, id, done, trash) => {
  if (trash) {
    return;
  }

  const item = `
  <div class="content third task">
    <ul class="inner">
      <li>
      <input type="checkbox" class="checkbox"
      ${done ? 'checked' : ''} 
      job="complete" id="${id}"/>
      </li>
      <li>
        <input class="input" type="text" value='${toDo}' id="${id}" readonly />
        
      </li>
    </ul>
    <ul id="${id}">
      <li> 
      <button><i class="fa fa-trash-o de" job="delete" id="${id}"></i></button>
      </li>
      </ul>
  </div>
  <hr />`;

  const position = 'beforeend';

  list.insertAdjacentHTML(position, item);
};

/* eslint-disable */

// remove to do
const removeToDo = (element) => {
  LIST = LIST.filter((t) => t.index !== Number(element.id));
  LIST = LIST.map((t, i) => {
    t.index = i;
    return t;
  });
  localStorage.setItem('TODO', JSON.stringify(LIST));
  loadList(LIST);
};

const loadList = (array) => {
  if (array) {
    LIST = array;
  }

  list.innerHTML = '';
  array.forEach((item) => {
    addToDo(item.name, item.index, item.done, item.trash);
  });

  document.querySelectorAll('li .input').forEach((b) => {
    b.addEventListener('click', () => {
      b.readOnly = false;
      b.focus();
    });
    b.addEventListener('change', () => {
      b.readOnly = true;
      const task = LIST.find((t) => t.index === Number(b.id));
      task.name = b.value.trim();
      localStorage.setItem('TODO', JSON.stringify(LIST));
    });
  });

  document.querySelectorAll('li .checkbox').forEach((b) => {
    b.addEventListener('change', () => {
      completeToDo(LIST, b);
    });
  });
  document.querySelectorAll('li button').forEach((btn) => {
    btn.addEventListener('click', () => {
      removeToDo(btn.parentNode.parentNode);
    });
  });
};

clear.addEventListener('click', () => {
  const arr = clearAll(LIST);
  loadList(arr);
});

export { loadList, addToDo, completeToDo, removeToDo };
