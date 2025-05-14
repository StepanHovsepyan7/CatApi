import React from "react";

function Cards({ imageUrl, name,origin}) {
  return (
    <div className="card" data-aos="fade-up" data-aos-duration="1000">
      <img src={imageUrl} className="cardImg" alt="" />
      <div className="aboutCat">
        <span className="name">{name}</span>
        <span className="name">{origin}</span>
      </div>
    </div>
  );
}

export default Cards;
