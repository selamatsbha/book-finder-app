import React, { useState, useEffect } from "react";
import axios from "axios";

export const BookContext = React.createContext();

export const BookProvider = (props) => {
  const [bookData, setBookData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const apiUrl =
    "https://secure-brook-62379-c7cd88c1503e.herokuapp.com/api/book/get-books";

  async function getBooks() {
    try {
      const response = await axios.get(apiUrl);
      const data = await response.data;
      setBookData(data);
      // setBookDetail(data[0]);
      // setIsLoading(false);
      console.log("data", data);
    } catch (error) {
      setIsError(true);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  const handleSearch = () => {
    const filteredData = bookData.filter(({ name }) => {
      return name === inputValue;
    });
    setBookData(filteredData);
  };

  return (
    <BookContext.Provider
      value={{
        bookData,
        setBookData,
        inputValue,
        setInputValue,
        isError,
        setIsError,
        isLoading,
        setIsLoading,
        handleSearch,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};
