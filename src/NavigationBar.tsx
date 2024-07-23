import { useState } from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-6 right-8 z-20 rounded-md focus:outline-none "
        onClick={toggleNavbar}
      >
        <img
          src="/list.png"
          alt="Button Image"
          className={`h-8 w-8 transition-transform duration-300 ${
            isOpen ? "transform rotate-90" : "transform -rotate-0"
          }`}
        />
      </button>

      <nav className={`${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experiences</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Story</a>
          </li>
          <li>
            <a href="#">Schedule</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
