export function isValidTodo(textInputRef) {
  const enteredTask = textInputRef.current.value;
  const taskIsValid = enteredTask.trim().length >= 2;

  return taskIsValid;
}
