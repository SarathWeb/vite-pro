import React from 'react'
import ReactDOM from 'react-dom/client'

// import Todolist from './components/Todolist.jsx';
// import Quizapp from './components/Quizapp.jsx';
// import Lyricsfinder from './components/Lyricsfinder.jsx';
// import Qrcode from './components/Qrcode.jsx';
// import Moviesearch from './components/Moviesearch'
// import Dictionaryapp from './components/Dictionaryapp'
import { Currencyapp } from './components/Currencyapp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       {/* <Quizapp /> */}
       {/* <Lyricsfinder /> */}
       {/* <Qrcode /> */}
        {/* <Moviesearch /> */}
         {/* <Dictionaryapp /> */}
         <Currencyapp />
         
  </React.StrictMode>,
)
