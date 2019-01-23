import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class DetailContainer extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(
        res => this.setState({ book: res.data }),
        console.log("IN Details ID = "+this.props.match.params.id)
        // console.log("Data = "+JSON.stringify(res))
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron className="detailJumbotron">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>
                    {this.state.book.title} by {this.state.book.author}
                  </h1>
                </div>{/*col-12*/}
                <div className="col-12">
                  <img src={this.state.book.image} />
                </div>
                <div className="col-12">
                  <Link to="/">&#x2190;Back to Search |</Link> 
                  <a href={this.state.book.url} target="_blank"> Preview Book &#x2192;</a>               
                </div>
              </div>
            </div>              
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        {/* <Row>
          <Col size="md-2">
            <Link to="/">&#x2190;Back to Search |</Link>
            <a href={this.state.book.url} target="_blank"> Book &#x2192;</a>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default DetailContainer;
