import React, { Component } from 'react';
import SearchBar from './SearchBar';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div> 
        {SearchBar()}
      </div>
    );
  }
}
