import React from "react";
import GithubPNG from "../../images/github.png";
import DarkModeToggle from "react-dark-mode-toggle";
import "./styles.css";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="App-header">
      <h3 className="App-title">Github Profiles</h3>
      <div className="Right-corner">
        <DarkModeToggle onChange={setDarkMode} checked={darkMode} size={70} />
        <a
          className="Github-link"
          href="https://github.com/filipegl/github-profile"
        >
          <img
            src={GithubPNG}
            className="App-logo"
            alt="https://github.com/filipegl/github-profile"
          />
        </a>
      </div>
    </header>
  );
}
