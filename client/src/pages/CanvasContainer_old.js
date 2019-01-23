import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

let google = window.google;
class CanvasContainer extends Component {
  constructor (){
    super();
    
   
  }
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
    const {isbn} = this.props.location.state;
    
    this.setState({book: {
      url,
      image,
      title,
      author,
      bookId,
      synopsis,
      isbn
    }});
    
    google.books.load()
    
  }//comonentdidmount
  componentWillMount(){
    
  }
  componentDidUpdate() {
    
    google.books.setOnLoadCallback(this.loadme);
  }
  // shouldComponentUpdate(){
    
    
  //   return false;
  // }
  getDerivedFromProps(props, state){
    
  }
  initialize = () => {
    console.log("IN SEARCHDETAILS book = "+this.state.book.title, " ISBN = ", this.state.book.isbn);
    var viewer = new this.google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    viewer.load('ISBN:0738531367');
  };
  loadme = () => {
    alert("ISBN = "+this.state.book.isbn);
    // let viewer = new google.books.DefaultViewer(document.getElementById("viewerCanvas"));
    // viewer.load('ISBN:0738531367');
  }
  
  render() {
    
    
    return (
      <Container fluid h-100>
         <Row>
          <Col size="md-12">
          {/* <div id="viewerCanvas" style={{height: '800px'}}>
          {google.books.load()}
          {this.loadme}
        {google.books.setOnLoadCallback(function initialize() {
            let viewer = new google.books.DefaultViewer(
            document.getElementById("viewerCanvas")
            );
        viewer.load("ISBN:1491918039");
        })}
          </div> */}
          {}
          <div id="viewerCanvas" style={{ height: "500px" }}>
        </div>
           </Col>
         </Row>
       </Container>
    );
  }
}

export default CanvasContainer;
