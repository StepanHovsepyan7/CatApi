import React from "react";

function Cards({ imageUrl, name, origin,wikipediaLink }) {
  return (
    <a href={wikipediaLink}  target="_blank">
      <div className="card" data-aos="fade-up" data-aos-duration="1000">
        <img src={imageUrl} className="cardImg" alt="" />
        <div className="aboutCat">
          <span className="name">{name}</span>
          <span className="name">{origin}</span>
        </div>
      </div>
    </a>
  );
}

export default Cards;
