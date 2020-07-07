import React from 'react';
import './App.css';
import Introduction from './Components/Introduction'
import Philosophy from './Components/Philosophy'
import Skills from './Components/Skills'
import Timeline from './Components/Timeline'

function App() {
  return (
    <div className="wrapper">
      <Introduction/>
      <hr/>
      <Philosophy/>
      <hr/>
      <Skills/>
      <hr/>
      <Timeline />
    </div>
  );
}

export default App;
