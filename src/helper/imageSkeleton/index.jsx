import { useState } from "react";
import * as S from "./style";
export const ImageSkeleton = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);
  const handleLoad = ({ target }) => {
    setSkeleton(false);
    target.style.opacity = 1;
  };
  return (
    <S.Wrapper className="skeletonActive">
      {skeleton && <S.Skeleton></S.Skeleton>}
      <S.Image onLoad={handleLoad} alt={alt} {...props} />
    </S.Wrapper>
  );
};
