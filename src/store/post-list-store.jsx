import { createContext, useReducer } from "react";

export const PostData = createContext({
  postList: [],
  addPost: () => {},
  addPostFromAPI: () => {},
  deletePost: () => {},
});

const DEFAULT_DATA = [
  {
    id: 1,
    caption: "Going to college",
    body: "Hello friends! Going to college after a long vacation. Hoping to enjoy a lot with friends.",
    reactions: 2,
    postId: "user-1",
    tags: ["college", "friends"],
  },
  {
    id: 2,
    caption: "Got Hired",
    body: "I am excited to share that I got hired as a software developer at Google.",
    reactions: 100,
    postId: "user-2",
    tags: ["Google", "Job", "SoftwareDeveloper"],
  },
];

const postReducer = (currPostItems, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [action.payload, ...currPostItems];

    case "DELETE_ITEM":
      return currPostItems.filter(
        (currPost) => currPost.id !== action.payload.id
      );

    case "ADD_ITEM_FROM_API":
      return [
        {
          id: action.payload.post.id,
          caption: action.payload.post.title,
          body: action.payload.post.body,
          reactions: action.payload.post.reactions.likes,
          postId: action.payload.post.userId,
          tags: action.payload.post.tags,
        },
        ...currPostItems,
      ];

    default:
      return currPostItems;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postReducer, DEFAULT_DATA);

  const addPost = (caption, userId, description, reactions, tags) => {
    dispatchPostList({
      type: "ADD_ITEM",
      payload: {
        id: Date.now(),
        caption,
        body: description,
        reactions,
        postId: userId,
        tags,
      },
    });
  };

  const deletePost = (postNumber) => {
    dispatchPostList({
      type: "DELETE_ITEM",
      payload: { id: postNumber },
    });
  };

  const addPostFromAPI = (posts) => {
    posts.forEach((post) => {
      dispatchPostList({
        type: "ADD_ITEM_FROM_API",
        payload: { post },
      });
    });
  };

  return (
    <PostData.Provider
      value={{ postList, addPost, addPostFromAPI, deletePost }}
    >
      {children}
    </PostData.Provider>
  );
};

export default PostListProvider;
