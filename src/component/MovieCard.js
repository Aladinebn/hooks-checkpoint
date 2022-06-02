import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard(props) {
  function UpperCase() {
    return props.title.toUpperCase();
  }
  return (
    <div>
      <div className="flex flex-col p-2">
        <img
          className="min-w-full"
          src={`../images/${props.posterURL}`}
          alt=""
        />
        <div className="flex justify-between justify-items-center pt-5 pb-5">
          <h1 className="text-2xl">{UpperCase()}</h1>
          <div>
            <span className="pr-2">
              <FontAwesomeIcon icon={faStar} color="#EC994B" />
            </span>
            {props.rating}
          </div>
        </div>
        <p className="p-2">{props.description}</p>
      </div>
    </div>
  );
}
