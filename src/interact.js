const completeToDo = (element) => {
  const COMPLETE = 'checkbox';
  element.classList.toggle(COMPLETE);
  LIST[element.id].done = element.checked;
};

const clearAll = (item) => {
  const COMPLETE = 'checkbox';
  if (item.id === COMPLETE) {
    item.clear();
  }
};
export { completeToDo, clearAll };
