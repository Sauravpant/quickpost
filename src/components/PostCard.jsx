import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { PostData } from "../store/post-list-store";

const PostCard = ({ post }) => {
  const {deletePost} =useContext(PostData);
  return (
    <>
      <div className="card custom-card">
        <div className="card-body">
          <h5 className="card-title">{post.caption}</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> {deletePost(post.id)}}>
            <MdDeleteForever />
          </span>
          <p className="card-text">{post.body}</p>
        </div>
        <button type="button" className="btn btn-primary position-relative">
          <FaHeart />
          <span classname="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions}
          </span>
        </button>
        <div>
          {post.tags.map((tags) => (
            <span key={tags} className="badge text-bg-success tag">{tags}</span>
          ))}
        </div>
      </div>
    </>
  );
};
export default PostCard;
