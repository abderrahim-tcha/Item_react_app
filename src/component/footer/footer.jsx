import React from "react";
import "./footer.css";

function fotter() {
  let currectYear = new Date().getFullYear();
  return (
    <footer>
      <p>{"Copyright © " + currectYear}</p>
    </footer>
  );
}
export default fotter;
