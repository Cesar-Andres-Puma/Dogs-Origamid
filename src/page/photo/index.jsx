import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PhotoContent } from "../../components/feedPhotoContent";
import { Error } from "../../helper/error";
import { Loading } from "../../helper/loading";
import { useFetch } from "../../hooks/useFetch";
import { PHOTO_GETTE } from "../../services/api";

export const Photo = () => {
  const { id } = useParams();
  console.log(id);
  const { error, request, loading, data } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO_GETTE(id);

    request(url, options);
  }, []);
  if (error) return <Error vazio={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="ContainerHero">
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};
