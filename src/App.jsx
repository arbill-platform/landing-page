import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Contact from './pages/Contact.jsx';
import Terms from './pages/Terms.jsx';
import { navigationItems } from './content.js';

function App() {
  return (
    <BrowserRouter>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Navbar items={navigationItems} />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
