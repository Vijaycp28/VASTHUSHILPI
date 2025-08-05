import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
