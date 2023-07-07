import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/HomePage/HomePage";
import Books from "./components/Books/Books";
import Wrapper from "./components/Wrapper/Wrapper";
// import AddBook from "./components/AddBook/AddBook";

const bookData = [
  {
    image:
      "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    bookName: "The Psychology Of Money",
    authorName: "Morgan Housel",
    publishedYear: "2001",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    bookName: "The Chronicles Of Narnia",
    authorName: "C.S. Lewis",
    publishedYear: "1995",
  },
  {
    image:
      "https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    bookName: "Company Of One",
    authorName: "Paul Jarvis",
    publishedYear: "2013",
  },
  {
    image:
      "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2slMjBjb3ZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    bookName: "The Picture Of Dorian Gray",
    authorName: "Oscar Wilde",
    publishedYear: "2007",
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <Wrapper>
        <Home />
        <Books bookData={bookData} />
      </Wrapper>
    </div>
  );
}

export default App;
