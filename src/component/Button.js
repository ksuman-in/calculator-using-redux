import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Button.scss';

class Button extends Component {

  shouldComponentUpdate(prevProps) {
    return prevProps.className !== this.props.className;
  }

  isActive = () => {
    const regex = new RegExp(/active/, 'gi');

    return this.props.className.match(regex) !== null;
  }
  onClick = evt => {
    evt.preventDefault();
    evt.currentTarget.blur();
    this.props.onClick(this.props.id);
  }
  render() {
    return (
      <button 
          ref={(button) => { this.btn = button; }} 
          type='button' 
          onClick={this.onClick} 
          className={this.props.className}>
          {this.props.label}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  className: PropTypes.string
};

export default Button;