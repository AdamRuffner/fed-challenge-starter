import React, { useState } from 'react';
import { BiStopwatch } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";

const Icons = props => {
  return (
    <p>
      <BiStopwatch /> {props.time} <FaRunning /> {props.meters} M
    </p>
  )
}

const Card = ({ src, alt, description, profileSrc, profileAlt, time, meters, icons }) => {
  const [active, setActive] = useState(false);

  return (
  <div className="card" onClick={() => setActive(!active)}>
        <div className="img-header">
          <img src={src} alt={alt} />
        </div>
        <div className="info">
          <h1>{description}</h1>
          <img
            src={profileSrc}
            alt={profileAlt}
          />
        </div>
        {
          icons ? <Icons time={time} meters={meters} /> : null
        }
        <button id="toggleButton" >
          {active ? "VIEW DETAILS" : ""}
        </button>
      </div>
  )
}

export default Card;