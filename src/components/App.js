import React from 'react'
import '../styles/App.css';
const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = (hello) =>{
  return(
    <div id ="join">
      {/* Access prop 'words' and print it using .join like words.join(',')*/}
       words = arr ;
       words.join(',')
    </div>
  )
}
const App = () => {

  return (
    <div id="main">
      <Join hello={hello} />
    </div>
  )
}


export default App;
