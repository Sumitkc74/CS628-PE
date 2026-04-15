import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Divakar Reddy Ravi</h1>
        <p>
          +1 (425) 678 5911 &nbsp;|&nbsp; divakarreddyravi@gmail.com &nbsp;|&nbsp;
          <a href="https://www.linkedin.com/in/divakarreddyravi/">
            linkedin.com/in/divakarreddyravi/
          </a>
        </p>
      </header>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">

          <h3>Detection Of Glaucoma</h3>
          <p>Developed an end-to-end diagnostic system for glaucoma detection using fundus images from DRISHTI-GS and RIM-ONE datasets. Applied preprocessing (normalization, resizing, denoising, augmentation) and performed EDA to analyze class imbalance and image quality. Built two models: (1) a classical ML pipeline using handcrafted optic disc/cup features (CDR, geometric & texture features) with Logistic Regression, KNN, Random Forest, SVM, and Ensemble, and (2) a deep learning classifier using transfer learning (ResNet50, VGG16). Conducted extensive hyperparameter tuning and evaluation using accuracy, sensitivity, specificity, and ROC-AUC. The fine-tuned ResNet50 achieved the best diagnostic performance</p>
          <p>Utilized: Flutter, Laravel, REST API, MySQL</p>

        </div>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="skills">
          <ul>
            <li><strong>Languages:</strong> Python, Java, SQL, C</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <div className="education">

          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle &nbsp;|&nbsp; Jan 2025 - Current</p>
          <p>GPA: 4.0/4.0</p>

          <h3>Bachelor of Computer Science and Technology</h3>
          <p>Anurag University &nbsp;|&nbsp; 2020 - 2023</p>
          <p>CGPA: 3.8/4.0</p>

        </div>
      </section>
    </div>
  );
};

export default Resume;