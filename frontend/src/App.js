import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { initParticles } from './particles-config';

// Sample digital art data
const artworks = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1637140945341-f28ada987326',
    title: 'Digital Metamorphosis',
    description: 'A striking exploration of digital transformation through the lens of human form, showcasing the fluid boundary between reality and digital art.'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1612623753207-96465febeee7',
    title: 'Flow State',
    description: 'Abstract representation of movement and energy, capturing the essential flow of creative consciousness in digital medium.'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1504418682362-6ad6257cb2fb',
    title: 'Luminous Descent',
    description: 'An exploration of light and shadow in minimalist composition, representing the journey of creative illumination.'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/7598668/pexels-photo-7598668.jpeg',
    title: 'Textural Depth',
    description: 'A study in digital texture and depth, exploring the tactile qualities that can be achieved in abstract digital art.'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1642059893618-22daf30e92a2',
    title: 'Connection',
    description: 'A powerful visual metaphor for human connection and reaching across the digital divide in our modern world.'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1555448248-2571daf6344b',
    title: 'Chromatic Fusion',
    description: 'Bold exploration of color and form, pushing the boundaries of traditional composition in digital abstract art.'
  }
];

// Navigation Component
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <span className="brand-text">ARTIST</span>
        </NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Home Component
const Home = () => {
  useEffect(() => {
    // Initialize particles on component mount
    const timer = setTimeout(() => {
      initParticles();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-container">
      <div id="particles-js" className="particles-container"></div>
      <div className="hero-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h1 className="hero-title">Digital Art Portfolio</h1>
              <p className="hero-subtitle">Exploring the intersection of technology and creativity</p>
              <NavLink to="/portfolio" className="btn btn-primary btn-lg cta-button">
                View My Work
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="about-content">
              <h1 className="page-title">About Me</h1>
              <div className="about-text">
                <p className="lead">
                  I am a digital artist passionate about creating immersive visual experiences 
                  that challenge the boundaries between technology and human expression.
                </p>
                <p>
                  My work explores themes of transformation, connection, and the evolving 
                  relationship between humanity and digital spaces. Through abstract 
                  compositions and minimalist aesthetics, I seek to capture moments of 
                  beauty in our increasingly connected world.
                </p>
                <p>
                  Each piece is crafted with intention, using digital tools to create 
                  artworks that resonate on both emotional and intellectual levels. 
                  My minimalist approach emphasizes the power of simplicity while 
                  maintaining depth and complexity in conceptual execution.
                </p>
                <div className="skills-section">
                  <h3>Specializations</h3>
                  <ul className="skills-list">
                    <li>Abstract Digital Art</li>
                    <li>Minimalist Composition</li>
                    <li>Conceptual Design</li>
                    <li>Mixed Media Digital</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Portfolio Component
const Portfolio = () => {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  const handleArtworkClick = (artwork) => {
    setSelectedArtwork(artwork);
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1 className="page-title text-center">Portfolio</h1>
        <div className="row">
          <div className="col-lg-8">
            <div className="portfolio-grid">
              {artworks.map((artwork) => (
                <div 
                  key={artwork.id} 
                  className="portfolio-item"
                  onClick={() => handleArtworkClick(artwork)}
                >
                  <img 
                    src={artwork.src} 
                    alt={artwork.title}
                    className="portfolio-image"
                  />
                  <div className="portfolio-overlay">
                    <span>Click to view details</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="artwork-details">
              {selectedArtwork ? (
                <div className="details-card">
                  <h3>{selectedArtwork.title}</h3>
                  <p>{selectedArtwork.description}</p>
                  <button 
                    className="btn btn-outline-light btn-sm"
                    onClick={() => setSelectedArtwork(null)}
                  >
                    Close Details
                  </button>
                </div>
              ) : (
                <div className="details-placeholder">
                  <p>Click on any artwork to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="page-title text-center">Contact</h1>
            
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                <a href="#" className="social-link">
                  <i className="fab fa-instagram"></i>
                  Instagram
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                  Twitter
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-behance"></i>
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;