import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BooksContainer from "./pages/BooksContainer";
import SavedContainer from "./pages/SavedContainer";
import DetailContainer from "./pages/DetailContainer";
import SearchDetailContainer from "./pages/SearchDetailContainer";
import NoMatchContainer from "./pages/NoMatchContainer";
import Nav from "./components/Nav";
import "./style.css";

//Create a Router and declare individual routes
class App extends React.Component{
  render(){
    return (
      <Router>
        {/* Router must have one and only one child tag */}
        <div>
          <Nav />
          <Switch>
            {/* Route just registers which component should displayed depending on the url path*/}
            <Route exact path="/" component={BooksContainer} />
            <Route exact path="/books" component={BooksContainer} />
            <Route exact path="/saved" component={SavedContainer} />
            <Route exact path="/books/:id" component={DetailContainer} />
            <Route exact path="/book/detail" component={SearchDetailContainer} />
            <Route exact path="/books/search/:bookid" component={BooksContainer} />
            <Route component={NoMatchContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
 
}

export default App;
