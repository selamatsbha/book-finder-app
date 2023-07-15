import AddBook from "../components/AddBook/AddBook";
import NavBar from "../components/NavBar/NavBar";
import Wrapper from "../components/Wrapper/Wrapper";

export default function AddBookPage() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <AddBook />
      </Wrapper>
    </>
  );
}
