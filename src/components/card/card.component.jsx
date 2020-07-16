import React from "react";
import "./card.styles.scss";

const Card = (props) => {
  return (
    <div className="card-container">
      <div key={props.monster.id}>
        <img
          alt="robohash"
          src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
      </div>
    </div>
  );
};

export default Card;
