import React, { useState } from "react";
import "./item.css";

function Item(props) {
  const [MouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => {
    setMouseEnter(!MouseEnter);
  };
  const handleMouseLeave = () => {
    setMouseEnter(!MouseEnter);
  };
  return (
    <div
      className="item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {MouseEnter ? (
        <button className="hover_button">add to cart</button>
      ) : null}
      <img src={`data:image/jpeg;base64,${props.picture}`} alt={props.name} />
    </div>
  );
}

export default Item;
