import "./addButton.css";
import { AddSvg } from "./svg";

function addButton(props) {
  return (
    <button type="submit" className="button">
      <span className="button__text">{props.text}</span>
      <span className="button__icon">
        <AddSvg />
      </span>
    </button>
  );
}
export default addButton;
