import React, {useContext} from 'react';
import { BlogContext } from '../../contexts/BlogContext';
import BlogDetails from '../blogDetails/BlogDetails';
//import "./bloglist.css";

const Bloglist = () => {
    const{blogs}=useContext(BlogContext);
    return blogs.length? ( 
        
        <div className="blog-list"> 
       <ul>
        {blogs.map(blog => {
          return ( <BlogDetails blog={blog} key={blog.id} /> );
        })}
      </ul>
        </div>

     ): (
         <div className="empty"> No blogs present yet </div>
     );
}
 
export default Bloglist;
