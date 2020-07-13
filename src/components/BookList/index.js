import React from "react";
import BookCard from "../BookCard";
import "./style.css";

const BookList = (props) => {
  return (
    <div className="list">
      {
        // taking data from state array and map over
        props.books.map((book, i) => {
          return (
            <BookCard
              key={i}
              image={book.volumeInfo.imageLinks.thumbnail}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              published={book.volumeInfo.publishedDate}
            />
          );
        })
      }
    </div>
  );
};

export default BookList;
