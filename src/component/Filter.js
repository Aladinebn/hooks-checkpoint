/* eslint-disable no-array-constructor */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Filter(props) {
  return (
    <div className="pb-10">
      <div className="flex justify-center items-center pb-5">
        <button onClick={props.rating1}>
          <FontAwesomeIcon icon={faStar} color="#EC994B" />
        </button>
        <button onClick={props.rating2}>
          {Array(1, 1).map((el, i) => {
            return <FontAwesomeIcon key={i} icon={faStar} color="#EC994B" />;
          })}
        </button>
        <button onClick={props.rating3}>
          {Array(1, 1, 1).map((el, i) => {
            return <FontAwesomeIcon key={i} icon={faStar} color="#EC994B" />;
          })}
        </button>
        <button onClick={props.rating4}>
          {Array(1, 1, 1, 1).map((el, i) => {
            return <FontAwesomeIcon key={i} icon={faStar} color="#EC994B" />;
          })}
          {/* <FontAwesomeIcon icon={faStar} color="#EC994B" />
          <FontAwesomeIcon icon={faStar} color="#EC994B" />
          <FontAwesomeIcon icon={faStar} color="#EC994B" />
          <FontAwesomeIcon icon={faStar} color="#EC994B" /> */}
        </button>
      </div>
      <div className="group">
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <input
          onChange={props.search}
          placeholder="Search"
          type="search"
          className="input"
        ></input>
      </div>
    </div>
  );
}
