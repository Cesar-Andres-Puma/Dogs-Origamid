import * as S from "./style";
export const FeedPhotoItems = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };
  return (
    <S.Li onClick={handleClick}>
      <S.Img src={photo.src} alt={photo.title} />
      <S.Span>{photo.acessos}</S.Span>
    </S.Li>
  );
};
