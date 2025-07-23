import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Contact from './containers/contact';
import About from './containers/about';
import Skills from './containers/skills';
import Navbar from './components/navbar';

// 🔁 NEW COMPONENT for scrolling terminal background
import CrtBackground from './utils.js/CrtBackground';

function App() {
  const location = useLocation();
  const renderCrtInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* Background */}
      {renderCrtInHomePage && <CrtBackground />}
      {renderCrtInHomePage && <div className="crt-overlay" />}

      <Navbar />

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
export default App;
