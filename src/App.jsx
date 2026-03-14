import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
 import About from './components/About';
 import Education from './components/Education';
import Skill from './components/Skills';
import Experience from './components/Experience'
import Services from './components/Services';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/fontawsome/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
function App() {
  
  return (
    <>
      <Router>
        <Header />
        <Main />
        <About/>
        <Education/>
        <Skill />
        <Experience/>
        <Services/>
        <Projects />
        <Connect />
        <Footer />
      </Router>
     
    </>
  );
}

export default App;
