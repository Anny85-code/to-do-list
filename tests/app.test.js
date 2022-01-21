/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
  
    <header class="container head-main">
      <h2>Dynamic Todo List</h2>
      <hr />
    </header>
    <div class="container">
      <ul class="content first">
        <li><h2 class="heading">Today's To do</h2></li>
        <li>
          <button type="submit">
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
      <hr />
      <div class="content second">
        <input type="text" class="input-field" placeholder="Add to your list" />
        <button type="submit">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
      </div>
      <hr />
      <div class="task-content"></div>

      <div class="fifth">
        <p class="clear">Clear all completed</p>
      </div>
    </div>
  
`;

const { addToDo, removeToDo } = require('../src/app.js');

describe('Testing adding ToDo List', () => {
  test('Add task to todo list', () => {
    addToDo('Task 1', 1, true);
    expect(document.querySelectorAll('.task').length).toBe(1);
  });
  test('add task to todo list', () => {
    addToDo('Task 2', 2, false);
    expect(document.querySelectorAll('.task')).toHaveLength(2);
  });
});

describe('Testing Delete ToDo List', () => {
  const LIST = [
    {
      description: 'Task 1',
      completed: false,
      index: 1,
    },

    {
      description: 'Task 2',
      completed: true,
      index: 2,
    },

    {
      description: 'Task 3',
      completed: false,
      index: 3,
    },
  ];

  test('Delete task with index 1', () => {
    removeToDo(LIST, 1);
    expect(LIST[1].index).toBe(2);
  });
  test('Delete task with index 2', () => {
    removeToDo(LIST, 2);
    expect(LIST[2].index).toBe(3);
  });
});
