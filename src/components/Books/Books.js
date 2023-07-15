import BookData from "../BookData/BookData";

export default function Books(props) {
  return (
    <>
      {props.error !== "" && <p style={{ color: "red" }}>{props.error}</p>}
      <BookData bookData={props.bookData} />
    </>
  );
}
