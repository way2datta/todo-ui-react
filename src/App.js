import './App.css';
import React from 'react';
import { TodoInput } from './TodoInput';
import { generateRandomText } from './randomString';
import { Listing } from './Listing';
import { TodosRepository } from './TodosRepository';

class App extends React.Component {
  constructor() {
    super();
    this.state = { current: "", todos: TodosRepository.getTodos() };
  }

  onNewTodoChange = ({ target }) => {
    const { value } = target;
    this.setState({ current: value });
  }

  createTodo = (text) => {
    let randomId = generateRandomText();
    const date = new Date().toISOString();
    return { text, id: randomId, isComplete: false, created_at: date, updated_at: date }
  }

  toggleStates = (id) => {
    TodosRepository.toggleStates(id);
    const {todos} = this.state;
    const existing = todos.find(x=>x.id === id);
    existing.isComplete = !existing.isComplete;
    this.setState({todos});
  }

  deleteTodo = (id) => {
    TodosRepository.deleteTodo(id);
    const {todos} = this.state;
    const todosAfterRemoval = todos.filter(x=>x.id !== id);
    this.setState({todos: todosAfterRemoval});
  }

  onNewTodoKeyDown = (e) => {
    if (e.key?.toLowerCase() === "enter") {
      const newTodo = this.createTodo(this.state.current);
      const { todos } = this.state;
      todos.push(newTodo);
      this.setState({ current: "", todos });
      TodosRepository.createTodo(newTodo);
      return;
    }
  }

  render() {
    return <div className="App">
      <h1>TODOS</h1>
      <TodoInput onChange={this.onNewTodoChange} value={this.state.current}
        onKeyPress={this.onNewTodoKeyDown}
      />
      <Listing todos={this.state.todos} toggleStates={this.toggleStates} deleteTodo={this.deleteTodo}/>
    </div>
  };
}

export default App;
  