import React from 'react';
import SingleComment from './SingleComment';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h6>Lista dei commenti</h6>
      <ul>
        {comments.map((comment, index) => (
          <SingleComment key={index} comment={comment} />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;

