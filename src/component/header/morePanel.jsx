import React from "react";
import "./morePanel.css";

function morePanel(props) {
  function hideMorePanel(visible) {
    props.setIsMorePanelVisible(!visible);
  }
  return (
    <div className="panel-container" onClick={hideMorePanel}>
      <div className="panel" onClick={(event) => event.stopPropagation()}>
        <h1>More Panel</h1>
        <a href="/">Main Page</a>
        <a href="/addItems">Add Item</a>
        <a href="https://www.twitter.com">Twitter</a>
      </div>
    </div>
  );
}
export default morePanel;
