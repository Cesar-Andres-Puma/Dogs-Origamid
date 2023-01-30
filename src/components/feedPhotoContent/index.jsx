import { Link } from "react-router-dom";
import { PhotoComments } from "../PhotoComments";
import * as S from "./style";

export const PhotoContent = ({ data }) => {
  console.log(data);
  const { photo, comments } = data;
  return (
    <S.Container>
      <S.StyleImg>
        <img src={photo.src} alt={photo.title} />
      </S.StyleImg>
      <div className="details">
        <div>
          <p className="author">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="visualizacoes">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className="attributes">
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments className={comments} id={photo} comments={comments} />
    </S.Container>
  );
};
