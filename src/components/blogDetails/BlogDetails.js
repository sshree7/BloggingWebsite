import Button from "@restart/ui/esm/Button";
import React, { useContext, useState } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import "./blogDetails.css";
import { Link } from "react-router-dom";
//import LikeContextProvider from '../../contexts/LikeContext';
//import LikeBlog from '../likeBlog/LikeBlog';
//import LikeBlog from '../LikeBlog/LikeBlog';

const BlogDetails = ({ blog }) => {
  const { dispatch } = useContext(BlogContext);
  let [liked, setLiked] = useState(false);
  let like = () => {
    setLiked(!liked);
  };
  return (
    <div className="post">
      <div className="postInfo">
        <span className="postTitle">
          <bold>{blog.title}</bold>
        </span>
      </div>
      <p className="postDesc">{blog.body}</p>
      <Button onClick={() => dispatch({ type: "REMOVE_BLOG", id: blog.id })}>
        Delete
      </Button>{" "}
      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <Button>Edit</Button> */}
      <Link className="link" to={"/edit/" + blog.id}> 
        <button>Update Blog</button>
      </Link>
      {/* <LikeBlog /> */}
      &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button color="danger mx-5" onClick={like}>
        Like
      </Button>
      {liked ? (
        <img
          src="https://www.pngitem.com/pimgs/m/12-121389_like-png-thumbs-up-emoji-google-transparent-png.png"
          alt="liked"
          width={25}
        />
      ) : null}
      <hr />
      {"\n"}
    </div>
  );
};

export default BlogDetails;
