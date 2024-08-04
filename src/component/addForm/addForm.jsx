import { useState } from "react";
import TextInput from "./textInput";
import AddButton from "./addButton";
import UploadButton from "./uploadButton";
import TextArea from "./textArea";
import "./addForm.css";
import { SuccessNotification, ErrorNotification } from "./notification";

function AddForm() {
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleDataChange(e) {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  function handleImagesChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setData((prevData) => {
        return {
          ...prevData,
          image: reader.result,
        };
      });
    };

    reader.readAsDataURL(file);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);
    const url = "http://localhost:5000/addItems";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => response.text())
      .then((data) => {
        setSuccess(true);
        setData({
          name: "",
          price: "",
          description: "",
          image: "",
        });
        console.log("POST request successful. Response:", data);
      })
      .catch((error) => {
        setError(true);
        console.log("POST request failed:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        key="itemName"
        type="text"
        id="itemName"
        name="name"
        value={data.name}
        onChange={handleDataChange}
      />
      <TextInput
        key="itemPrice"
        type="number"
        id="itemPrice"
        name="price"
        value={data.price}
        onChange={handleDataChange}
      />
      <TextArea
        name="description"
        value={data.description}
        onChange={handleDataChange}
      />
      <UploadButton onChange={handleImagesChange} />
      <AddButton text="Add" />
      <div className="notification-container">
        {success && <SuccessNotification />}
        {error && <ErrorNotification />}
      </div>
    </form>
  );
}

export default AddForm;
