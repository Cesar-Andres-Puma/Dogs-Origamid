import { useState } from "react";
import { URLDois } from "../../../services/api";

export const PostImg = () => {
  const [idade, setIdade] = useState("");
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [img, setImg] = useState("");
  const [token, setToken] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const Api = async () => {
      const formData = new FormData();
      formData.append("img", img);
      formData.append("nome", nome);
      formData.append("idade", idade);
      formData.append("peso", peso);

      const apibase = await fetch(`${URLDois}/api/photo`, {
        method: "POST",
        headers: {
          authorization: "Bearer" + token,
        },
        body: formData,
      });
      const json = await apibase.json();
      console.log(apibase);
      console.log(json);
    };
    Api();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", maxWidth: "250px" }}
    >
      <h4>token</h4>
      <input
        type="text"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <h4>Nome</h4>
      <input
        type="text"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <h4>idade</h4>
      <input
        type="text"
        value={idade}
        placeholder=""
        onChange={({ target }) => setIdade(target.value)}
      />
      <h4>peso</h4>
      <input
        type="text"
        value={peso}
        placeholder=""
        onChange={({ target }) => setPeso(target.value)}
      />
      <h4>img</h4>
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
};
