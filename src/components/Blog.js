import React from "react";
import Comment from "./Comment";

const Blog = (props) => {
  const comments = props.comments;
  const mappedComments = comments.map((comment) => {
    return <Comment comment={comment} />;
  });

  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>by: {props.author}</p>
      <p>{props.body}</p>
      <h3>Comments</h3>
      {mappedComments}
    </React.Fragment>
  );
};

export default Blog;
