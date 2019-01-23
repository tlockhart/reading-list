import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&api_key=AIzaSyC-aBdJ9iCcpb-0gm8P5QbE9HEfDmuC8AM";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    search: function(query) {
      return axios.get(BASEURL + query + APIKEY);
     }
    ,
    // Gets all books using AXIOS Module
    getBooks: function() {
        //Go to the routes/api/books directory and run the get request for all books
        return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function(id) {
        //Go to the routes/api/books directory and run the get request for req.param.id
        return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        //Go to the routes/api/books directory and run the delete request for req.param.id
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        //Passes an object in the req.body
        return axios.post("/api/books", bookData);         
    }//savebook
  };