import AddBook from "../components/AddBook/AddBook";
import NavBar from "../components/NavBar/NavBar";
import Wrapper from "../components/Wrapper/Wrapper";

export default function AddBookPage(props) {
  return (
    <>
      <NavBar />
      <Wrapper>
        <AddBook bookData={props.bookData} setBookData={props.setBookData} />
      </Wrapper>
    </>
  );
}
