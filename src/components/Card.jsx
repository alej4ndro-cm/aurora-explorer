import React from "react";
import "./Card.css";

const Card = ({ title, image, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
