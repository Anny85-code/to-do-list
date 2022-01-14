const list = document.querySelector('.task-content');

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

const completeToDo = (element) => {
  const COMPLETE = 'checkbox';
  element.classList.toggle(COMPLETE);

  LIST[element.id].done = element.checked;
};
/* eslint-disable */

// remove to do
const removeToDo = (element) => {
  LIST = LIST.filter((t) => t.id !== Number(element.id));
  console.log(LIST);
  LIST = LIST.map((t, i) => {
    t.id = i;
    return t;
  });
  console.log(LIST);
  localStorage.setItem('TODO', JSON.stringify(LIST));
  loadList(LIST);
};

const loadList = (array) => {
  if (array) {
    LIST = array;
  }

  list.innerHTML = '';
  array.forEach((item) => {
    addToDo(item.name, item.id, item.done, item.trash);
  });

  document.querySelectorAll('li .input').forEach((b) => {
    b.addEventListener('click', () => {
      b.readOnly = false;
      b.focus();
    });
    b.addEventListener('change', () => {
      b.readOnly = true;
      const task = LIST.find((t) => t.id === Number(b.id));
      task.name = b.value.trim();
      localStorage.setItem('TODO', JSON.stringify(LIST));
    });
  });
  document.querySelectorAll('li button').forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log('click');
      removeToDo(btn.parentNode.parentNode);
    });
  });
};

export { loadList, addToDo, completeToDo, removeToDo };
