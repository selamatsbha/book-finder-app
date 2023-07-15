import Home from "../Home/Home";
import Search from "../Search/Search";
import "./HomePage.css";

export default function HomePage({ setInputValue, handleSearch }) {
  return (
    <div className="home-page">
      <Home />
      <Search setInputValue={setInputValue} handleSearch={handleSearch} />
    </div>
  );
}
