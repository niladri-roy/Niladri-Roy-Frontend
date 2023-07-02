import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown using ES6 syntax

const URL = process.env.REACT_APP_BACKEND_URI;
console.log("URL from .env",URL);

const baseURL = URL;
const api = axios.create({
  baseURL: baseURL
});

const BlogComponent = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    api.get("/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const blog = blogs.map((blog, index) => {
    return (
      <div className="index" key={index}>
        <h2>{blog.title}</h2>
        <p>{blog.smallDescription}</p>
        <div>
          Tags:
          {blog.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <ReactMarkdown>{blog.mainDescription}</ReactMarkdown>
      </div>
    );
  });

  return (
    <div>
      {blog}
    </div>
  );
};

export default BlogComponent;
