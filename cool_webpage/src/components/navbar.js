// I need to add a nav bar to my website. Here's a simple example of a navigation bar component using React:
// About, Contact, and Home links. You can customize the styles and links as needed.
// dont add style in-line. mention classes and add a separate CSS file for styling. Here's the code for the navbar component:

import React from "react";
import "./navbar.css"; // Import the CSS file for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
