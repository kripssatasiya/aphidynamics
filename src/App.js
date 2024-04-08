import './App.css';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import React from 'react';
import Training from './components/Training';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import OurPortfolio from './components/OurPortfolio';
import SpaceBackground from './components/SpaceBackground'; // Import the SpaceBackground component
import Testimonials from './components/Testimonials';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
      <SpaceBackground />

      {/* 
    <header>
    <Navbar />
    </header>
    <main>
    <Home />
    <Services title ="Services" />
    <AboutUs title ="About Us" />
    <Training title ="Training" />
    <ContactUs  title ="Contact Us?" />
    <OurPortfolio  title ="OurPortfolio" />
    <Testimonials  title ="Testimonials." />
    </main>
    <footer>
      <Footer />
    </footer>
  */}

      <Router>
        <header>
        <Navbar />
        </header>
        <main>
        <Routes>
          <Route exact path="/"
            element={<Home />} />
          

          <Route exact path="/services"
            element={<Services title="Services" />} />
         

          <Route exact path="/about"
            element={<AboutUs title="About Us" />} /> 
          

          <Route exact path="/training"
            element={<Training title="Training" />} /> 
          

          <Route exact path="/contact"
            element={<ContactUs title="Contact Us?" />} /> 
          

          <Route exact path="/portfolio"
            element={<OurPortfolio title="OurPortfolio" />} /> 
          
        </Routes>
        </main>
        <Testimonials title="Testimonials." />

        <footer>
        <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
