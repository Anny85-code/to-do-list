const completeToDo = (LIST, element) => {
  const task = LIST.find((t) => t.index === Number(element.id));
  task.done = element.checked;
  localStorage.setItem('TODO', JSON.stringify(LIST));
};

const clearAll = (LIST) => {
  LIST = LIST.filter((t) => !t.done);
  LIST = LIST.map((t, i) => {
    t.index = i;
    return t;
  });
  localStorage.setItem('TODO', JSON.stringify(LIST));

  return LIST;
};
export { completeToDo, clearAll };
