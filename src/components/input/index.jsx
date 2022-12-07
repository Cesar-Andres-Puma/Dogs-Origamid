import * as S from "./style";

export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
}) => {
  return (
    <S.Container>
      <S.label htmlFor={name}>{label}</S.label>
      <S.Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};
