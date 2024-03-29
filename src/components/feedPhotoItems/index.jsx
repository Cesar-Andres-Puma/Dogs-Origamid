import { ImageSkeleton } from "../../helper/imageSkeleton";
import * as S from "./style";
export const FeedPhotoItems = ({ photo, setModalPhoto }) => {
  const handleClick = () => {
    setModalPhoto(photo);
  };
  return (
    <S.Li onClick={handleClick}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <S.Span>{photo.acessos}</S.Span>
    </S.Li>
  );
};
