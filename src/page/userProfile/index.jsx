import { useParams } from "react-router-dom";
import { Feed } from "../../components/feed";
import * as S from "./style";
export const UserProfile = () => {
  const { user } = useParams();
  return (
    <div className="ContainerHero">
      <S.title>{user}</S.title>
      <Feed user={user} />
    </div>
  );
};
