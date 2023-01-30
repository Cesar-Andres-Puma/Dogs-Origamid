import { useEffect } from "react";
import { Error } from "../../helper/error";
import { Loading } from "../../helper/loading";
import { useFetch } from "../../hooks/useFetch";
import { PHOTO_GET } from "../../services/api";
import { PhotoContent } from "../feedPhotoContent";
import * as S from "./style";
export const FeedModal = ({ photo, setModalPhoto }) => {
  const { error, request, loading, data } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo]);
  const handleOutsideCkick = (e) => {
    if (e.target === e.currentTarget) {
      setModalPhoto(null);
    }
  };
  return (
    <S.Container onClick={handleOutsideCkick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </S.Container>
  );
};
