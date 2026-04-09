import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Sumit K C</h1>
        <p>
          +1 (425) 545 4816 &nbsp;|&nbsp; sumitkc74@gmail.com &nbsp;|&nbsp;
          <a href="https://linkedin.com/in/sumit-kc-2444652a9">
            linkedin.com/in/sumit-kc-2444652a9
          </a>
        </p>
      </header>

      <section className="section">
        <h2>Experience</h2>
        <div className="experience">

          <h3>Teaching Assistant | City University of Seattle, Seattle, WA</h3>
          <p>Oct 2025 - Present</p>
          <ul>
            <li>Support 10+ courses across MSCS, MSDS, and IT programs serving 100+ students per quarter, managing content delivery and student engagement across multiple learning platforms.</li>
            <li>Upgraded and restructured course materials for 8+ classes covering Python, R, ML algorithms, and AWS, reducing repeated student questions by improving documentation and lab instructions.</li>
            <li>Utilized: Python, R, AWS, ML algorithms (scikit-learn, TensorFlow), React, Git, Canvas, Microsoft Teams</li>
          </ul>

          <h3>WordPress Developer | Aankhijhyal Technologies, Pokhara, Nepal</h3>
          <p>Jun 2023 - Nov 2024</p>
          <ul>
            <li>Led frontend development for 10+ client websites, improving visual consistency and cutting design revision cycles by establishing reusable component patterns.</li>
            <li>Reduced page load time by ~40% by auditing plugins, eliminating redundant packages, and implementing caching strategies across multiple production sites.</li>
            <li>Integrated third-party APIs and server-side services into WordPress platforms, enabling seamless data flow and expanding site functionality for clients.</li>
            <li>Utilized: PHP, JavaScript, HTML, CSS, WordPress, REST API, Git</li>
          </ul>

          <h3>Junior WordPress Developer Intern | Aankhijhyal Technologies, Pokhara, Nepal</h3>
          <p>Sep 2022 - Nov 2022</p>
          <ul>
            <li>Contributed to 3 production WordPress deployments, building and customising themes and features to meet client specifications within tight timelines.</li>
            <li>Configured and managed web and email servers, streamlining deployment checklists that reduced environment setup time across the team.</li>
            <li>Utilized: PHP, HTML, CSS, WordPress, cPanel, Git</li>
          </ul>

        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">

          <h3>Learn to Drive - Driving Test Preparation Platform</h3>
          <p>Built a cross-platform mobile app consolidating test papers, quizzes, traffic symbols, and video lessons into a single platform to streamline driving test preparation.</p>
          <p>Designed a RESTful Laravel backend to handle user accounts, quiz scoring, and content delivery, paired with a Flutter frontend for a smooth, responsive user experience.</p>
          <p>Utilized: Flutter, Laravel, REST API, MySQL</p>

        </div>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="skills">
          <ul>
            <li><strong>Languages:</strong> Python, Java, C#, PHP, JavaScript, TypeScript, R, Dart, SQL</li>
            <li><strong>Frameworks:</strong> Flutter, Laravel, React, Node.js, Express</li>
            <li><strong>Data Science / ML:</strong> TensorFlow, scikit-learn, Pandas, NumPy, Matplotlib, Posit (RStudio)</li>
            <li><strong>Cloud / Tools:</strong> AWS (EC2, S3, Lambda), Docker, Git, REST API, HTML, CSS, MySQL, PostgreSQL, MongoDB, Agile, Scrum</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="education">

          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle &nbsp;|&nbsp; Jan 2025 - Current</p>
          <p>GPA: 4.0/4.0</p>

          <h3>Bachelor of Science in Computing</h3>
          <p>Informatics College Pokhara &nbsp;|&nbsp; Mar 2020 - Dec 2023</p>
          <p>Graduated top of the cohort; awarded Letter of Commendation</p>

        </div>
      </section>
    </div>
  );
};

export default Resume;