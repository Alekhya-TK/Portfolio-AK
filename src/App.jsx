import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">ATK</h1>
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/Alekhya_Kondaveeti_CV.pdf" download>Download CV</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Hi, I'm <span className="highlight">Alekhya Kondaveeti</span></h2>
        <p className="subtitle">Software Developer | AI Enthusiast | Cloud and IoT Innovator</p>
        <p className="description">
          I love exploring AI, connecting devices, and building tech that makes a real impact.
        </p>
        <a href="#projects" className="btn">View Featured Projects</a>
        <div className="image-placeholder">Image placeholder</div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
  <h2>Projects</h2>
  <div className="projects-grid">

    <div className="project-card">
      <h3>Smart Vineyard – Kumeu River Wines</h3>
      <p>
        IoT-based vineyard monitoring system using LoRaWAN, TTN, and an Intel NUC to predict frost events.
        Designed and deployed Arduino sensor nodes, built a React Native app, and implemented an LSTM model
        for real-time frost prediction and alerts.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>MNNN Full-Stack Website</h3>
      <p>
        Full-stack web app built using MongoDB, NestJS, Next.js, and Node.js.
        Implemented REST APIs, authentication, and data management.
        Practiced Agile and mob programming as SCRUM Master to deliver a collaborative, data-driven website.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Dungeon Delver Game</h3>
      <p>
        A 2D adventure game developed in Unity with C#. Served as SCRUM Master and developer,
        managing sprints, version control, and implementing core combat mechanics and UI logic.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Ant Colony Optimization & Genetic Algorithm (TSP)</h3>
      <p>
        Solved the Travelling Salesman Problem using ACO and GA heuristics in Python.
        Compared pheromone evaporation rates and mutation strategies for optimized route efficiency.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Convolutional Neural Network for Digit Classification</h3>
      <p>
        Built and optimized a CNN to classify blurred handwritten digits.
        Tuned hyperparameters to improve accuracy and performance under different dataset conditions.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Bank Marketing Campaign Prediction</h3>
      <p>
        Developed predictive models using KNN and Naïve Bayes on bank marketing datasets.
        Applied feature selection and evaluation metrics to improve model accuracy.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Text Classification using NLP</h3>
      <p>
        Implemented models on Reddit Depression and Fake/Real News datasets using Scikit-learn and NLTK.
        Applied Naïve Bayes, Neural Networks, and SVMs with preprocessing and tuning.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Noise Reduction Program</h3>
      <p>
        Java-based image processing tool applying a median filter to clean salt-and-pepper noise.
        Optimized performance using a quicksort-based median calculation.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Virus Transmission Simulation</h3>
      <p>
        Simulated virus spread across mobile devices using multithreading in Java.
        Implemented synchronized methods to manage concurrency and infection tracking.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

    <div className="project-card">
      <h3>Maze Pathfinding Visualizer</h3>
      <p>
        Created a Java GUI to solve maze structures from text files.
        Animated solution paths for interactive visualization of pathfinding algorithms.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>

  </div>
</section>



      {/* About Section */}
      <section id="about" className="section">
        <h2>About</h2>
        <p>Placeholder for About - will replace this later with my actual About content!</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>Placeholder for Skills and Tech Stack! will replace later!</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Placeholder for contact form / links - will replace later with actual info!</p>
      </section>

      <footer>
        <p>© 2025 Alekhya Kondaveeti</p>
      </footer>
    </div>
  );
}

export default App;
