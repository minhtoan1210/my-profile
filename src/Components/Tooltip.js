import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../index.css'
export default class Tooltip extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='tooltip'>
        <div className='tooltip-content top' style={{fontSize: "20px"}}>
            {this.props.content}
        </div>
        {this.props.children}
      </div>
    );
  }
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired
};
