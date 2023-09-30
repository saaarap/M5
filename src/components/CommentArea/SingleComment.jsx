import React from 'react';

const SingleComment = ({ comment }) => {
  return (
    <li>
      <strong>Commento:</strong> {comment.comment}<br />
      <strong>Voto:</strong> {comment.rate}
    </li>
  );
};

export default SingleComment;
