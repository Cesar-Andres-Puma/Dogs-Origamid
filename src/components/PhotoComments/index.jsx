import { useEffect } from "react";
import { useRef } from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../context";
import { PhotoCommentsForm } from "../photoCommentsForm";
import * as S from "./style";
export const PhotoComments = (props) => {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);
  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);
  return (
    <>
      <S.Comments ref={commentsSection}>
        {comments.map((comments, keys) => (
          <S.Comment id={comments.comment_ID} key={keys}>
            <b>{comments.comment_author}</b>
            <span> {comments.comment_content}</span>
          </S.Comment>
        ))}
      </S.Comments>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};
