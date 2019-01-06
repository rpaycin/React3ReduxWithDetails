import React, { Component } from 'react';
import Person from './Containers/Person';
import Relation from './Containers/Relation';

class App extends Component {
  render() {
    return (
      <div>
        <Person/>
        
        <Relation/>
      </div>
    );
  }
}

export default App;
