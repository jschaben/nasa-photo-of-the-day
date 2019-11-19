import React from "react";

const Card = props => {
    return (
        <div key={props.id}>
          <img alt="NASA Random Pic of the Day" src={props.url} />
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
          <p>{props.explanation}</p>
        </div>
    );
};

export default Card;