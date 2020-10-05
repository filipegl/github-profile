import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import UsernameInput from "../UsernameInput";
import CleanedView from "../CleanedView";
import ProfileView from "../ProfileView";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";
import GlobalTheme from "../../globals";

import "./styles.css";

function App() {
  const [nickname, setNickname] = useState("");
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("filipegl/github-profile/darkmode"))
  );
  const handleSubmit = async (name) => {
    setNickname(name);
  };

  useEffect(() => {
    localStorage.setItem("filipegl/github-profile/darkmode", darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Fragment>
        <GlobalTheme />
        <div className="App">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <UsernameInput onSubmit={handleSubmit} />
          {nickname ? <ProfileView nickname={nickname} /> : <CleanedView />}
        </div>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
