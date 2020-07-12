import React from 'react';
import './App.css';
import Introduction from './Components/Introduction'
import Philosophy from './Components/Philosophy'
import Skills from './Components/Skills'
import Timeline from './Components/Timeline'
import Projects from './Components/Projects'

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
      <hr/>
      <Projects />
    </div>
  );
}

export default App;
