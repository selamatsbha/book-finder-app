import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";

export default function Search({ setInputValue, handleSearch }) {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search">
      <input type="text" style={{ flexGrow: 3 }} onChange={handleInputChange} />
      <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
    </div>
  );
}
