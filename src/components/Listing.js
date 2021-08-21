import React from 'react';
import PropTypes from 'prop-types';

export default class Listing extends React.Component {
  render() {
    const { todos, toggleStates, deleteTodo } = this.props;
    const listview = todos.length ? (
      <ul>
        {todos.map((x) => (
          <li key={x.id}>
            <input type="checkbox" checked={x.isComplete} onChange={() => toggleStates(x.id)} />
            {x.text}
            <button type="button" onClick={() => deleteTodo(x.id)}>X</button>
          </li>
        ))}
      </ul>
    )
      : <></>;

    return listview;
  }
}

Listing.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.any).isRequired,
  toggleStates: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
