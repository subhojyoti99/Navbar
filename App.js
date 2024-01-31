import './App.css';
import {Routes, Route} from 'react-router-dom';
import Particles from "react-tsparticles";
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Resume from './pages/resume/Resume.jsx';
import Skills from './pages/skills/Skills.jsx';
import Portfolio from './pages/portfolio/Portfolio.jsx';
import Contact from './pages/contact/Contact.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import { loadFull } from 'tsparticles';

function App() {

  const handleInit= async(main)=>{
    await loadFull(main)
  }
  return (
    <div className="App">
      {/* particles js */}
<Particles id="particles" init={handleInit} />
<Navbar />
      {/* navbar */}
      
      {/* main page content */}

    <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </div>
  );
}

export default App;
