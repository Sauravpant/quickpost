import { useContext } from "react";
import PostCard from "./PostCard";
import { PostData } from "../store/post-list-store.jsx";
import DefaultHomePage from "./DefaultHomePage.jsx";

export default function PostList() {
  const { postList,addPostFromAPI } = useContext(PostData);

  const requestAPI = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        alert("Fetch failed");
        throw new Error("Fetch failed");
      }
      const data = await response.json();
      addPostFromAPI(data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnGetPostClick = () => {
    // console.log("Get post button Clicked");
    requestAPI();
  };

  return (
    <>
      {postList.length === 0 && (
        <DefaultHomePage onGetPostClick={handleOnGetPostClick} />
      )}
      {postList.map((post) => {
        return (
          <PostCard key={post.id} post={post}>
          </PostCard>
        );
      })}
    </>
  );
}
