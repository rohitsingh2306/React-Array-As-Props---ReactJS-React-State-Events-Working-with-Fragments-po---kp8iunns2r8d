import React from 'react'
import '../styles/App.css';

const arr = JSON.parse(window.localStorage.getItem('props') || `["hello","world"]`) // do not change
const Join = ({arr}) =>{
  
  return(
    <div id ="join">
      {/* Access prop 'words' and print it using .join like words.join(',')*/}
      <h1>{arr.join(",")}</h1>
    </div>
  )
}
const App = () => {

  return (
    <div id="main">
      <Join arr={arr} />
    </div>
  )
}


export default App;
