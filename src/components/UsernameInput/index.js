import React, { useState } from "react";
import "./styles.css";

const UsernameInput = ({ onSubmit }) => {
  const [nickname, setNickname] = useState("");

  const handleChange = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nickname);
  };

  return (
    <form onSubmit={handleSubmit} className="Input-form">
      <input
        type="text"
        value={nickname}
        onChange={handleChange}
        placeholder="Digite o usuário do Github"
        color="#66FF66"
      />
      <input type="submit" value="Procurar" />
    </form>
  );
};

export default UsernameInput;
