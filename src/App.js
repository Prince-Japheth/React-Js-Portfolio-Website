import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="App" style={styles.app}>
        <Sidebar />
        <div className="wrapper" style={styles.wrapper}>
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  app: {
    fontFamily: 'Poppins, sans-serif',
    background: '#111111',
    color: 'white',
    padding: '60px 140px',
    display: 'flex',
    gap: '27px',
  },
  wrapper: {
    textAlign: 'center',
    borderRadius: '20px',
    border: '1px solid #383838',
    overflow: 'hidden', 
    background: '#1e1e1f',
    width: '900px',
  },
};

export default App;
