// Manage Data with Local Storage

export function getStoredData(keyName) {
  return JSON.parse(localStorage.getItem(keyName));
}

export function setStoredData(keyName, itemsObj) {
  return localStorage.setItem(keyName, JSON.stringify(itemsObj));
}

export function filterTodosData(keyName, todoName) {
  const storedTodos = getStoredData(keyName);
  return storedTodos.filter((item) => item !== todoName);
}

// Set Initial Values
export const INITIAL_TODOS = getStoredData('todos') || [];
export const INITIAL_COMPLETED_TODOS = getStoredData('completed-todos') || [];
export const INITIAL_NOTIFICATION = {
  type: '',
  message: '',
  visibility: false,
};