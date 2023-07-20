import NavBar from "../components/NavBar/NavBar";
import Wrapper from "../components/Wrapper/Wrapper";
import BookDetail from "../components/BookDetail/BookDetail";

export default function BookDetailPage() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <BookDetail />
      </Wrapper>
    </>
  );
}
