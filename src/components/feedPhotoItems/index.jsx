import * as S from "./style";
export const FeedPhotoItems = ({ photo }) => {
  return (
    <S.Li>
      <S.Img src={photo.src} alt={photo.title} />
      <S.Span>{photo.acessos}</S.Span>
    </S.Li>
  );
};
