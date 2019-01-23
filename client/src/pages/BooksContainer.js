import React, { Component } from "react";
// import {Link} from 'react-router-dom';
// import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import ViewBtn from "../components/ViewBtn";
import ViewSearchBtn from "../components/ViewSearchBtn";
// import ViewSearchBtn from "../components/ViewSearchBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Input, FormBtn } from "../components/Form";

class BooksContainer extends Component {
  state = {
    books: [],
    book: {},
    id: "",
    title: "",
    author: "",
    synopsis: "",
    url: "",
    data: {}
  };

  //Store state variables after api cll returns
  callback = (res) => {
    console.log();
    console.log("API CALL HAS ENDED!");
    console.log();
    //console.log("Res = "+JSON.stringify(res));
    //Store results
    // this.setState({ books: res.data.items[0], id: res.data.items[0].id, title: res.data.items[0].volumeInfo.title, author: res.data.items[0].volumeInfo.authors, synopsis: res.data.items[0].volumeInfo.description });

    //books is an array, therefore it must store an array of data
    this.setState({ books: res.data.items});

    //Output results
    console.log();
    console.log("RES DATA ITEMS BOOKS = "+JSON.stringify(this.state.books),"ID = "+this.state.id, "TITLE = "+this.state.title, "AUTHOR = "+this.state.author, "DESCRIP = "+this.state.synopsis);
  }
  //Initialize the state variables with search results
  searchBooks = (query, cb) => {
    API.search(query)
      .then(res => {
        console.log("API CALL HAS STARTED!");
        //callback to store state variables
        cb(res);//01122019:SaveAndDisplay the Data:
      })
      .catch(err => console.log(err));
  };

  //GETS WHAT IS LOADED IN THE DB (THIS SHOULD BE CALLED ON VIEW)
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

// Saves a book to the database
  saveBook = bookData => {
    var filteredData;
      API.saveBook(bookData)
      .then(
        console.log("BOOKDATA", bookData),
        console.log("TEST"),
        //FILTER OUT THE DATA THAT HAS BEEN SAVED TO THE DATABASE
        filteredData = this.state.books.filter(eachItem =>eachItem.id != bookData.bookId),
        this.setState({books: filteredData})
        )
      .catch(err => console.log("ERROR", err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      //search : input field
      [name]: value
    });
  };
  handleFormSearch = event =>{
    if (this.state.title){
      event.preventDefault();

      //Search for all books in Google Books API
      this.searchBooks(this.state.title, this.callback);
    }//if
  };

  saveClickHandler = (event, book) => {
    event.preventDefault();
    //Why can't I set the state:
    this.setState({ book: book });
    console.log("BOOK = "+JSON.stringify(book));
    //console.log("BOOK = "+JSON.stringify(this.state.book));
    this.saveBook(book);
  };
  viewClickHandler = (event, url) => {
    event.preventDefault();
    /*************************************
     * Why can't I set the state:
     * ***********************************/
    this.setState({ url: url });
    console.log("BOOK url = "+url);
    //console.log("BOOK = "+JSON.stringify(this.state.book));
    //this.saveBook(book);
    
    /*******************************************
     * Why can't I reference the state variable?
     * ******************************************/
    //window.open(this.state.url);
    window.open(url);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* SEARCH FOR TITLES */}
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <h4>Search, View, and Save Books of Interest</h4>
            </Jumbotron>
            <form>
              <Input
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

          
          {/* DISPLAY RESULTS */}
          <Col size="md-12 sm-12">
            {this.state.books.length ? (
              <List>               
                {this.state.books.map(book => (
                  // <ListItem key={book._id}>
                  <ListItem key={book.id}>
                    {/* <Link to={"/books/" + book._id}> */}
                    <div className="container-fluid px-0">
                    {/* <Link to={"/books/" + book.volumeInfo.previewLink}> */}
                      <div className ="row">
                        <div className = "col-12">
                          <div className = "row">
                            <div className ="col-5">
                              <strong>
                                <p>{book.volumeInfo.title} </p> 
                                <p>Written by {book.volumeInfo.authors}</p>
                              </strong>
                            </div>{/*<!--col-5-->*/}
                            <div className="col-3"></div>
                            <div className = "col-4 justify-self-end text-right">
                              {/* <ViewBtn to= {{url: book.volumeInfo.previewLink,
                                  image: book.volumeInfo.imageLinks.thumbnail,
                                  title: book.volumeInfo.title,
                                  bookId: book.id,
                                  author: book.volumeInfo.authors,
                                  synopsis: book.volumeInfo.description
                                }}>Tony Lockhart</ViewBtn>  */}
                                <ViewSearchBtn to= {{
                                  pathname: '/book/detail',
                                  state:{
                                    url: book.volumeInfo.previewLink,
                                    image: (book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail: "https://dummyimage.com/128x195/fff/fff&text=No+Image+Available"),
                                    title: book.volumeInfo.title,
                                    bookId: book.id,
                                    author: book.volumeInfo.authors,
                                    synopsis: book.volumeInfo.description
                                  }
                                }}>View</ViewSearchBtn>
                             
                              <SaveBtn onClick={(event) => {
                                this.saveClickHandler(event, ({
                                  url: book.volumeInfo.previewLink,
                                  image: book.volumeInfo.imageLinks.thumbnail,
                                  title: book.volumeInfo.title,
                                  bookId: book.id,
                                  author: book.volumeInfo.authors,
                                  synopsis: book.volumeInfo.description
                                }))} 
                              }/>
                            </div>{/*col-4*/}
                          </div>{/*<!--row-->*/}
                          <div className="row">
                          <div className = "col-2">
                            <img src= {book.volumeInfo.imageLinks ?book.volumeInfo.imageLinks.thumbnail: "https://dummyimage.com/128x195/fff/fff&text=No+Image+Available"}></img>
                          </div>{/*col-4*/}
                          <div className = "col-10">
                            <p>{book.volumeInfo.description}</p>
                          </div>
                          </div>
                        </div>{/*<!--col-12-->*/}
                      </div>{/*<!--row-->*/}
                    {/* </Link> */}
                    </div>{/*container*/}
                  </ListItem>
                ))}
              </List>
             ) : (
              <h3>No Results to Display</h3>
            )} 
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BooksContainer;