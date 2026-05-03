import './App.css';
import { Navbar } from './Navbar.js';
import { Hero } from './Hero.js';
import { About } from './About.js';
import { Projects } from './Projects.js';
import { Skills } from './Skills.js';
import { Contact } from './Contact.js';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;


