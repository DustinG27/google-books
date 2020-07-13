import React, { Component } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import BookList from "./components/BookList";
import './App.css';

class App extends Component {
 render () {

  return (
    <div className = "App">
      <Header />
      <Container />
      <BookList />
    </div>
  )
 }
}

export default App;
