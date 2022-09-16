import React,{useState, useContext } from 'react';
import "./editBlogForm.css";
import { BlogContext } from '../../contexts/BlogContext';
import {  useParams } from "react-router-dom";

const EditBlogFom = () => {
    const { id } = useParams();
    const { blogs, dispatch } = useContext(BlogContext);
    const [selectedBlog, setSelectedBlog] = useState(
      blogs.find((blog) => blog.id === (id))
    );
   // console.log(selectedBlog);
    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     //addBlog(title,body);
    //     dispatch({ type: 'EDIT_BLOG', blog: { title, body }});
    //     setBody('');
    //     setTitle('');
    //     window.location.href = "/";

    // };

    let updateHandle = (e) => {
      e.preventDefault();
      dispatch({ type: "REMOVE_BLOG", id: selectedBlog.id });
      dispatch({ type: "ADD_BLOG", blog: selectedBlog });
  
      window.location.href = "/";
    };

    return ( 
        <div className="write">
        {console.log(selectedBlog.id)}
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form onSubmit={updateHandle}className="writeForm">
        <div className="writeFormGroup">
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true} 
            name="title"
                  value={selectedBlog.title}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      [e.target.name]: e.target.value,
                    }) }
             required
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            name="body"
                  value={selectedBlog.body}
                  onChange={(e) =>
                    setSelectedBlog({
                      ...selectedBlog,
                      [e.target.name]: e.target.value,
                    }) }
            required
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
     );
}
 
export default EditBlogFom;
