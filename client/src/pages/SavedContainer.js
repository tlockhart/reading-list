import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class SavedContainer extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    id: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks(){
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  }

  deleteClickHandler(event, id){
    event.preventDefault();
    //Why can't I set the state:
    // this.setState({ book: book });
    // console.log("ID = "+id);
    //console.log("BOOK = "+JSON.stringify(this.state.book));
    this.deleteBook(id);
    // this.loadBooks();
  }

  viewClickHandler(event, _id){
    event.preventDefault();
    /*************************************
     * Why can't I set the state:
     * ***********************************/
    this.setState({ id: _id });
    // console.log("BOOK ID = "+_id);
    //console.log("BOOK = "+JSON.stringify(this.state.book));
    //this.saveBook(book);
    
    /*******************************************
     * Why can't I reference the state variable?
     * ******************************************/
    // window.open("/books/"+this.state.id);
    window.open("/books/"+_id);
  }

  deleteBook(id){
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          {/* DISPLAY RESULTS */}
          <Col size="md-12 sm-12">
            <Jumbotron className="w-100">
              <h1 className="title">(React) Google Books Search</h1>
              <h4>View or Delete Saved Books</h4>
            </Jumbotron>
            {/*Results*/}
           </Col>
          <div className = "results">
            <Col size="md-12 sm-12">
              {this.state.books.length ? (
                  <React.Fragment>
                    <strong><h5>Saved Books</h5></strong>
                    <List>               
                      {this.state.books.map(book => (
                        <ListItem key={book._id}>
                          <div className="container-fluid px-0">
                            <div className ="row">
                              <div className = "col-12">
                                <div className = "row">
                                  <div className ="col-12">
                                  <span className = "justify-self-end text-right button-wrapper">
                                    {/* <ViewBtn onClick={(event) => this.viewClickHandler(event, book._id)} /> */}
                                    <ViewBtn to={
                                      {
                                        pathname: '/books/'+`${book._id}`
                                      } 
                                    }/>
                                    <DeleteBtn onClick={(event) => {
                                      this.deleteClickHandler(event, book._id)}
                                    }/>
                                  </span>
                                  <div className ="justify-self-start text-left title-author"></div>
                                    <strong>
                                      <p>{book.title} </p> 
                                      <p>Written by {book.author}</p>
                                    </strong>
                                  </div>{/*<!--col-5-->*/}
                                </div>{/*<!--row-->*/}
                                <div className="row">
                                <div className = "col-12">
                                  <img className="img-fluid book-img" src= {book.image ?book.image: "https://dummyimage.com/128x195/fff/fff&text=No+Image+Available"}></img>
                                  <p className="book-text text-align-left">
                                    {book.synopsis}
                                  </p>
                                </div>
                                </div>
                              </div>{/*<!--col-12-->*/}
                            </div>{/*<!--row-->*/}
                          </div>{/*container*/}
                        </ListItem>
                      ))}
                    </List>
                  </React.Fragment>
                ) : (
                  <h3>No Results to Display</h3>
                )} 
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default SavedContainer;
