import { useState } from "react";
import { URLDois } from "../../../services/api";
export const UserPost = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [AtivarS, setAtivarS] = useState(false);
  const [tokens, setTokens] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });

    const ApiF = async () => {
      const APITeste = await fetch(`${URLDois}/jwt-auth/v1/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const json = await APITeste.json();
      setTokens(json.token);
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
        placeholder="usuario"
        onChange={({ target }) => setUsername(target.value)}
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
      <p>{tokens}</p>
      <button>enviar</button>
    </form>
  );
};
