import "./uploadButton.css";

function uploadButton(props) {
  return (
    <button className="container-btn-file">
      Upload Pictures
      <input
        onChange={props.onChange}
        className="file"
        required
        multiple
        name="text"
        type="file"
      />
    </button>
  );
}

export default uploadButton;
