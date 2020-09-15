import React, {Component} from 'react';

import './App.css';

import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 29},
      { name: "Bao", age: 49},
      { name: "Kai", age: 18},
    ]
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 29},
        { name: "Baoz", age: 49},
        { name: "Kaiu", age: 18},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserOutput name= {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <UserInput onChange={this.changeNameHandler} currentName={this.state.persons[0].name}/>
        <UserOutput name= "Henry" age = "21" />
        <UserInput />
        <UserOutput name= "Jay" age = "35" />
        <UserInput />
      </div>
    );
  }
}

export default App;
