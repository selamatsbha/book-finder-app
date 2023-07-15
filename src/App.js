import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePagePage from "./pages/HomePagePage";
import AddBookPage from "./pages/AddBookPage";
import BooksPage from "./pages/BooksPage";
import { BookProvider } from "./BookAppContext";

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
  return (
    <div className="App">
      <BookProvider>
        <Routes>
          <Route path="/" element={<HomePagePage />} />
          <Route path="/book" element={<BooksPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
        </Routes>
      </BookProvider>
    </div>
  );
}

export default App;
