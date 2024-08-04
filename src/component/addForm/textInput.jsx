import "./textInput.css";

function TextInput(props) {
  return (
    <div className="text-input-container">
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder=" "
        required
      />
      <label htmlFor={props.id}>{props.name}</label>
    </div>
  );
}

export default TextInput;
