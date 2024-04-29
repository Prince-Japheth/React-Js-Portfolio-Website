import React from 'react'
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.css';
import myAvatar from '../img/my-avatar.png';

const Sidebar = () => {
  const renderSideInfo = (iconClass, label, value) => {
    return (
      <div className="sideInfo" style={styles.sideInfo}>
        <div style={styles.boxBorder} className='boxBorder'>
          <div style={styles.innerBox} className='innerBox'>
            <i className={iconClass}></i>
          </div>
        </div>
        <div className="sideInfoTxt" style={styles.sideInfoTxt}>
          <span className='light' style={styles.light}>{label}</span>
          <p style={styles.value}>{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="sidebar" style={styles.sidebar}>
      <img style={styles.sideImg} src={myAvatar} alt="" />
      <p style={styles.name}>Japheth Jerry</p>
      <p style={styles.title}>Upcoming Cybersecurity Personnel</p>
      <p style={styles.title}>Computer Software Engineer</p>

      <hr className='divider' />

      <div>
        {renderSideInfo("far fa-envelope", "EMAIL", "princejaphethjj@g...")}
        {renderSideInfo("fa fa-mobile-alt", "PHONE", "08032115757")}
        {renderSideInfo("far fa-calendar", "BIRTHDAY", "22nd August")}
        {renderSideInfo("fas fa-map-marker-alt", "LOCATION", "FCT Abuja, Nigeria")}
      </div>

      <div style={styles.socialLinks}>
        <i style={styles.socialLink} className="fab fa-twitter"></i>
        <i style={styles.socialLink} className="fab fa-linkedin"></i>
        <i style={styles.socialLink} className="fab fa-github"></i>
      </div>
    </div>
  );
};


const styles = {

  sidebar: {
    background: '#1e1e1f',
    borderRadius: '20px',
    border: '1px solid #383838',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
    width: '246px',
    height: 'fit-content',
  },
  sideImg: {
    width: '150px',
    background: 'linear-gradient(to bottom right, #3e3e3f, #323232',
    borderRadius: '30px',
  },
  name: {
    fontSize: '25px',
    fontWeight: '520',
    color: '#f5f5f5',
    marginTop: '25px',
    marginBottom: '10px',
  },
  title: {
    background: '#2b2b2c',
    padding: '6px 9px',
    borderRadius: '8px',
    margin: '5px 0px',
    fontSize: '12px',
    color: 'white',
    textAlign: 'center'
  },
  sideInfo: {
    display: 'flex',
    gap: '10px',
    fontWeight: '500',
    marginBottom: '30px',
    width: '230px',
  },
  sideInfoTxt: {
    color: 'white',
    fontSize: '13px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2px',
  },
  light: {
    color: 'hsla(0, 0%, 84%, 0.7)',
  },
  value: {
    color: 'white',
  },
  socialLinks: {
    width: '35%',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '17px',
    color: 'lightgray',
  },
  socialLink: {
    color: 'lightgray',
  },
}

export default Sidebar