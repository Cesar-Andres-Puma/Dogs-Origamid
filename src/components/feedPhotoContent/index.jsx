import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context";
import { PhotoComments } from "../PhotoComments";
import { PhotoDelete } from "../photoDelete";
import * as S from "./style";

export const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <S.Container>
      <S.StyleImg>
        <img src={photo.src} alt={photo.title} />
      </S.StyleImg>
      <div className="details">
        <div>
          <p className="author">
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

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
        <PhotoComments className={comments} id={photo} comments={comments} />
      </div>
    </S.Container>
  );
};
