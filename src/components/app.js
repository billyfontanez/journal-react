import React, { Component } from 'react';
import JournalList from './journals/journalList';
import { JournalEntry } from './journals/journalEntry';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React Props & State</h1>
        <JournalList heading = 'List 1'/>
      </div>
    );
  }
}