import React, { Component } from "react";
import SearchBar from "../SearchBar";
import BookList from "../BookList";
import axios from "axios";
import "./style.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // empty array to store the searched books
      books: [],
      // saves input of searched word
      searchField: "",
    };
  }

  // method to handle google api search with axios

  searchBook = (event) => {
    event.preventDefault();
    const url = "https://www.googleapis.com/books/v1/volumes?q=";
    // get user input using axios then save them into the empty array
    axios
      .get(url + this.state.searchField)
      .then((data) => this.setState({ books: [...data.body.items] }));
  };

  // method for updating state
  handleSearch = (event) => {
    //   console.log(event.target.value)
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <div>
        <SearchBar
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
        />
        <BookList books={this.state.books}/>
      </div>
    );
  }
}

export default Container;
