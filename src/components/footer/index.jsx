import * as S from "./style";
import iconLogoFooter from "../../assets/dogs-footer.svg";
export const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.IconFooter src={iconLogoFooter} alt="" />
        <span>Dogs. Alguns direitos reservados.</span>
      </S.Footer>
    </>
  );
};
