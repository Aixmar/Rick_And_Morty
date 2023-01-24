import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
)

// Ese document.getElementById es dónde va a ir a aplicar todo esto, es el nuestro div que tiene id root.
// Después del </BrowserRouter> va una "," porque es como si todo eso fuese un elemento que envuelve la App.