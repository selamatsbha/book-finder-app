import Home from "../Home/Home";
import Search from "../Search/Search";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <Home />
      <Search/>
    </div>
  );
}
