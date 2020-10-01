import React from "react";
import GithubSVG from "../../images/github.svg";
import "./styles.css";

export default function Header() {
  return (
    <header className="App-header">
      <h3 className="App-title">Github Profiles</h3>
      <div className="Right-corner">
        <p>switch</p>
        <a
          className="Github-link"
          href="https://github.com/filipegl/github-profile"
        >
          <img
            src={GithubSVG}
            className="App-logo"
            alt="https://github.com/filipegl/github-profile"
          />
        </a>
      </div>
    </header>
  );
}
