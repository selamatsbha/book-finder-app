import "./BookDataItem.css";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px 5.5px;
  float: left;
  text-align: left;
  gap: 10px;
  margin: 20px 80px;
  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 200px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.26);
`;

export default function BookDataItem() {
  const { bookData, setBookDetail } = useContext(BookContext);
  const navigate = useNavigate();

  return (
    <>
      {bookData.map(({ imageUrl, title, authors }, index) => {
        return (
          <>
            <StyledDiv
              className="div"
              key={index}
              onClick={() => {
                setBookDetail(bookData[index]);
                navigate("/book-detail");
              }}
            >
              <StyledImage src={imageUrl} alt="Pic here" />
              <div>
                <p>{title}</p>
                <h4>{authors}</h4>
              </div>
            </StyledDiv>
          </>
        );
      })}
    </>
  );
}
