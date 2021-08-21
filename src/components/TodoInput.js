import React from 'react';
import PropTypes from 'prop-types';

export default class TodoInput extends React.PureComponent {
  render() {
    const { onChange, value, onKeyPress } = this.props;
    return (
      <input
        type="text"
        placeholder="What needs to be done"
        onChange={onChange}
        value={value}
        onKeyPress={onKeyPress}
      />
    );
  }
}

TodoInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
};
