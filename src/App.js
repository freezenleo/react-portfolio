import React from 'react';
import './App.css';
import ContactForm from './components/Contact';
import './App.css';
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Nav></Nav>
      <main>
        <Project></Project>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
