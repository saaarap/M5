import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentArea from "../CommentArea/CommentArea"; 


class MyCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleCommentArea = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { img, title, category, btn, asin } = this.props;
    const { selected } = this.state;
    const cardClassName = `border ${selected ? "border-danger" : ""}`;

    return (
                <Card style={{ width: "15rem" }} className={cardClassName}>
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>Category: {category}</Card.Text>
              <Card.Text>ASIN: {asin}</Card.Text>
              <Button onClick={this.toggleCommentArea}>{btn}</Button>
                      {selected && <CommentArea elementId={asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default MyCard;
