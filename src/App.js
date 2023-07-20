import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePagePage from "./pages/HomePagePage";
import AddBookPage from "./pages/AddBookPage";
import BooksPage from "./pages/BooksPage";
import BookDetailPage from "./pages/BookDetailPage";
import { BookProvider } from "./BookAppContext";

function App() {
  return (
    <div className="App">
      <BookProvider>
        <Routes>
          <Route path="/" element={<HomePagePage />} />
          <Route path="/book" element={<BooksPage />} />
          <Route path="/book-detail" element={<BookDetailPage />} />
          <Route path="/add-book" element={<AddBookPage />} />
        </Routes>
      </BookProvider>
    </div>
  );
}

export default App;
