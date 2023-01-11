import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

export default function MealDetails(props) {
  return (
    <div className="Meal flex-c" key={props.id}>
      <div className="fir">
        <img src={props.img} alt={props.name} />
        <div className="info flex-c">
          <h1>{props.name}</h1>
          <div className="tags flex-r">
            <p>{props.area}</p>
            <p>{props.category}</p>
            <span>
              <a href={props.src} target="_blank" rel="noreferrer">
                More on
              </a>
            </span>
          </div>
          <div className="ingredients flex-c">
            <h2>Ingredients:</h2>
            <div className="in-me flex-r">
              <ul className="flex-c">{props.ingre}</ul>
              <ul className="flex-c">{props.mesures}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sec">
        <div className="instructions flex-c">
          <h2>Instructions:</h2>
          <div className="details">{props.instruction}</div>
        </div>
        <YoutubeEmbed embedId={props.youtube} />
      </div>
    </div>
  );
}
