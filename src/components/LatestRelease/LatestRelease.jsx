import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import scifi from 'C:/Users/acer/Desktop/M5/mia-app/src/data/scifi.json';
import MyCard from '../MyCard/MyCard';
import { nanoid } from 'nanoid';

class LatestRelease extends Component {
  render() {
    const { searchQuery } = this.props;

    const filteredBooks = scifi.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
<Container>
        <Row>
          <Col className="d-flex flex-wrap gap-3">
            {filteredBooks.map((book) => (
              <MyCard
                key={nanoid()}
                img={book.img}
                title={book.title}
                category={book.category}
                asin={book.asin}
                btn="Clicca qui"
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;

