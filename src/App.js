import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePagePage from "./pages/HomePagePage";
import AddBookPage from "./pages/AddBookPage";
import BooksPage from "./pages/BooksPage";
// import axios from "axios";

// const data = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     bookName: "The Psychology Of Money",
//     authorName: "Morgan Housel",
//     publishedYear: "2001",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     bookName: "The Chronicles Of Narnia",
//     authorName: "C.S. Lewis",
//     publishedYear: "1995",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     bookName: "Company Of One",
//     authorName: "Paul Jarvis",
//     publishedYear: "2013",
//   },
//   {
//     image:
//       "https://cdn.pixabay.com/photo/2016/04/09/18/21/photo-book-1318702_1280.png",
//     bookName: "Magic Book",
//     authorName: "Oscar Wilde",
//     publishedYear: "2000",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     bookName: "The Picture Of Dorian Gray",
//     authorName: "Oscar Wilde",
//     publishedYear: "2007",
//   },
//   {
//     image:
//       "https://cdn.pixabay.com/photo/2015/11/24/21/08/dreamland-1060880_1280.jpg",
//     bookName: "Dreamland Angel",
//     authorName: "Shara Jeson",
//     publishedYear: "2019",
//   },
//   {
//     image:
//       "https://cdn.pixabay.com/photo/2019/07/24/10/57/fantasy-4359903_1280.jpg",
//     bookName: "Fantasy Portrait",
//     authorName: "Jhon Smith",
//     publishedYear: "1989",
//   },
// ];

function App() {
  const [bookData, setBookData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  // const [loading, setLoading] = useState(true);

  const apiUrl = "http://localhost:2000/api/book/get-books";

  const getAllBooks = async () => {
    fetch(apiUrl)
      .then((response) => {
        if (!response) {
          throw new Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        setBookData(data);
      })
      .catch((error) => {
        setError("error");
      });
  };

  // async function getBook() {
  //   try {
  //     const response = await axios.get(apiUrl);
  //     const data = await response.data;
  //     setBookData(data);
  //     // setBookDetail(data[0]);
  //     // setIsLoading(false);
  //     console.log("data", data);
  //   } catch (error) {
  //     // setIsError(true);
  //   }
  // }

  useEffect(() => {
    getAllBooks();
  }, [error]);

  const handleSearch = () => {
    const filteredData = bookData.filter(({ name }) => {
      return name === inputValue;
    });
    setBookData(filteredData);
  };

  return (
    // <div className="App">
    //   <NavBar />
    //   <HomePage setInputValue={setInputValue} handleSearch={handleSearch} />
    //   <Wrapper>
    //     <Books bookData={bookData} />
    //     <AddBook bookData={bookData} setBookData={setBookData} />
    //   </Wrapper>
    // </div>
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePagePage
              setInputValue={setInputValue}
              handleSearch={handleSearch}
            />
          }
        />
        <Route
          path="/book"
          element={<BooksPage error={error} bookData={bookData} />}
        />
        <Route
          path="/add-book"
          element={
            <AddBookPage bookData={bookData} setBookData={setBookData} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
