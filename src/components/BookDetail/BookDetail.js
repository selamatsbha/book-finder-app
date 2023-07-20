import { useContext } from "react";
import { BookContext } from "../../BookAppContext";
import { Card, Typography } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.h3`
  font-size: 35px !important;
  color: #fff;
  margin: 20px auto;
`;

const StyledBookDetail = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: auto 200px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.26) !important;
  border-radius: 5% !important;
`;

const StyledBookProfile = styled(Card)`
  display: flex;
  justfiy-content: flex-start;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
`;
const StyledBookContent = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
  gap: 0.5rem;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold !important;
  font-size: 20px !important;
`;

const StyledParagraph = styled.p`
  font-size: 17px !important;
`;

const StyledDiv = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0px 500px;
  gap: 50px;
  padding: 5px;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 250px;
`;

export default function BookDetail() {
  const { bookDetail, setBookDetail, bookData } = useContext(BookContext);
  const navigate = useNavigate();

  const handleDelete = (title) => {
    axios
      .delete(
        `https://secure-brook-62379-c7cd88c1503e.herokuapp.com/api/book/get-books;${title}`
      )
      .then(() => {
        const filteredbookData = bookData.filter(
          ({ book }) => book.title !== title
        );
        setBookDetail(filteredbookData);
      })
      .catch((error) => {
        console.log("Error, try agin", error);
      });
  };

  const handleEdit = (title) => {
    const editBook = bookData.filter((book) => book.title === title);
    setBookDetail(editBook);
  };

  return (
    <>
      <StyledHeader>Book Detail</StyledHeader>
      <StyledBookDetail>
        <StyledBookProfile>
          <StyledImage src={bookDetail.imageUrl} alt="" />
          <p>{bookDetail.title}</p>
          <StyledDiv>
            <FontAwesomeIcon
              icon={faPen}
              onClick={() => {
                handleEdit();
                navigate("/add-book");
              }}
            />
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete()} />
          </StyledDiv>
        </StyledBookProfile>
        <StyledBookContent>
          <StyledTypography>Author</StyledTypography>
          <StyledParagraph>{bookDetail.authors}</StyledParagraph>
        </StyledBookContent>
        <StyledBookContent>
          <StyledTypography>Description</StyledTypography>
          <StyledParagraph>{bookDetail.description}</StyledParagraph>
        </StyledBookContent>
      </StyledBookDetail>
    </>
  );
}
