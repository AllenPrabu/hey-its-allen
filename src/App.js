import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from "react-tsparticles";
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Contact from './containers/contact';
import About from './containers/about';
import Skills from './containers/skills';
import Navbar from './components/navbar';
import particles from './utils.js/particles';


function App() {

  const location = useLocation();
  console.log(location);

  const renderparticleJsInHomePage = location.pathname === "/";

  const handleInit = async (main) => {
    await loadFull(main)
  }
  return (
    <div className="App">
      {/* particles js */}

      {
        renderparticleJsInHomePage &&
        <Particles id="particles" options={particles} init={handleInit} />

      }

      {/* navbar */}
      <Navbar />

      {/* Mainpage content */}
      <div className='App__main-page-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>


    </div>
  );
}
console.log("App loaded");
export default App