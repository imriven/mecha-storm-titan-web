import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Projects from './pages/Projects';
import MediaHub from './pages/MediaHub';
import Contact from './pages/Contact';
import Partners from './pages/Partners';
import Store from './pages/Store';
import SocialIcons from './components/SocialIcons';

function App() {
  return (
    <Router>
      <NavBar />
      <SocialIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/mediahub" element={<MediaHub />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
