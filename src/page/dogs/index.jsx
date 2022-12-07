import { Helmet } from "react-helmet-async";
import { Footer } from "../../components/footer";
import * as S from "./style";
export const Dogs = () => {
  return (
    <>
      <Helmet
        title="dogs"
        content="Dogs - Rede social para cachorros."
        name="description"
      />
    </>
  );
};
