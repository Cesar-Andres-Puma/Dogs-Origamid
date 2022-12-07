import * as S from "./style";

export const Button = ({ children, espacamento, ...props }) => {
  return (
    <S.Button buttonPadding={espacamento} {...props}>
      {children}
    </S.Button>
  );
};
