// src/components/Homepage.jsx
import React from "react";

export default function Homepage() {
    return (
        <section id="home" className="home">
            <div className="container home-inner">
                <div className="home-copy">
                    <h1>Hi, I'm Alekhya Kondaveeti</h1>
                    <p className="tagline">Software Developer | AI Enthusiast | Cloud and IoT Innovator</p>
                    <p className="subtitle">
                        I love exploring AI, connecting devices, and building tech that makes a real impact.
                    </p>

                    <div className="home-ctas">
                        <a href="#projects" className="btn primary">View Featured Projects</a>
                    </div>
                </div>

                <div className="home-visual" aria-hidden="true">
                    {/* Placeholder for image - replace with SVG/PNG or Lottie later!*/}
                    <div className="illustration">Image placeholder</div>
                </div>
            </div>
        </section>
    );
}