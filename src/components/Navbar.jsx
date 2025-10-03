// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
    return (
        <header className="site-header">
            <nav className="nav container">
                <a className="logo" href="#home">ATK</a>

                <ul className="nav-links" role="list">
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <a className="btn outline" href="/Portfolio-AK/CV.pdf" target="_blank" rel="noreferrer">Download CV</a>
                    </li>
                </ul>

                {/* Mobile menu button (to be wired up later)*/}
                <button className="nav-toggle" aria-label="Open menu">☰</button>
            </nav>
        </header>
    );
}