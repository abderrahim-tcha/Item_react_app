import "./textArea.css";
function textArea(props) {
  return (
    <div>
      <textarea
        name={props.name}
        onChange={props.onChange}
        required
        value={props.value}
        placeholder="Description"
      ></textarea>
    </div>
  );
}

export default textArea;
