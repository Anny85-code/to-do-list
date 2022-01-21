/**
 * @jest-environment jsdom
 */

const { completeToDo, clearAll } = require('../src/interact.js');

describe('Testing updating the completed status of a task', () => {
  document.body.innerHTML = '<input type="checkbox" id="2" class="checkbox"/>';
  const checkbox = document.querySelector('.checkbox');
  let LIST = [
    {
      description: 'task 1',
      done: false,
      index: 1,
    },
    {
      description: 'task 2',
      done: false,
      index: 2,
    },
  ];

  test('Update completed status to true', () => {
    checkbox.checked = true;
    localStorage.setItem('TODO', JSON.stringify(LIST));

    completeToDo(LIST, checkbox);
    LIST = JSON.parse(localStorage.getItem('TODO'));
    expect(LIST[1].done).toBeTruthy();
  });

  test('Change completed status to false', () => {
    checkbox.checked = false;
    completeToDo(LIST, checkbox);
    expect(LIST[1].done).toBeFalsy();
  });
});

describe('Testing removing completed tasks', () => {
  let LIST = [
    {
      description: 'Task 1',
      done: true,
      index: 1,
    },
    {
      description: 'task 2',
      done: false,
      index: 2,
    },
    {
      description: 'Task 3',
      done: true,
      index: 3,
    },
  ];
  localStorage.setItem('TODO', JSON.stringify(LIST));

  test('Check array length after clearing completed tasks', () => {
    clearAll(LIST);
    LIST = JSON.parse(localStorage.getItem('TODO'));
    expect(LIST).toHaveLength(1);
  });

  test('Update index after clearing completed tasks', () => {
    clearAll(LIST);
    expect(LIST[0].index).toBe(0);
  });
});
