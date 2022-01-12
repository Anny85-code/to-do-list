import './style.css';

const listContainer = document.querySelector('.task-content');

const tasks = [
  {
    index: 0,
    description: 'Morning chores',
    completed: true,
  },
  {
    index: 1,
    description: 'After chores',
    completed: false,
  },
  {
    index: 2,
    description: 'Evening chores',
    completed: false,
  },
];

function render() {
  listContainer.innerHTML = '';

  tasks
    .sort((a, b) => a.index - b.index)
    .forEach((i) => {
      listContainer.innerHTML += `
      
      <div class="content third task">
       <ul class="inner">
        <li><input type="checkbox"  ${i.completed ? 'checked' : ''}/></li>
        <li><input class="input" type="text" value='${
          i.description
        }' readonly /></li>
        </ul>
       
       <ul><li> <button><i class="fa fa-ellipsis-v" aria-hidden="true"> </i></button></li></ul>
      
      </div>
      <hr />
      `;
    });
}

render();
