// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import "./index.css";

function App() {
  return (
    <>
    <Navbar />

    <main>
      <Homepage />

      {/* Placeholder sections to add content later */}
      <section id="projects" className="container">
        <h2>Projects</h2>
        <p>Placeholder for Projects Gallery - will update with actual stuff!</p>
      </section>

      <section id="about" className="container">
        <h2>About</h2>
        <p>Placeholder for About - will replace this later with my actual About content!</p>
      </section>

      <section id="skills" className="container">
        <h2>Skills</h2>
        <p>Placeholder for Skills and Tech Stack! will replace later!</p>
      </section>

      <section id="contact" className="container">
        <h2>Contact</h2>
        <p>Placeholder for contact form / links - will replace later with actual info!</p>
      </section>
    </main>
    </>
  );
}

export default App;