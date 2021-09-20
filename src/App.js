import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/Contact';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [nav] = useState([
    'About Me', 'Projects', 'Contact', 'Resume'
  ])
  const [currentNav, setCurrentNav] = useState(nav[0]);

  //set up switch case for different nav tab
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
      <Header
        nav={nav}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
      />
      <main>
        {navRender()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
