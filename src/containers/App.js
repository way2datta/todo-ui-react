import '../styles/App.css';
import React from "react";
import TodoInput from '../components/TodoInput';
import generateRandomText from '../libs/randomString';
import Listing from '../components/Listing';
import TodosRepository from '../apis/TodosRepository';

class App extends React.Component {
  constructor() {
    super();
    this.state = { current: '', todos: TodosRepository.getTodos() };
  }

  onNewTodoChange = ({ target }) => {
    const { value } = target;
    this.setState({ current: value });
  }

  createTodo = (text) => {
    const randomId = generateRandomText();
    const date = new Date().toISOString();
    return {
      text,
      id: randomId,
      isComplete: false,
      created_at: date,
      updated_at: date,
    };
  }

  toggleStates = (id) => {
    TodosRepository.toggleStates(id);
    const { todos } = this.state;
    const existing = todos.find((x) => x.id === id);
    existing.isComplete = !existing.isComplete;
    this.setState({ todos });
  }

  deleteTodo = (id) => {
    TodosRepository.deleteTodo(id);
    const { todos } = this.state;
    const todosAfterRemoval = todos.filter((x) => x.id !== id);
    this.setState({ todos: todosAfterRemoval });
  }

  onNewTodoKeyDown = (e) => {
    if (e.key?.toLowerCase() === 'enter') {
      const { current, todos } = this.state;
      const newTodo = this.createTodo(current);
      todos.push(newTodo);
      this.setState({ current: '', todos });
      TodosRepository.createTodo(newTodo);
    }
  }

  render() {
    const { current, todos } = this.state;
    return (
      <div className="App">
        <h1>TODOS</h1>
        <TodoInput
          onChange={this.onNewTodoChange}
          value={current}
          onKeyPress={this.onNewTodoKeyDown}
        />
        <Listing todos={todos} toggleStates={this.toggleStates} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
