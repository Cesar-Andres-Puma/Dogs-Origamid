import { useState } from "react";
import { URLDois } from "../../../services/api";

export const PhotoGet = () => {
  const [id, setId] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const ApiPassar = async () => {
      const APiU = await fetch(`${URLDois}/api/photo/${id}`);
      const json = await APiU.json();
      console.log(json);
      console.log(APiU);
    };
    ApiPassar();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Receber imagen</button>
    </form>
  );
};
