import Wrapper from "../components/Wrapper/Wrapper";
import Books from "../components/Books/Books";
import NavBar from "../components/NavBar/NavBar";

export default function BooksPage(props) {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Books bookData={props.bookData} error={props.error} />
      </Wrapper>
    </>
  );
}
