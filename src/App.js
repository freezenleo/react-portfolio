import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/Contact';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [nav] = useState([
    'About Me', 'Projects', 'Contact', 'Resume'
  ])
  const [currentNav, setCurrentNav] = useState(nav[0]);

  const navRender = () => {
    switch (currentNav) {
      case 'About':
        return <About />;

      case 'Projects':
        return <Project />;

      case 'Contact':
        return <ContactForm />;

      case 'Resume':
        return <Resume />;

      default:
        return <About />;

    }
  }
  return (
    <div>
      <Nav
        nav={nav}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      ></Nav>
      <main>
        {navRender()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
