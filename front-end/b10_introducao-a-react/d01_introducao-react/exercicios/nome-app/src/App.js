import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const taskList = ['wake up', 'have a breakfast', 'work'];

class App extends React.Component {
  render() {
    return (
      <ul>{ taskList.map((tarefa) => Task(tarefa)) }</ul>
    )
  }
}

export default App;
