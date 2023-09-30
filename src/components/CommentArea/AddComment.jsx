import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
      rating: 1,
    };
  }

  handleTextChange = (e) => {
    this.setState({ commentText: e.target.value });
  };

  handleRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  };

  handleSubmit = async () => {
    const { commentText, rating } = this.state;
    const { elementId, updateCommentList } = this.props; 

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTE3MjVmMTRlZjcyNTAwMTgyZTk1OTgiLCJpYXQiOjE2OTYwMjQ2NjQsImV4cCI6MTY5NzIzNDI2NH0.eK5YrhqKYKIWIKYo5-OIFd3E0nDP52evU5vV3yMrGAw';

    const newReview = {
      comment: commentText,
      rate: rating,
      elementId: elementId,
    };

    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error('Errore nella richiesta API');
      }

      const newComment = await response.json();

      updateCommentList(newComment);

      this.setState({
        commentText: '',
        rating: 1,
      });
    } catch (error) {
      console.error('Errore durante l\'invio della recensione:', error);
    }
  };

  render() {
    const { commentText, rating } = this.state;

    return (
      <div>
        <h3>Aggiungi una recensione</h3>
        <Form>
          <Form.Group controlId="commentText">
            <Form.Label>Testo della recensione:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={commentText}
              onChange={this.handleTextChange}
            />
          </Form.Group>
          <Form.Group controlId="rating">
            <Form.Label>Valutazione (da 1 a 5):</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={this.handleRatingChange}
            />
          </Form.Group>
          <Button variant="primary mt-2" onClick={this.handleSubmit}>
            Invia Recensione
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddComment;

