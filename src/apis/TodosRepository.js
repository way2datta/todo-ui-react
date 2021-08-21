export default class TodosRepository {
  static createTodo(newTodo) {
    const todos = this.getTodos();
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  static getTodo(id) {
    const todos = this.getTodos();
    return todos.find((x) => x.id === id);
  }

  static toggleStates(id) {
    const existingTodos = this.getTodos();
    const existing = existingTodos.find((x) => x.id === id);
    existing.isComplete = !existing.isComplete;
    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }

  static deleteTodo(id) {
    const existingTodos = this.getTodos();
    const todosAfterRemoval = existingTodos.filter((x) => x.id !== id);
    localStorage.setItem('todos', JSON.stringify(todosAfterRemoval));
  }

  static getTodos() {
    const existingTodosString = localStorage.getItem('todos');
    return existingTodosString ? JSON.parse(existingTodosString) : [];
  }

  static updateTodo(id, newValue) {
    const todos = this.getTodos();
    const exisitng = todos.find(id);
    exisitng.isComplete = newValue.isComplete;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
