import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name:"Peter", age: 28 },
      {name: "Zed", age: 21},
      {name: "George", age: 35}
    ]
  });
  
  const [otherState, setOtherState] = useState('hi');  

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 28 },
        {name: "Zed", age: 21},
        {name: "George", age: 30}
      ]
    });
  }

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
        {name: "Peter", age: 28 },
        {name: event.target.value, age: 21},
        {name: "George", age: 30}
      ]
    });
  }

  const style = {
    backgroundColor: 'red',
    borderColor: 'blue',
  }

    return(
      <div className="App">
        <h1>Hi</h1>
        <button style={style} onClick={switchNameHandler.bind(this,"Dat")}>Switch name</button>
        <Person 
          click= {switchNameHandler.bind(this,"Dat123")} 
          name = {personsState.persons[0].name} 
          age = {personsState.persons[0].age} />
        <Person
          change = {nameChangeHandler} 
          name ={personsState.persons[1].name} 
          age = {personsState.persons[1].age} >My hobbies: piano
        </Person>
        <Person 
          name = {personsState.persons[2].name} 
          age = {personsState.persons[2].age} />
      </div>
    );
}

export default App;
