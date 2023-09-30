import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ elementId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE3MjVmMTRlZjcyNTAwMTgyZTk1OTgiLCJpYXQiOjE2OTYwMjQ2NjQsImV4cCI6MTY5NzIzNDI2NH0.eK5YrhqKYKIWIKYo5-OIFd3E0nDP52evU5vV3yMrGAw";

    fetch(`https://striveschool-api.herokuapp.com/api/comments/${elementId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta API");
        }
        return response.json();
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Errore durante il recupero dei commenti:", error);
      });
  }, [elementId]);

  const updateCommentList = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div>
      <h3>Recensioni del libro</h3>
      <CommentList comments={comments} />
      <AddComment elementId={elementId} updateCommentList={updateCommentList} />
    </div>
  );
};

export default CommentArea;
