import React from 'react';
import './cssFiles/App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';


function App() {
  return (
    <div>
    <Nav />
    <Home />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
