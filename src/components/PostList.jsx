import { useContext } from "react";
import PostCard from "./PostCard";
import { PostData } from "../store/post-list-store.jsx";

export default function PostList() {
  const { postList } = useContext(PostData);
  console.log(postList);
  return (
    <>
      {postList.map((post) => {
        return <PostCard key={post.id} post={post}> </PostCard>;
      })}
    </>
  );
}
