import React, { Component } from "react";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import ViewSearchBtn from "../components/ViewSearchBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import UniqueId from 'react-html-id';
// import { realpathSync } from "fs";

class BooksContainer extends Component {
  constructor() {
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      books: [],
      book: {},
      key: this.nextUniqueId(),
      id: "",
      title: "",
      author: "",
      synopsis: "",
      url: "",
      data: {},
      error: null
    };
  }

  callback = (res) => {
    try {
      console.log("Data:", res)
    
        this.setState({ 
          books: res.items,
          error: null 
        });
    } catch (error) {
      console.error('Error processing response:', error);
      this.setState({ 
        books: [],
        error: "Error processing search results" 
      });
    }
  }

  searchBooks = (query, cb) => {
    console.log("Query:", query)
    API.search(query)
      .then(res => {
        cb(res);
      })
      .catch(err => {
        console.error('Search error:', err);
      });
  }

  loadBooks = async () => {
    try {
      const res = await API.getBooks();
      this.setState({ 
        books: res.data, 
        title: "", 
        author: "", 
        synopsis: "",
        error: null 
      });
    } catch (err) {
      console.error('Load books error:', err);
      this.setState({ 
        error: "Error loading books. Please try again later.",
        books: [] 
      });
    }
  };

  saveBook = (bookData) => {
    console.log("BookData1:", bookData);
    API.saveBook(bookData)
      .then((res) => {
        console.log("API saveBook response:", res);
        // Check if res is not empty or malformed
        const filteredData = this.state.books.filter(
          (eachItem) => eachItem.id !== bookData.bookId
        );
        this.setState({
          books: filteredData,
          error: null
        });
      })
      .catch((err) => {
        console.error("Save book error:", err);
        this.setState({
          error: "Error saving book"
        });
      });
  };
  

  handleInputChange=(event)=>{
    const { name, value } = event.target;
    this.setState({
      //search : input field
      [name]: value
    });
  }

  handleFormSearch=(event)=>{
    if (this.state.title){
      event.preventDefault();
      //Search for all books in Google Books API
      this.searchBooks(this.state.title, this.callback);
    }//if
  }

  saveClickHandler=(event, book)=>{
    event.preventDefault();
    //Why can't I set the state:
    this.setState({ book: book });
    console.log("BOOK = "+JSON.stringify(book));
    //console.log("BOOK = "+JSON.stringify(this.state.book));
    this.saveBook(book);
  }
  // viewClickHandler = (event, url) => {
  //   event.preventDefault();
  //   this.setState({ url: url });
  //   console.log("BOOK url = "+url);
  //   window.open(url);
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* SEARCH FOR TITLES */}
            <Col size="md-12">
              <Jumbotron className="w-100">
                <h1 className="title">(React) Google Books Search</h1>
                <h4>Search, View, and Save Books of Interest</h4>
              </Jumbotron>
              </Col>
              <div className="results">
                <Col size="md-12">
                  <form>
                    <strong><h5>Book Search</h5></strong>
                    <label htmlFor="title"><p>Book</p></label>
                    <Input
                      className="custom-form-control"
                      type="text"
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      name="title"
                      placeholder="Title (required)"
                    />
                    <FormBtn
                      disabled={!(this.state.title)}
                      onClick={this.handleFormSearch}
                    >
                      Search
                    </FormBtn>
                  </form>
                </Col>
              </div>
          {/* DISPLAY RESULTS */}
          <div className = "results">
            <Col size="md-12 sm-12">
              {this.state.books && this.state.books.length ? (
                <React.Fragment>
                  <strong><h5>Results</h5></strong>
                  <List>               
                    {this.state.books.map(book => (
                      // <ListItem key={book.id}>
                      <ListItem key = {book.key}>
                        <div className="container-fluid px-0">
                          <div className ="row">
                            <div className = "col-12">
                              <div className = "row">
                              <div className= "col-12">
                              <span className = "justify-self-end text-right button-wrapper">
                                    <ViewSearchBtn to= {
                                      {
                                        pathname: '/book/detail',
                                        state:{
                                          url: book.volumeInfo.previewLink,
                                          image: (book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail: "https://dummyimage.com/128x195/fff/fff&text=No+Image+Available"),
                                          title: book.volumeInfo.title,
                                          bookId: book.id,
                                          author: book.volumeInfo.authors,
                                          synopsis: book.volumeInfo.description
                                          // isbn: book.volumeInfo.industryIdentifiers[0].type
                                        }
                                      }
                                    }>View</ViewSearchBtn>
                                    
                                  <SaveBtn onClick={(event) => {
                                    this.saveClickHandler(event, ({
                                      url: book.volumeInfo.previewLink,
                                      //image: book.volumeInfo.imageLinks.thumbnail,
                                      image: book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail: "https://dummyimage.com/128x195/fff/fff&text=No+Image+Available",
                                      title: book.volumeInfo.title,
                                      bookId: book.id,
                                      author: book.volumeInfo.authors,
                                      synopsis: book.volumeInfo.description
                                    }))} 
                                  }/>
                                </span>
                                <div className ="justify-self-start text-left title-author">
                                  <strong>
                                    <p>{book.volumeInfo.title} </p> 
                                    <p>Written by {book.volumeInfo.authors}</p>
                                  </strong>
                                </div>{/*<!--col-5-->*/}
                              </div>{/*col*/}
                              </div>{/*<!--row-->*/}
                              <div className="row">
                              <div className = "col-12">
                                <img className="img-fluid book-img" src= {book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail: "https://dummyimage.com/128x195/fff/fff&text=No+Image+Available"}></img>
                                <p className="book-text text-align-left">{book.volumeInfo.description}
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
              ) : (<strong><h5>No Results to Display</h5></strong>)} 
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default BooksContainer;