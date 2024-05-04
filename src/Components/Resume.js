import React from 'react';
import '../App.css';

const Resume = () => {
  return (
    <div className="container">
      <h1 className='h1'>Resume</h1>
      <hr className='hr' />

      <article className="resume" data-page="resume">

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Lincoln College of Science, Mangement & Technology</h4>
              <p className="timeline-text">Computer Software Engineering & Cybersecurity</p>
              <span>2023 — Present</span>

            </li>

          </ol>

        </section>

        <section className="timeline">

          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">Website Developer</h4>
              <p className="timeline-text">Safekan</p>

              <span>2023 — 2024</span>

              <p className="timeline-text">
                Designed website layouts and user interfaces according to
                client specifications.
                <br />
                Conducted usability tests on new features Of the website to
                ensure quality assurance standards are met
                <br />
                Developed and maintained the Brand Official Website using
                HTML CSS, Bootstrap and JavaScript.
                <br />
                Analyzed user feedback to identify areas of improvement
                within existing designs or new feature requests.
              </p>

            </li>

            <li className="timeline-item">

              <h4 className="h4 timeline-item-title">UI/UX Designer, Graphic Designer</h4>
              <p className="timeline-text">XTM-Launch</p>

              <span>2023 — Present</span>

              <p className="timeline-text">
                Designed intuitive and visually appealing user interfaces for various digital platforms, such as websites, web applications, and mobile apps.
                <br />
                Ensuring a seamless and enjoyable user experience by crafting user flows, wireframes, and prototypes that prioritize usability and accessibility.
                <br />
                Designed logos, icons. infographics, and other visual elements for online presence.
                <br />
                Researched new trends in graphic design software technologies and techniques.
              </p>

            </li>

          </ol>

        </section>

      </article>



      <br />
      <h2 className="h2">My Skills</h2>

      <div className="boxBorder" style={styles.boxBorder}>
        <section className="skill" style={styles.skill}>

          <ul className="skills-list content-card">

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">HTML</h5>
                <data value="100">100%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">CSS</h5>
                <data value="100">100%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Bootstrap</h5>
                <data value="100">100%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">JavaScript</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>


            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">ReactJs</h5>
                <data value="95">95%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">PHP</h5>
                <data value="85">85%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">CorelDRAW Graphic Suites</h5>
                <data value="100">100%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Adobe Graphic Suites</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Microsoft Office Suite</h5>
                <data value="100">100%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Figma</h5>
                <data value="100">100%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

            <li className="skills-item">

              <div className="title-wrapper">
                <h5 className="h5">Canva</h5>
                <data value="100">100%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill"></div>
              </div>

            </li>

          </ul>

        </section>
      </div>
    </div>
  );
};

const styles = {
  boxBorder: {
    width: '100%',
    margin: '30px 0',
    paddingTop: '2px',
  },
  skill: {
    width: '100%',
    backgroundColor: '#1e1e1f',
    borderRadius: '15px',
  },
}

export default Resume;
