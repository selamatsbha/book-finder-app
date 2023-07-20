import { useState, useContext } from "react";
import "./AddBook.css";
import { BookContext } from "../../BookAppContext";

export default function AddBook() {
  const { setBookData, bookData } = useContext(BookContext);
  const [inputValue, setInputValue] = useState({
    imageUrl: "",
    title: "",
    authors: "",
    description: "",
  });

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const SuccessAlert = () => {
    return (
      <div
        style={{
          backgroundColor: "lightgreen",
          border: "1px solid lightgreen",
          height: "80px",
        }}
      >
        <h3>Succes</h3>
        <p>You have successfuly added a New Book!</p>
      </div>
    );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBookData([...bookData, inputValue]);
    setShowSuccessAlert(true);
  };

  return (
    <>
      <h2>Add New Book</h2>
      {showSuccessAlert && <SuccessAlert />}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="image"
          value={inputValue.imageUrl}
          name="imageUrl"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="book title"
          value={inputValue.title}
          name="bookTitle"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="author name"
          value={inputValue.authors}
          name="authors"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="book description"
          value={inputValue.description}
          name="description"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
