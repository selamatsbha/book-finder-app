import BookData from "../BookData/BookData";
import { useContext } from "react";
import { BookContext } from "../../BookAppContext";

export default function Books() {
  const { isError } = useContext(BookContext);
  return (
    <>
      {isError !== false && <p style={{ color: "red" }}>Server error</p>}
      <BookData />
    </>
  );
}
