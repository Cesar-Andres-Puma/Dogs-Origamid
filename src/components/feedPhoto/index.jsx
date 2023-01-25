import { useEffect } from "react";
import { Error } from "../../helper/error";
import { Loading } from "../../helper/loading";
import { useFetch } from "../../hooks/useFetch";
import { PHOTO_GET } from "../../services/api";
import { FeedPhotoItems } from "../feedPhotoItems";
import * as S from "./style";
export const FeedPhoto = () => {
  const { data, error, request, loading } = useFetch();
  useEffect(() => {
    async function fetchPhoto() {
      const { url, options } = PHOTO_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }
    fetchPhoto();
  }, []);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <S.Ul className="animeLeft">
        {data.map((photo) => (
          <FeedPhotoItems key={photo.id} photo={photo} />
        ))}
      </S.Ul>
    );
  else return null;
};
