import './App.css';
import { Navbar } from './Navbar.js';
import { Hero } from './Hero.js';
import { About } from './About.js';
import { Projects } from './Projects.js';
import { Skills } from './Skills.js';
import { Contact } from './Contact.js';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;


