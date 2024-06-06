import React from 'react';
import './App.css';
import ListTask from "./Components/ListTask/ListTask";
import AddTask from "./Components/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
