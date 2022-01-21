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

const { loadList, addToDo, removeTodo } = require('../src/app.js');

describe('testing adding task', () => {
  test('add task to todo list', () => {
    addToDo('car', 1, true);
    expect(document.querySelectorAll('.task').length).toBe(1);
  });
});
