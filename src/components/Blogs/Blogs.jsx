import React from 'react';
// import {useEffect, useState} from 'react';
// import axios from 'axios';
import image from './blog.jpg';
import './Blogs.css';

// const URL = process.env.REACT_APP_BACKEND_URI;
// const baseURL = URL;
// const api = axios.create({
//   baseURL: baseURL
// })

const Blogs = () => {

  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   api.get("/blogs")
  //     .then((response) => {
  //       setBlogs(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching blogs:', error);
  //     })
  // }, []);

  // const blog = blogs.map((blog, index) => {
  //   return (
  //     <div className="index" key={index}>
  //       <h2>{blog.title}</h2>
  //       <p>{blog.smallDescription}</p>
  //       <div>
  //         Tags:
  //         {blog.tags.map((tag, index) => (
  //           <span key={index} className="tag">{tag}</span>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // });


  return (
    <div className='content container'>
      <div className="heading">Blogs</div>
      <div className="blogs">
        <div className="blog">
          <div className="blog-image">
            <img src={image} alt="" />
          </div>
          <div className="details">
            <div className="h2">
              This is a sample Blog
            </div>
            <div className="tags">
              <span className="tag">React.js</span>
              <span className="tag">Mongo DB</span>
              <span className="tag">Express</span>
              <span className="tag">Node.js</span>
            </div>
            <div className="p">
              This is a sample description.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs