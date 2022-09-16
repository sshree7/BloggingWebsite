import React,{useState, useContext} from 'react';
import "./addBlogForm.css";
import { BlogContext } from '../../contexts/BlogContext';


const AddBlogForm = () => {
    const {dispatch} = useContext(BlogContext);
    const[title, setTitle]= useState('');
    const[body, setBody]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //addBlog(title,body);
        dispatch({ type: 'ADD_BLOG', blog: { title, body }});
        setBody('');
        setTitle('');
        window.location.href = "/";

    };

    return ( 
        <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form onSubmit={handleSubmit}className="writeForm">
        <div className="writeFormGroup">
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)} required
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setBody(e.target.value)}
            value ={body}
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
 
export default AddBlogForm;
