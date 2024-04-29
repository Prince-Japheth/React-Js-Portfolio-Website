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

    </div>
  );
};


export default Resume;
