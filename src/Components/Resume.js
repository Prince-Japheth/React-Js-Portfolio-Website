import React from 'react';
import '../App.css';

const TimelineItem = ({ title, subTitle, date }) => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title">{title}</h4>
    <p className="timeline-text">{subTitle}</p>
    <span>{date}</span>
  </li>
);

const ExperienceItem = ({ title, company, date, description }) => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title">{title}</h4>
    <p className="timeline-text">{company}</p>
    <span>{date}</span>
    <ul className="timeline-text">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </li>
);


const SkillList = () => (
  <div className="boxBorder" style={styles.boxBorder}>
    <section className="skill" style={styles.skill}>
      <ul className="skills-list content-card">
        {Skills.map((skill, index) => (
          <li className="skills-item" key={index}>
            <div className="title-wrapper">
              <h5 className="h5">{skill.name}</h5>
              <data value={skill.value}>{skill.value}%</data>
            </div>
            <div className="skill-progress-bg">
              <div className="skill-progress-fill"></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

const Skills = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 100 },
  { name: 'Bootstrap', value: 100 },
  { name: 'JavaScript', value: 90 },
  { name: 'ReactJs', value: 95 },
  { name: 'PHP', value: 85 },
  { name: 'CorelDRAW Graphic Suites', value: 100 },
  { name: 'Adobe Graphic Suites', value: 80 },
  { name: 'Microsoft Office Suite', value: 100 },
  { name: 'Figma', value: 100 },
  { name: 'Canva', value: 100 },
];

const Resume = () => (
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
          <TimelineItem
            title="Lincoln College of Science, Management & Technology"
            subTitle="Computer Software Engineering & Cybersecurity"
            date="2023 — Present"
          />
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
          <ExperienceItem
            title="Website Developer"
            company="Safekan"
            date="2023 — 2024"
            description={[
              "Designed website layouts and user interfaces according to client specifications.",
              "Conducted usability tests on new features of the website to ensure quality assurance standards are met.",
              "Developed and maintained the Brand Official Website using HTML, CSS, Bootstrap, and JavaScript.",
              "Analyzed user feedback to identify areas of improvement within existing designs or new feature requests."
            ]}
          />
          <ExperienceItem
            title="UI/UX Designer, Graphic Designer"
            company="XTM-Launch"
            date="2023 — Present"
            description={[
              "Designed intuitive and visually appealing user interfaces for various digital platforms, such as websites, web applications, and mobile apps.",
              "Ensured a seamless and enjoyable user experience by crafting user flows, wireframes, and prototypes that prioritize usability and accessibility.",
              "Designed logos, icons, infographics, and other visual elements for online presence.",
              "Researched new trends in graphic design software technologies and techniques."
            ]}
          />
        </ol>
      </section>
    </article>

    <br />
    <h2 className="h2">My Skills</h2>

    <SkillList />
  </div>
);

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
};

export default Resume;
