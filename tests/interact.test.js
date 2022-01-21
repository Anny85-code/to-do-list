/**
 * @jest-environment jsdom
 */

const { completeToDo, clearAll } = require('../src/interact.js');

describe('Testing updating the completed status of a task', () => {
  document.body.innerHTML = '<input type="checkbox" class="checkbox"/>';
  const checkbox = document.querySelector('.checkbox');
  let LIST = [
    {
      description: 'Task 1',
      completed: false,
      index: 1,
    },
    {
      description: 'task 2',
      completed: false,
      index: 2,
    },
  ];

  LIST = LIST.find((t) => t.index === Number(LIST.index));
  test('Update completed status to true', () => {
    const currentTask = LIST[0].index;
    currentTask.completed = true;
    completeToDo(currentTask, LIST);
    expect(LIST[1].completed).toBeTruthy();
  });

  test('Change completed status to false', () => {
    checkbox.checked = false;
    completeToDo(checkbox, LIST[1]);
    expect(LIST[1].completed).toBeFalsy();
  });
});

describe('Testing removing completed tasks', () => {
  let LIST = [
    {
      description: 'Task 1',
      completed: true,
      index: 1,
    },
    {
      description: 'task 2',
      completed: false,
      index: 2,
    },
    {
      description: 'Task 3',
      completed: true,
      index: 3,
    },
  ];

  LIST = LIST.filter((task) => !task.completed);
  test('Check array length after clearing completed tasks', () => {
    clearAll(LIST);
    expect(LIST).toHaveLength(1);
  });

  test('Update index after clearing completed tasks', () => {
    clearAll(LIST);
    expect(LIST[0].index).toBe(0);
  });
});