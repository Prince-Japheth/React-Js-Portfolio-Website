import React from 'react';
import '../App.css';
import iconDev from '../img/icon-dev.svg';
import iconDes from '../img/icon-design.svg';
import UI from '../img/icon-app.svg';
import iconBeizer from '../img/icon-photo.svg';

const About = () => {
    const renderServiceBox = (icon, title, description) => {
        return (
            <div className="boxBorder" style={styles.boxBorder}>
                <div className="innerBox" style={styles.innerBox2}>
                    <div className="icon">
                        <img src={icon} alt="" style={styles.img} />
                    </div>
                    <div>
                        <h3 className="h3">{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container">
            <h1 className='h1'>About Me...</h1>
            <hr className='hr' />

            <p>I'm Japheth – An upcoming Cybersecurity Personel & Software Engineer.
                <br /><br />
                My job is to create cutting-edge applications that bring innovative solutions to life. My expertise extends to the realms of Web Design and Development, where I craft captivating online experiences, UI/UX Design, where I focus on user-centric interfaces, and Graphic Design, where I infuse creativity and aesthetics into every project.
            </p>

            <br />

            <div className="boxBorder" style={styles.boxBorder}>
                <div className="innerBox" style={styles.innerBox}>
                    <i style={styles.i} className="fa fa-cloud-download"></i> Download CV
                </div>
            </div>

            <br /><br />
            <h1 className='h2'>What I Do</h1>
            <br />

            <div className="services" style={styles.services}>
                {renderServiceBox(iconDes, "Web Design", "Cutting-edge, professional web design tailored to your needs.")}
                {renderServiceBox(iconDev, "Web Development", "Cutting-edge, professional web development tailored to your needs.")}
                {renderServiceBox(UI, "UI/UX Design", "Expertly crafted UI/UX designs for seamless mobile and desktop applications.")}
                {renderServiceBox(iconBeizer, "Graphic Design", "Professionally designed logos, flyers, and graphics to elevate your brand.")}
            </div>
        </div>
    );
};

const styles = {
    boxBorder: {
        cursor: 'pointer',
        marginBottom: '25px',
    },
    i: {
        marginRight: '10px',
    },
    innerBox: {
        background: 'linear-gradient(to bottom right, #232325, #202022)',
    },
    services: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '7px',
    },
    innerBox2: {
        gap: '20px',
        padding: '35px',
        width: '322px',
        height: '90px',
        color: 'white',
    },
    img: {
        marginBottom: '20px',
    },
};

export default About;
