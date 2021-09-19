import React from 'react';
import './App.css';
import ContactForm from './components/Contact';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About />
        <Project></Project>
        <ContactForm></ContactForm>
        <Resume />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
