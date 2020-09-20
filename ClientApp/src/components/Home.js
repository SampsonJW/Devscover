import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Jobs from './jobList/JobList';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <SearchBar />
        <Jobs />
      </div>
    );
  }
}
