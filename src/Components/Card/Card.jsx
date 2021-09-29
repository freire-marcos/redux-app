import './Card.css';
import React from 'react';

function Card(props) {
  return (
    <div className="Card">
      <div className="Header">
        <span className="Title">TITULO</span>
      </div>
      <div className="Content">CONTENT</div>
    </div>
  );
}

export default Card;
