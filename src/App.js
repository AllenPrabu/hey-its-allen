import './App.scss';
// NEW: Make sure useLocation is imported
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
// NEW: Make sure AnimatePresence is imported
import { AnimatePresence } from 'framer-motion';

// Your Page Components
import Home from './containers/home';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Contact from './containers/contact';
import About from './containers/about';
import Skills from './containers/skills';

import Navbar from './components/navbar';
import CrtBackground from './utils.js/CrtBackground';

function App() {
  const navigate = useNavigate();
  // NEW: We must get the location object from the router
  const location = useLocation();

  const handleChangePage = (path) => {
    navigate(path);
  };

  const renderCrtBackground = true;

  return (
    <div className="App">
      {renderCrtBackground && <CrtBackground />}
      {renderCrtBackground && <div className="crt-overlay" />}

      <div className="App__main-page-content">
        {/* AnimatePresence needs to wrap your Routes */}
        {/* NEW: Added mode="wait" to help coordinate the animations */}
        <AnimatePresence mode="wait">
          {/* CRITICAL: These two props are required for the animation to work */}
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/skills' element={<Skills />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Navbar onNavigate={handleChangePage} />
    </div>
  );
}

export default App;
