import "./BookDataItem.css";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function BookDataItem() {
  const { bookData, setBookData } = useContext(BookContext);
  const navigate = useNavigate();

  const handleDelete = (name) => {
    axios
      .delete(
        `https://secure-brook-62379-c7cd88c1503e.herokuapp.com/api/book/get-books;${name}`
      )
      .then(() => {
        const filteredbookData = bookData.filter(
          ({ book }) => book.name !== name
        );
        setBookData(filteredbookData);
      })
      .catch((error) => {
        console.log("Error, try agin", error);
      });
  };

  const handleEdit = (id) => {
    const editBook = bookData.filter((book) => book._id === id);
    setBookData(editBook);
  };

  return (
    <>
      {bookData.map(({ _id, imageUrl, title, authors }, index) => {
        return (
          <>
            <div className="div" key={index}>
              <img src={imageUrl} alt="Pic here" />
              <div>
                <p>{title}</p>
                <h4>{authors}</h4>
                <div className="btn">
                  <FontAwesomeIcon
                    icon={faPen}
                    onClick={() => {
                      handleEdit(_id);
                      navigate("/add-book");
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDelete(_id)}
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
