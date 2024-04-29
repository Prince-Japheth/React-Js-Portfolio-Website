import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Testimonials from './Components/Testimonials';
import Form from './Components/Form';
import myAvatar from './img/my-avatar.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.linksUl}>
          <li><Link to="/hero" style={styles.linksA}>Home</Link></li>
          <li><Link to="/about" style={styles.linksA}>About</Link></li>
          <li><Link to="/gallery" style={styles.linksA}>Gallery</Link></li>
          <li><Link to="/testimonials" style={styles.linksA}>Testimonials</Link></li>
          <li><Link to="/form" style={styles.linksA}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const Sidebar = () => {
  const sidebarRef = useRef(null);

  return (
    <div ref={sidebarRef} className="sidebar" style={styles.sidebar}>
      <img style={styles.sideImg} src={myAvatar} alt="" />
      <p style={styles.name}>Japheth Jerry</p>
      <p style={styles.title}>Upcoming Cybersecurity Personnel</p>
      <p style={styles.title}>Computer Software Engineer</p>

      <hr style={styles.hr} />

      <div>
        {renderSideInfo("far fa-envelope", "EMAIL", "princejaphethjj@gmail.com")}
        {renderSideInfo("fa fa-mobile-alt", "PHONE", "08032115757")}
        {renderSideInfo("far fa-calendar", "BIRTHDAY", "22nd August")}
        {renderSideInfo("fas fa-map-marker-alt", "LOCATION", "FCT Abuja, Nigeria")}
      </div>

      <div style={styles.socialLinks}>
        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i style={styles.socialLink} className="fab fa-twitter"></i>
        </Link>
        <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i style={styles.socialLink} className="fab fa-linkedin"></i>
        </Link>
        <Link to="https://github.com" target="_blank" rel="noopener noreferrer">
          <i style={styles.socialLink} className="fab fa-github"></i>
        </Link>
      </div>
    </div>
  );
};

const renderSideInfo = (iconClass, label, value) => {
  return (
    <div className="sideInfo" style={styles.sideInfo}>
      <div style={styles.boxBorder}>
        <div style={styles.iconBox}>
          <i className={iconClass}></i>
        </div>
      </div>
      <div className="sideInfoTxt" style={styles.sideInfoTxt}>
        <span style={styles.light}>{label}</span>
        <p>{value}</p>
      </div>
    </div>
  );
};

function App() {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarRef.current) {
        const sidebarBottom = sidebarRef.current.offsetTop + sidebarRef.current.clientHeight;
        const windowBottom = window.scrollY + window.innerHeight;

        if (windowBottom >= sidebarBottom) {
          sidebarRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App" style={styles.app}>
        <Sidebar />
        <div className="wrapper" style={styles.wrapper}>
          <Header />
          <Routes>
            <Route index element={<Hero />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}