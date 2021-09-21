import React from 'react';
import './cssFiles/App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Nav';
import './cssFiles/Project.css';
import './cssFiles/contact.css';
import Aboutme from './components/Aboutme';
import './cssFiles/Aboutme.css';


function App() {
  return (
    <div>
    <Nav />
    <Home />
    <Projects />
    <Aboutme />
    <Contact />
    </div>
  );
}

export default App;
