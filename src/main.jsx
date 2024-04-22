import React from 'react'
import ReactDOM from 'react-dom/client'

import Todolist from './components/Todolist.jsx';
import Quizapp from './components/Quizapp.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Quizapp />
  </React.StrictMode>,
)
