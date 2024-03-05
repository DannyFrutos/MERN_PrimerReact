import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../componentes/App.jsx'
import TodoList from "../componentes/TodoList";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TodoList />
  </React.StrictMode>,
)
