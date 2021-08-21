import React from 'react';

export class Listing extends React.Component {
  render() {
    const { todos, toggleStates, deleteTodo } = this.props;
    const listview = todos.length ? <ul>
      {todos.map(x => <li key={x.id}>
        <input type="checkbox" checked={x.isComplete} onChange={() => toggleStates(x.id)} />
        {x.text}
        <button onClick={() => deleteTodo(x.id)}>X</button>
      </li>)}
    </ul>
      : <></>;

    return listview;
  }
}
