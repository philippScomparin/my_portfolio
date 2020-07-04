import React from 'react';
import './App.css';
import Introduction from './Components/Introduction'
import Philosophy from './Components/Philosophy'

function App() {
  return (
    <div className="wrapper">
      <Introduction />
      <hr/>
      <Philosophy />
    </div>
  );
}

export default App;
