import { useContext, useRef } from "react";
import { PostData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostData);

  const captionElement = useRef(null);
  const userIDElement = useRef(null);
  const reactionsElement = useRef(null);
  const descriptionElement = useRef(null);
  const tagsElement = useRef(null);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const caption = captionElement.current.value;
    const userId = userIDElement.current.value;
    const reactions = reactionsElement.current.value;
    const description = descriptionElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    captionElement.current.value = "";
    userIDElement.current.value = "";
    reactionsElement.current.value = "";
    descriptionElement.current.value = "";
    tagsElement.current.value = "";

    addPost(caption, userId, description, reactions, tags);
  };

  return (
    <>
      <form className="post-input" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Caption
          </label>
          <input
            type="text"
            ref={captionElement}
            id="title"
            className="form-control"
            placeholder="What's on your mind ? "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIDElement}
            id="userId"
            className="form-control"
            placeholder="Enter your id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Description
          </label>
          <textarea
            rows={4}
            type="text"
            ref={descriptionElement}
            id="body"
            className="form-control"
            placeholder="Describe your activity"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            id="reactions"
            className="form-control"
            placeholder="How many people reacted to the post ?"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            id="hashtags"
            className="form-control"
            placeholder="Enter the hashtags seperately here"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
