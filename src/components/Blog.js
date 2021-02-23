import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>by: {props.author}</p>
            <p>{props.body}</p>
            <h3>Comments</h3>
            <p>{props.comments}</p>
        </div>
    );
}

export default Blog;
