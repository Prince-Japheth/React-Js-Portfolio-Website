import React from 'react'
import '../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Header = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <ul style={styles.linksUl}>
                    <li><Link to="/about" className='linksA' style={styles.linksA}>About</Link></li>
                    <li><Link to="/resume" className='linksA' style={styles.linksA}>Resume</Link></li>
                    <li><Link to="/contact" className='linksA' style={styles.linksA}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    nav: {
        display: 'inline-flex',
        alignItems: 'center',
        background: '#282829',
        borderBottomLeftRadius: '20px',
        borderTopRightRadius: '20px',
        border: '1px solid #383838',
        padding: '5px 15px',
    },
    linksUl: {
        display: 'flex',
        listStyle: 'none',
        margin: '0',
        padding: '0',
        gap: '10px',
    },
    linksA: {
        display: 'inline-block',
        padding: '0.9rem 1.2rem',
        color: 'white',
        fontSize: '0.9rem',
        textDecoration: 'none',
        fontFamily: 'Poppins, sans-serif',
    },
}

export default Header