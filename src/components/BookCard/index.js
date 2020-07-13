import React from "react";
import "./style.css";

const BookCard = (props) => {
  return (
    <div className="card-container">
      {/* grabbing all book info from api to display in book cards */}
      <img src={props.image} alt="" />
      <div className="desc">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.published}</p>
      </div>
    </div>
  );
};

export default BookCard;
