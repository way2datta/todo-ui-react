import React from 'react';

export class TodoInput extends React.Component {
  render() {
    const { onChange, value, onKeyPress } = this.props;
    return <input type="text" placeholder="What needs to be done" onChange={onChange}
      value={value} onKeyPress={onKeyPress} />;
  }
}
