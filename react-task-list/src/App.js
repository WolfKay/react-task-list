import React, { Component } from 'react';

import './App.css';

import List from "./components/List.js"

const newTasks = [
  {
    className: "task1",
    date: "25/03/2018",
    toDo: "Take dog to vet",
    x: "x"
  },
  {
    className: "task2",
    date: "14/05/2018",
    toDo: "Jake's B-day",
    x: "x"
  }
];

class App extends Component {
  render() {
    return (
      <div className="container">
        <List data={newTasks}/>
      </div>
    )
  }
}
export default App;
