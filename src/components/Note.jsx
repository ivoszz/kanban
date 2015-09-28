import React, {Component} from 'react';

export default class Note extends Component {

  render () {
    return (
      <li {...this.props}>{this.props.children}</li>
    );
  }
}
