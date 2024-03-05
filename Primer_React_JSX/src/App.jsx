// En App.jsx

import React from 'react';
import './App.css';
import TodoList from "../componentes/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <TodoList />
    </div>
  );
}

export default App;
