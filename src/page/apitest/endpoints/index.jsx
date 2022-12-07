import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { URLDois } from "../../../services/api";

export const EndPoints = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AtivarS, setAtivarS] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, email, password });
    const ApiF = async () => {
      const APITeste = await fetch(`${URLDois}/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email,
        }),
      });
      const json = await APITeste.json();
      console.log(json);
      console.log(APITeste);
    };
    ApiF();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", maxWidth: "250px" }}
    >
      <h4>Nome</h4>
      <input
        type="text"
        value={username}
        placeholder="nome"
        onChange={({ target }) => setUsername(target.value)}
      />
      <h4>Email</h4>
      <input
        type="email"
        value={email}
        placeholder="email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <h4>Senha</h4>
      <label htmlFor="">
        <input
          type={AtivarS ? "text" : "password"}
          value={password}
          placeholder="senha"
          onChange={({ target }) => setPassword(target.value)}
        />
        <span onClick={() => setAtivarS((prev) => !prev)}>aparecer senha</span>
      </label>
      <button>Enviar</button>
    </form>
  );
};
