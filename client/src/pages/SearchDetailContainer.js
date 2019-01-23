import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class SearchDetailContainer extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    const { handle } = this.props.match.params;
    // const {title} = this.props.location.state;
    const {url} = this.props.location.state;
    const {image} = this.props.location.state;
    const {title} = this.props.location.state;
    const {bookId} = this.props.location.state;
    const {author} = this.props.location.state;
    const {synopsis} = this.props.location.state;
    
    this.setState({book: {
      url,
      image,
      title,
      author,
      bookId,
      synopsis
    }});
    // console.log("IN SEARCHDETAILS book = "+this.state.book.title);
    // API.getBook(this.props.match.params.id)
    //   .then(
    //     res => this.setState({ book: res.data }),
    //     console.log("IN Details ID = "+this.props.match.params.id)
    //     // console.log("Data = "+JSON.stringify(res))
    //   )
    //   .catch(err => console.log(err));
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
                  <img className="img-fluid" src={this.state.book.image} />
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
           <div className= "results">
            <Col size="md-12">
              <article>
                <strong><h5>Synopsis</h5></strong>
                <p>
                  {this.state.book.synopsis}
                </p>
              </article>
            </Col>
           </div>
         </Row>
         {/* <Row>
           <Col size="md-2">
             <Link to="/">&#x2190;Back to Authors |</Link>
             <a href={this.state.book.url} target="_blank"> Book &#x2192;</a>
           </Col>
         </Row> */}
       </Container>
    );
  }
}

export default SearchDetailContainer;
