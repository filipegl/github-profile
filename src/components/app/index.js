import React, { useState } from "react";
import Header from "../Header";
import UsernameInput from "../UsernameInput";
import CleanedView from "../CleanedView";
import "./styles.css";

function App() {
  const [nickname, setNickname] = useState("");

  const handleSubmit = (name) => {
    setNickname(name);
  };

  // https://api.github.com/users/{nickname}
  return (
    <div className="App">
      <Header />
      <UsernameInput onSubmit={handleSubmit} />
      {nickname ? (
        // <ProfileView />
        <div>
          <p>TODO: Exibi perfil de {nickname}, caso exista</p>
        </div>
      ) : (
        <CleanedView />
      )}
    </div>
  );
}

export default App;
