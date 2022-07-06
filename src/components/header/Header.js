import React from "react";
import { ImSpoonKnife } from "react-icons/im";

import "./head.css";

const h = (props) => {
  return (
    <ul>
      <li>
        <ImSpoonKnife className="I" />
      </li>
      <li>
        <a href="#about">
          <h5>Food's Restaurant</h5>
        </a>
      </li>
    </ul>
  );
};
export default h;
