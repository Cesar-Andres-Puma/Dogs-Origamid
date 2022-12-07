import { EndPoints } from "./endpoints";
import { PhotoGet } from "./photoGet";
import { PostImg } from "./postImg";
import { UserPost } from "./userPost";

export const Api = () => {
  return (
    <>
      <h1>User Post</h1>
      <EndPoints />
      <h1>User Post</h1>
      <UserPost />
      <h1>Post img</h1>
      <PostImg />
      <h1>puxamento img</h1>
      <PhotoGet />
    </>
  );
};
