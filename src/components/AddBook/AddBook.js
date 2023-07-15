import { useState } from "react";
import "./AddBook.css";

export default function AddBook(props) {
  const [inputValue, setInputValue] = useState({
    image: "",
    bookName: "",
    authorName: "",
    publishedYear: "",
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
    props.setBookData([...props.bookData, inputValue]);
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
          value={inputValue.image}
          name="image"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="book name"
          value={inputValue.bookName}
          name="bookName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="author name"
          value={inputValue.authorName}
          name="authorName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="published year"
          value={inputValue.publishedYear}
          name="publishedYear"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}
