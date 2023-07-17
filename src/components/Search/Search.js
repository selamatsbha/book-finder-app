import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  // border: 0.5px solid black;
  width: 50%;
  margin: 0px 300px;
`;

export default function Search() {
  const { setInputValue, handleSearch } = useContext(BookContext);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <StyledSearch>
      <input
        type="text"
        placeholder="Search book title"
        style={{ flexGrow: 3 }}
        onChange={handleInputChange}
      />
      <FontAwesomeIcon
        icon={faSearch}
        onClick={() => {
          handleSearch();
          navigate("/book");
        }}
      />
    </StyledSearch>
  );
}
