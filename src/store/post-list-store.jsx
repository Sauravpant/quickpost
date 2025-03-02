import { createContext, useReducer } from "react";

export const PostData = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const DEFAULT_DATA = [
  {
    id: 1,
    caption: "Going to college",
    body: "Hello friends! Going to college after a long vacation . Hoping to enjoy a lot with friends",
    reactions: 2,
    postId: "user-1",
    tags: ["college", "friends"],
  },
  {
    id: 2,
    caption: "Got Hired",
    body: "I am excited to share that i got hired as a software developer at Google",
    reactions: 100,
    postId: "user-2",
    tags: ["Google", "Job", "SoftwareDeveloper"],
  },
];

const postReducer = (currPostItems, action) => {
  let newItems = currPostItems;
  switch (action.type) {
    case "ADD_ITEM":
      newItems = [action.payload, ...currPostItems];
      return newItems;
    case "DELETE_ITEM":
      newItems = currPostItems.filter((currPost) => {
        return currPost.id !== action.payload.id;
      });
      return newItems;

    default:
      return currPostItems;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postReducer, DEFAULT_DATA);

  const addPost = (caption, userId, description, reactions, tags) => {
    console.log(`${caption},${description},${tags},${reactions},${userId}`);
    dispatchPostList({
      type: "ADD_ITEM",
      payload: {
        id: Date.now(),
        caption: caption,
        body: description,
        reactions: reactions,
        postId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postNumber) => {
    // console.log(`The user requested to delete the post with post id ${postNumber}`)
    dispatchPostList({
      type: "DELETE_ITEM",
      payload: {
        id: postNumber,
      },
    });
  };
  return (
    <>
      <PostData.Provider value={{ postList, addPost, deletePost }}>
        {children}
      </PostData.Provider>
    </>
  );
};
export default PostListProvider;
